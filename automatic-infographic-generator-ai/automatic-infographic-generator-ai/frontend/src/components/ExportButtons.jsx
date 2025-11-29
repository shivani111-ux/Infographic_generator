import React from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { Download, FileDown } from 'lucide-react'

export default function ExportButtons() {
  const exportPNG = async () => {
    const el = document.getElementById('infographic')
    const canvas = await html2canvas(el, { scale: 2 })
    const data = canvas.toDataURL('image/png')
    const link = document.createElement('a')
    link.href = data
    link.download = 'infographic.png'
    link.click()
  }

  const exportPDF = async () => {
    const el = document.getElementById('infographic')
    const canvas = await html2canvas(el, { scale: 2 })
    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF('p', 'mm', 'a4')
    const pageWidth = pdf.internal.pageSize.getWidth()
    const imgProps = pdf.getImageProperties(imgData)
    const imgHeight = (imgProps.height * pageWidth) / imgProps.width
    pdf.addImage(imgData, 'PNG', 0, 0, pageWidth, imgHeight)
    pdf.save('infographic.pdf')
  }

  return (
    <div className="flex gap-2 justify-end">
      <button className="btn-ghost" onClick={exportPNG}><Download className="w-4 h-4" /> PNG</button>
      <button className="btn" onClick={exportPDF}><FileDown className="w-4 h-4" /> PDF</button>
    </div>
  )
}
