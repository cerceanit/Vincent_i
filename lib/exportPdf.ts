'use client'

export async function exportToPdf(content: string, filename: string): Promise<void> {
  try {
    // Динамический импорт pdfmake (только на клиенте)
    const pdfMake = await import('pdfmake/build/pdfmake')
    const pdfFonts = await import('pdfmake/build/vfs_fonts')

    // Регистрируем шрифты
    pdfMake.default.vfs = (pdfFonts as any).pdfFonts

    // Обрабатываем строки документа
    const lines = content.split('\n')
    const docContent: any[] = []

    lines.forEach((line) => {
      if (line.trim() === '') {
        docContent.push({ text: '', margin: [0, 2, 0, 2] })
      } else {
        // Определяем, является ли это заголовком
        const isHeader = 
          line === line.toUpperCase() && 
          line.trim().length > 0 && 
          line.trim().length < 50

        if (isHeader) {
          docContent.push({
            text: line,
            fontSize: 14,
            bold: true,
            margin: [0, 10, 0, 5],
            color: '#333333'
          })
        } else {
          docContent.push({
            text: line,
            fontSize: 11,
            margin: [0, 2, 0, 2],
            color: '#000000'
          })
        }
      }
    })

    // Создаём PDF документ
    const docDefinition = {
      content: docContent,
      pageMargins: [20, 20, 20, 20],
      defaultStyle: {
        font: 'Helvetica',
        size: 11,
        lineHeight: 1.6
      }
    }

    // Генерируем и скачиваем PDF
    pdfMake.default.createPdf(docDefinition).download(`${filename}.pdf`)
    console.log('✓ PDF успешно скачан:', filename)
  } catch (error) {
    console.error('❌ Ошибка при генерации PDF:', error)
    throw error
  }
}
