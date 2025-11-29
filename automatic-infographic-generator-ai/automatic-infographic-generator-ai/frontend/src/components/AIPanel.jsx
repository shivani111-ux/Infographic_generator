// import React from 'react'
// import { Sparkles } from 'lucide-react'

// export default function AIPanel({ text }) {
//   return (
//     <div>
//       <div className="flex items-center gap-2 mb-2">
//         <Sparkles className="w-5 h-5 text-yellow-500" />
//         <h3 className="font-semibold">AI Insights</h3>
//       </div>
//       {text ? (
//         <div className="prose prose-sm dark:prose-invert max-w-none whitespace-pre-wrap">
//           {text}
//         </div>
//       ) : (
//         <p className="text-sm text-gray-600 dark:text-gray-400">
//           Enable AI insights at upload to generate an executive summary automatically.
//         </p>
//       )}
//     </div>
//   )
// }import React from 'react'
import { Sparkles } from 'lucide-react'

export default function AIPanel({ text }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <Sparkles className="w-5 h-5 text-yellow-500" />
        <h3 className="font-semibold">Summary</h3>
      </div>
      {text ? (
        <div className="prose prose-sm dark:prose-invert max-w-none whitespace-pre-wrap">
          {text}
        </div>
      ) : (
        <p className="text-sm text-gray-600 dark:text-gray-400">
          No AI insights available. Try uploading again with{" "}
          <span className="font-medium">“AI Insights”</span> enabled.
        </p>
      )}
    </div>
  )
}
