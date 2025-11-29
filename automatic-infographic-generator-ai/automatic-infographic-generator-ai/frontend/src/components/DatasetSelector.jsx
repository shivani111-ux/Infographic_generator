// import React from 'react'
// import { Trash2 } from 'lucide-react'

// export default function DatasetSelector({ datasets, active, setActive, onRemove }) {
//   return (
//     <section className="card flex flex-wrap items-center gap-2">
//       {datasets.map((d, i) => (
//         <button
//           key={i}
//           className={`px-3 py-2 rounded-xl text-sm border transition ${i===active ? 'bg-blue-600 text-white border-blue-600' : 'bg-transparent border-gray-300 dark:border-gray-700'}`}
//           onClick={() => setActive(i)}
//           title={d.meta.name}
//         >
//           Dataset {i+1}: {d.meta.name}
//         </button>
//       ))}
//       <div className="flex-1" />
//       {datasets.length>0 && (
//         <button className="btn-ghost" onClick={() => onRemove(active)}>
//           <Trash2 className="w-4 h-4" /> Remove Active
//         </button>
//       )}
//     </section>
//   )
// }
import React from 'react'
import { Trash2 } from 'lucide-react'

export default function DatasetSelector({ datasets, active, setActive, onRemove }) {
  return (
    <section className="card flex flex-wrap items-center gap-2">
      {datasets.map((d, i) => (
        <button
          key={i}
          className={`px-3 py-2 rounded-xl text-sm border transition ${
            i === active
              ? 'bg-blue-600 text-white border-blue-600'
              : 'bg-transparent border-gray-300 dark:border-gray-700'
          }`}
          onClick={() => setActive(i)}
          title={d.meta.name}
        >
          Dataset {i + 1}: {d.meta.name}
        </button>
      ))}
      <div className="flex-1" />
      {datasets.length > 0 && (
        <button className="btn-ghost flex items-center gap-1" onClick={() => onRemove(active)}>
          <Trash2 className="w-4 h-4" /> Remove Active
        </button>
      )}
    </section>
  )
}