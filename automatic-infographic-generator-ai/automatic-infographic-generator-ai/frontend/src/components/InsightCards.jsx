// // import React from 'react'

// // export default function InsightCards({ data }) {
// //   const cols = data.columns || []
// //   const rows = data.rows || 0
// //   const nums = data.numeric_summary || {}
// //   const firstNumCol = Object.keys(nums)[0]
// //   const stat = firstNumCol ? nums[firstNumCol] : null

// //   return (
// //     <div className="space-y-3">
// //       <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/20">
// //         <div className="text-sm text-gray-600 dark:text-gray-300">Rows</div>
// //         <div className="text-2xl font-bold">{rows}</div>
// //       </div>
// //       <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/20">
// //         <div className="text-sm text-gray-600 dark:text-gray-300">Columns</div>
// //         <div className="text-lg font-semibold break-words">{cols.join(', ')}</div>
// //       </div>
// //       {stat && (
// //         <div className="p-4 rounded-xl bg-gradient-to-br from-fuchsia-50 to-fuchsia-100 dark:from-fuchsia-900/30 dark:to-fuchsia-800/20">
// //           <div className="text-sm text-gray-600 dark:text-gray-300">Featured Metric • {firstNumCol}</div>
// //           <div className="mt-1 text-sm">Mean: <b>{stat.mean?.toFixed?.(2)}</b></div>
// //           <div className="text-sm">Min–Max: <b>{stat.min}</b> – <b>{stat.max}</b></div>
// //         </div>
// //       )}
// //     </div>
// //   )
// // }
// import React from "react"
// import { FileText, Table } from "lucide-react"

// export default function InsightCards({ data }) {
//   const summary = data?.ai_summary || "No AI summary generated."
//   const rows = data?.rows ?? "N/A"
//   const cols = data?.columns ?? "N/A"

//   return (
//     <div className="rounded-xl p-4 bg-white dark:bg-gray-800 shadow border space-y-4">
      
//       {/* Quick Stats */}
//       <div className="flex items-center gap-2">
//         <Table className="w-5 h-5 text-blue-500" />
//         <h3 className="font-semibold">Quick Stats</h3>
//       </div>
//       <div className="grid grid-cols-2 gap-2 text-sm">
//         <div className="p-2 rounded bg-gray-100 dark:bg-gray-700">
//           <span className="font-medium">Rows:</span> {rows}
//         </div>
//         <div className="p-2 rounded bg-gray-100 dark:bg-gray-700">
//           <span className="font-medium">Columns:</span> {cols}
//         </div>
//       </div>

//       {/* AI Summary */}
//       <div>
//         <div className="flex items-center gap-2 mb-1">
//           <FileText className="w-5 h-5 text-indigo-500" />
//           <h3 className="font-semibold">AI Summary</h3>
//         </div>
//         <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
//           {summary}
//         </p>
//       </div>
//     </div>
//   )
// }
// src/components/InsightCards.jsx
import React from "react"
import { Database, Hash, List, Grid } from "lucide-react"

export default function InsightCards({ data }) {
  const rows = data?.rows ?? "N/A"
  const cols = data?.columns?.length ?? "N/A"
  const numCols = data?.numeric_cols?.length ?? "N/A"
  const catCols = data?.cat_cols?.length ?? "N/A"

  const cards = [
    { label: "Rows", value: rows, icon: Database, color: "text-blue-500" },
    { label: "Columns", value: cols, icon: Grid, color: "text-purple-500" },
    // { label: "Numeric Columns", value: numCols, icon: Hash, color: "text-green-500" },
    // { label: "Categorical Columns", value: catCols, icon: List, color: "text-orange-500" },
  ]

  return (
    <div className="grid grid-cols-2 gap-4">
      {cards.map((c, i) => (
        <div
          key={i}
          className="p-4 rounded-xl bg-white dark:bg-gray-800 border dark:border-gray-700 shadow-sm flex flex-col items-center text-center"
        >
          <c.icon className={`w-6 h-6 mb-2 ${c.color}`} />
          <span className="text-xl font-bold">{c.value}</span>
          <span className="text-sm text-gray-600 dark:text-gray-400">{c.label}</span>
        </div>
      ))}
    </div>
  )
}
