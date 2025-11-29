import React from 'react'

export default function TemplatePicker({ template, setTemplate }) {
  return (
    <div>
      <h3 className="font-semibold mb-2">Layout Template</h3>
      <div className="flex flex-wrap gap-2">
        {['balanced','analytics','presentation'].map(t => (
          <button
            key={t}
            onClick={() => setTemplate(t)}
            className={`px-3 py-2 rounded-xl border ${t===template ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-300 dark:border-gray-700'}`}
          >
            {t[0].toUpperCase()+t.slice(1)}
          </button>
        ))}
      </div>
      <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
        Templates tweak chart emphasis and arrangement (balanced defaults shown).
      </p>
    </div>
  )
}
