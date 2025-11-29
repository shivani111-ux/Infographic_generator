import React, { useRef } from 'react'
import { Upload, Sparkles } from 'lucide-react'

export default function Uploader({ onUpload, wantAI, setWantAI }) {
  const ref = useRef()

  return (
    <section className="card">
      <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between">
        <div>
          <h2 className="text-xl font-semibold">Upload Dataset</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            CSV  up to a few MB. We’ll summarize and visualize it instantly.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <label className="inline-flex items-center gap-2 text-sm cursor-pointer">
            {/* <input type="checkbox" checked={wantAI} onChange={e => setWantAI(e.target.checked)} /> */}
            {/* <Sparkles className="w-4 h-4" /> AI Insights */}
          </label>
          <input
            ref={ref}
            type="file"
            accept=".csv,.json"
            onChange={e => e.target.files[0] && onUpload(e.target.files[0])}
            className="hidden"
          />
          <button className="btn" onClick={() => ref.current.click()}>
            <Upload className="w-4 h-4" /> Choose File
          </button>
        </div>
      </div>
    </section>
  )
}
