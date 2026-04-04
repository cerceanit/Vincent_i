import { NextRequest, NextResponse } from 'next/server'
import { Document, Packer, Paragraph, TextRun } from 'docx'
import puppeteer from 'puppeteer'

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, char => map[char])
}

export async function POST(request: NextRequest) {
  try {
    const { content, filename, format } = await request.json()

    if (format === 'docx') {
      // Create DOCX document
      const lines = content.split('\n')
      const paragraphs = lines.map((line: string) => {
        // Detect if it's a header (all caps or specific patterns)
        const isHeader = line === line.toUpperCase() && line.trim().length > 0 && line.trim().length < 50
        
        return new Paragraph({
          children: [
            new TextRun({
              text: line,
              bold: isHeader,
              size: isHeader ? 28 : 24,
            }),
          ],
          spacing: {
            after: 200,
          },
        })
      })

      const doc = new Document({
        sections: [
          {
            properties: {},
            children: paragraphs,
          },
        ],
      })

      const buffer = await Packer.toBuffer(doc)
      
      // Encode filename for HTTP header (RFC 5987)
      const encodedFilename = Buffer.from(`${filename}.docx`).toString('utf8')
      const filenameParam = `filename*=UTF-8''${encodeURIComponent(encodedFilename)}`

      return new NextResponse(buffer as unknown as Blob, {
        headers: {
          'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          'Content-Disposition': `attachment; ${filenameParam}`,
        },
      })
    } else if (format === 'pdf') {
      // Generate HTML content
      const htmlLines = content.split('\n').map((line: string) => {
        if (line.trim() === '') {
          return '<br/>'
        }
        const isHeader = line === line.toUpperCase() && line.trim().length > 0 && line.trim().length < 50
        return isHeader 
          ? `<h2 style="margin-top: 10px; margin-bottom: 10px; font-weight: bold; font-size: 13pt;">${escapeHtml(line)}</h2>`
          : `<p style="margin: 5px 0; font-size: 11pt;">${escapeHtml(line)}</p>`
      }).join('')

      const html = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <style>
              body { font-family: Arial, sans-serif; margin: 50px; }
              h2 { margin: 10px 0; font-size: 13pt; font-weight: bold; }
              p { margin: 5px 0; font-size: 11pt; }
              br { margin: 5px 0; }
            </style>
          </head>
          <body>
            ${htmlLines}
          </body>
        </html>
      `

      let browser
      try {
        browser = await puppeteer.launch({ headless: true })
        const page = await browser.newPage()
        await page.setContent(html, { waitUntil: 'networkidle0' })
        const pdfBuffer = await page.pdf({ format: 'A4', margin: { top: 50, bottom: 50, left: 50, right: 50 } })
        await browser.close()

        // Encode filename for HTTP header (RFC 5987)
        const encodedFilename = Buffer.from(`${filename}.pdf`).toString('utf8')
        const filenameParam = `filename*=UTF-8''${encodeURIComponent(encodedFilename)}`

        return new NextResponse(pdfBuffer as unknown as Blob, {
          headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': `attachment; ${filenameParam}`,
          },
        })
      } catch (error) {
        if (browser) await browser.close()
        throw error
      }
    }

    return NextResponse.json(
      { error: 'Invalid format' },
      { status: 400 }
    )
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    console.error('Export error:', errorMessage, error)
    return NextResponse.json(
      { error: `Failed to export document: ${errorMessage}` },
      { status: 500 }
    )
  }
}
