'use client'

declare global {
  interface Window {
    html2pdf: any
  }
}

export async function exportToPdf(content: string, filename: string): Promise<void> {
  try {
    // Проверяем, что html2pdf доступен
    if (!window.html2pdf) {
      throw new Error('html2pdf library not loaded')
    }

    // Создаем HTML элемент с содержимым
    const element = document.createElement('div')
    element.style.padding = '20mm'
    element.style.fontFamily = 'Arial, sans-serif'
    element.style.color = '#000'
    element.style.lineHeight = '1.6'

    // Обрабатываем строки документа
    const lines = content.split('\n')
    lines.forEach((line) => {
      const p = document.createElement('p')
      p.style.margin = '5px 0'
      p.style.fontSize = '11pt'

      // Определяем, является ли это заголовком
      const isHeader = 
        line === line.toUpperCase() && 
        line.trim().length > 0 && 
        line.trim().length < 50

      if (isHeader) {
        p.style.fontWeight = 'bold'
        p.style.fontSize = '14pt'
        p.style.marginTop = '15px'
        p.style.marginBottom = '10px'
        p.style.color = '#333'
      }

      p.textContent = line || ' '
      element.appendChild(p)
    })

    // Опции для html2pdf
    const opt = {
      margin: 15,
      filename: `${filename}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, allowTaint: true },
      jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    }

    // Генерируем и скачиваем PDF через window.html2pdf
    await window.html2pdf().set(opt).from(element).save().then(() => {
      console.log('✓ PDF успешно скачан:', filename)
    })
  } catch (error) {
    console.error('❌ Ошибка при генерации PDF:', error)
    throw error
  }
}
