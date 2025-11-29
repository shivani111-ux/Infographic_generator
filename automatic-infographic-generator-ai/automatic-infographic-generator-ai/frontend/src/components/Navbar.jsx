import React from 'react'
import { Sun, Moon, BarChart3 } from 'lucide-react'

export default function Navbar({ dark, setDark }) {
  return (
    <header className="sticky top-0 z-10 backdrop-blur bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-lg">
          <BarChart3 className="w-5 h-5" />
          <span>Auto Infographic </span>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setDark(!dark)} className="btn-ghost">
            {dark ? <Sun className="w-5 h-5"/> : <Moon className="w-5 h-5" />}
            <span className="hidden sm:inline">{dark ? 'Light' : 'Dark'} Mode</span>
          </button>
          {/* <a href="https://github.com" target="_blank" className="btn-ghost">Docs</a> */}
        </div>
      </div>
    </header>
  )
}
