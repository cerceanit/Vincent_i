'use client'

import html2pdf from 'html2pdf.js'

export function exportToPdf(content: string, filename: string) {
  // Создаем HTML элемент с содержимым
  const element = document.createElement('div')
  element.style.padding = '20mm'
  element.style.fontFamily = 'Arial, sans-serif'
  element.style.color = '#000'

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
      p.style.fontSize = '13pt'
      p.style.marginTop = '10px'
      p.style.marginBottom = '10px'
    }

    p.textContent = line || ' '
    element.appendChild(p)
  })

  // Опции для html2pdf
  const opt = {
    margin: 20,
    filename: `${filename}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' },
  }

  // Генерируем и скачиваем PDF
  html2pdf().set(opt).from(element).save()
}
