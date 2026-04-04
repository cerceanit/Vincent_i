'use client'

export async function exportToPdf(content: string, filename: string): Promise<void> {
  try {
    // Создаем новое окно для печати
    const printWindow = window.open('', '_blank', 'height=500,width=500')
    if (!printWindow) {
      throw new Error('Не удалось открыть окно печати')
    }

    // Строим HTML для печати
    const lines = content.split('\n')
    let htmlContent = ''

    lines.forEach((line) => {
      const isHeader = 
        line === line.toUpperCase() && 
        line.trim().length > 0 && 
        line.trim().length < 50

      if (isHeader) {
        htmlContent += `<p style="font-size: 16px; margin: 15px 0 10px 0; text-decoration: underline; font-weight: normal;"><strong>${line}</strong></p>`
      } else {
        htmlContent += `<p style="font-size: 12px; margin: 5px 0; font-family: Arial, sans-serif;">${line || '&nbsp;'}</p>`
      }
    })

    // Создаём HTML документ
    const printContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>${filename}</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #000;
              margin: 20px;
              padding: 0;
              background: white;
            }
            p {
              margin: 5px 0;
              padding: 0;
            }
            @media print {
              body { margin: 0; padding: 20mm; }
            }
          </style>
        </head>
        <body>
          ${htmlContent}
          <script>
            window.onload = function() {
              window.print();
              window.close();
            }
          </script>
        </body>
      </html>
    `

    // Пишем содержимое в новое окно
    printWindow.document.open()
    printWindow.document.write(printContent)
    printWindow.document.close()

    console.log('✓ Диалог печати открыт')
  } catch (error) {
    console.error('❌ Ошибка при генерации PDF:', error)
    throw error
  }
}
