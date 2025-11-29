import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Uploader from './components/Uploader'
import DatasetSelector from './components/DatasetSelector'
import InsightCards from './components/InsightCards'
import ChartGallery from './components/ChartGallery'
import TemplatePicker from './components/TemplatePicker'
import ExportButtons from './components/ExportButtons'
import AIPanel from './components/AIPanel'

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000'

export default function App() {
  const [dark, setDark] = useState(false)
  const [datasets, setDatasets] = useState([]) // each: { meta, data }
  const [active, setActive] = useState(0)
  const [wantAI, setWantAI] = useState(true)
  const [template, setTemplate] = useState('balanced')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  const activeData = datasets[active] || null

  const onUpload = async (file) => {
    const form = new FormData()
    form.append('file', file)
    form.append('want_ai', String(wantAI))
    const res = await axios.post(`${API_BASE}/upload`, form)
    setDatasets(prev => [...prev, { meta: { name: file.name }, data: res.data }])
    setActive(datasets.length)
  }

  const onRemove = (index) => {
    setDatasets(prev => prev.filter((_, i) => i !== index))
    setActive(a => Math.max(0, a - (index <= a ? 1 : 0)))
  }

  return (
    <div className="min-h-screen text-gray-900 dark:text-gray-100">
      <Navbar dark={dark} setDark={setDark} />

      <main className="max-w-6xl mx-auto px-4 py-6 space-y-6">
        <Uploader onUpload={onUpload} wantAI={wantAI} setWantAI={setWantAI} />

        {datasets.length > 0 && (
          <DatasetSelector datasets={datasets} active={active} setActive={setActive} onRemove={onRemove} />
        )}

        {activeData && (
          <>
            <section id="infographic" className="grid md:grid-cols-3 gap-4">
              <motion.div className="md:col-span-1 card" initial={{opacity:0, y:10}} animate={{opacity:1, y:0}}>
                <InsightCards data={activeData.data} />
              </motion.div>

              <motion.div className="md:col-span-2 card" initial={{opacity:0, y:10}} animate={{opacity:1, y:0}}>
                <ChartGallery summary={activeData.data} template={template} />
              </motion.div>
            </section>

            <section className="grid md:grid-cols-3 gap-4">
              <div className="card md:col-span-2">
                <TemplatePicker template={template} setTemplate={setTemplate} />
              </div>
              <div className="card">
                <AIPanel text={activeData.data.ai_insight} />

              </div>
            </section>

            <ExportButtons />
          </>
        )}
      </main>
    </div>
  )
}
