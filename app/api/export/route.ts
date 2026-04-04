import { NextRequest, NextResponse } from 'next/server'
import { Document, Packer, Paragraph, TextRun } from 'docx'

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
    }

    return NextResponse.json(
      { error: 'Invalid format. Use jsPDF on client for PDF.' },
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
