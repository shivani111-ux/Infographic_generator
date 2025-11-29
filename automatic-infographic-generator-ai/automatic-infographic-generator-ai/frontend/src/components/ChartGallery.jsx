// // // // // // // // import React, { useMemo } from "react";
// // // // // // // // import {
// // // // // // // //   ResponsiveContainer,
// // // // // // // //   CartesianGrid,
// // // // // // // //   XAxis,
// // // // // // // //   YAxis,
// // // // // // // //   Tooltip,
// // // // // // // //   Legend,
// // // // // // // //   BarChart,
// // // // // // // //   Bar,
// // // // // // // //   LineChart,
// // // // // // // //   Line,
// // // // // // // //   PieChart,
// // // // // // // //   Pie,
// // // // // // // //   Cell,
// // // // // // // //   ScatterChart,
// // // // // // // //   Scatter,
// // // // // // // //   ZAxis,
// // // // // // // //   RadialBarChart,
// // // // // // // //   RadialBar,
// // // // // // // // } from "recharts";

// // // // // // // // const COLORS = ["#3b82f6", "#a78bfa", "#22c55e", "#f59e0b", "#ef4444", "#06b6d4"];

// // // // // // // // export default function ChartGallery({ summary }) {
// // // // // // // //   const charts = summary.charts || {};

// // // // // // // //   const meanData = charts.mean_by_column || [];
// // // // // // // //   const minMaxData = charts.min_vs_max || [];
// // // // // // // //   const trendData = charts.mean_trend || [];

// // // // // // // //   // ✅ Flatten categories safely
// // // // // // // //   const categoriesData = useMemo(() => {
// // // // // // // //     const raw = charts.top_categories || [];
// // // // // // // //     if (Array.isArray(raw)) return raw.slice(0, 5);

// // // // // // // //     return Object.entries(raw)
// // // // // // // //       .flatMap(([col, obj]) =>
// // // // // // // //         Object.entries(obj).map(([cat, val]) => ({
// // // // // // // //           label: `${col}: ${cat}`,
// // // // // // // //           value: val,
// // // // // // // //         }))
// // // // // // // //       )
// // // // // // // //       .sort((a, b) => b.value - a.value)
// // // // // // // //       .slice(0, 5);
// // // // // // // //   }, [charts]);

// // // // // // // //   return (
// // // // // // // //     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // // // // //       {/* Mean by Column */}
// // // // // // // //       <ChartCard title="Mean by Numeric Column">
// // // // // // // //         <BarChart data={meanData}>
// // // // // // // //           <CartesianGrid strokeDasharray="3 3" />
// // // // // // // //           <XAxis dataKey="column" />
// // // // // // // //           <YAxis />
// // // // // // // //           <Tooltip />
// // // // // // // //           <Legend />
// // // // // // // //           <Bar dataKey="value" fill={COLORS[0]} />
// // // // // // // //         </BarChart>
// // // // // // // //       </ChartCard>

// // // // // // // //       {/* Min vs Max */}
// // // // // // // //       <ChartCard title="Min vs Max (Stacked Bar)">
// // // // // // // //         <BarChart data={minMaxData}>
// // // // // // // //           <CartesianGrid strokeDasharray="3 3" />
// // // // // // // //           <XAxis dataKey="column" />
// // // // // // // //           <YAxis />
// // // // // // // //           <Tooltip />
// // // // // // // //           <Legend />
// // // // // // // //           <Bar dataKey="min" stackId="a" fill={COLORS[2]} />
// // // // // // // //           <Bar dataKey="max" stackId="a" fill={COLORS[1]} />
// // // // // // // //         </BarChart>
// // // // // // // //       </ChartCard>

// // // // // // // //       {/* Trend */}
// // // // // // // //       <ChartCard title="Mean Trend (Line)">
// // // // // // // //         <LineChart data={trendData}>
// // // // // // // //           <CartesianGrid strokeDasharray="3 3" />
// // // // // // // //           <XAxis dataKey="x" />
// // // // // // // //           <YAxis />
// // // // // // // //           <Tooltip />
// // // // // // // //           <Legend />
// // // // // // // //           <Line type="monotone" dataKey="y" stroke={COLORS[5]} strokeWidth={3} dot />
// // // // // // // //         </LineChart>
// // // // // // // //       </ChartCard>

// // // // // // // //       {/* Categories Donut */}
// // // // // // // //       <ChartCard title="Top Categories (Donut)">
// // // // // // // //         <PieChart>
// // // // // // // //           <Tooltip />
// // // // // // // //           <Legend />
// // // // // // // //           <Pie
// // // // // // // //             data={categoriesData}
// // // // // // // //             dataKey="value"
// // // // // // // //             nameKey="label"
// // // // // // // //             cx="50%"
// // // // // // // //             cy="50%"
// // // // // // // //             innerRadius={50}
// // // // // // // //             outerRadius={90}
// // // // // // // //             label
// // // // // // // //           >
// // // // // // // //             {categoriesData.map((_, i) => (
// // // // // // // //               <Cell key={i} fill={COLORS[i % COLORS.length]} />
// // // // // // // //             ))}
// // // // // // // //           </Pie>
// // // // // // // //         </PieChart>
// // // // // // // //       </ChartCard>

// // // // // // // //       {/* Scatter */}
// // // // // // // //       <ChartCard title="Scatter Plot (Min vs Max)">
// // // // // // // //         <ScatterChart>
// // // // // // // //           <CartesianGrid />
// // // // // // // //           <XAxis dataKey="min" name="Min" />
// // // // // // // //           <YAxis dataKey="max" name="Max" />
// // // // // // // //           <ZAxis dataKey="column" />
// // // // // // // //           <Tooltip cursor={{ strokeDasharray: "3 3" }} />
// // // // // // // //           <Scatter name="Min vs Max" data={minMaxData} fill={COLORS[4]} />
// // // // // // // //         </ScatterChart>
// // // // // // // //       </ChartCard>

// // // // // // // //       {/* Radial Bar */}
// // // // // // // //       <ChartCard title="Category Comparison (Radial)">
// // // // // // // //         <RadialBarChart
// // // // // // // //           innerRadius="20%"
// // // // // // // //           outerRadius="90%"
// // // // // // // //           data={categoriesData}
// // // // // // // //           startAngle={180}
// // // // // // // //           endAngle={0}
// // // // // // // //         >
// // // // // // // //           <RadialBar minAngle={15} background clockWise dataKey="value">
// // // // // // // //             {categoriesData.map((_, i) => (
// // // // // // // //               <Cell key={i} fill={COLORS[i % COLORS.length]} />
// // // // // // // //             ))}
// // // // // // // //           </RadialBar>
// // // // // // // //           <Legend iconSize={10} layout="horizontal" verticalAlign="bottom" />
// // // // // // // //           <Tooltip />
// // // // // // // //         </RadialBarChart>
// // // // // // // //       </ChartCard>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // /* ✅ Reusable wrapper for all charts */
// // // // // // // // function ChartCard({ title, children }) {
// // // // // // // //   return (
// // // // // // // //     <div className="rounded-2xl p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
// // // // // // // //       <h3 className="font-semibold mb-2">{title}</h3>
// // // // // // // //       <ResponsiveContainer width="100%" height={260}>
// // // // // // // //         {children}
// // // // // // // //       </ResponsiveContainer>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }
// // // // // // // export default function ChartGallery({ summary, template }) {
// // // // // // //   const charts = summary?.charts || {}

// // // // // // //   const meanData = charts.mean || []         // match your backend key
// // // // // // //   const minMaxData = charts.minmax || []     // match your backend key
// // // // // // //   const trendData = charts.trend || []
// // // // // // //   const categoriesData = charts.categories || []

// // // // // // //   // Template → layout
// // // // // // //   const gridClass =
// // // // // // //     template === 'analytics'
// // // // // // //       ? 'grid-cols-1 md:grid-cols-3'
// // // // // // //       : template === 'presentation'
// // // // // // //       ? 'grid-cols-1'
// // // // // // //       : 'grid-cols-1 md:grid-cols-2'

// // // // // // //   return (
// // // // // // //     <div className={`grid ${gridClass} gap-4`}>
// // // // // // //       {/* Mean by Column */}
// // // // // // //       {meanData.length > 0 && (
// // // // // // //         <div className="rounded-2xl p-3 bg-white dark:bg-gray-800 border">
// // // // // // //           <h3 className="font-semibold mb-2">Mean by Numeric Column</h3>
// // // // // // //           <div style={{width:'100%', height:260}}>
// // // // // // //             <ResponsiveContainer>
// // // // // // //               <BarChart data={meanData}>
// // // // // // //                 <CartesianGrid strokeDasharray="3 3" />
// // // // // // //                 <XAxis dataKey="column" />
// // // // // // //                 <YAxis />
// // // // // // //                 <Tooltip />
// // // // // // //                 <Legend />
// // // // // // //                 <Bar dataKey="value" fill={COLORS[0]} />
// // // // // // //               </BarChart>
// // // // // // //             </ResponsiveContainer>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       )}

// // // // // // //       {/* Min vs Max */}
// // // // // // //       {minMaxData.length > 0 && (
// // // // // // //         <div className="rounded-2xl p-3 bg-white dark:bg-gray-800 border">
// // // // // // //           <h3 className="font-semibold mb-2">Min vs Max</h3>
// // // // // // //           <div style={{width:'100%', height:260}}>
// // // // // // //             <ResponsiveContainer>
// // // // // // //               <AreaChart data={minMaxData}>
// // // // // // //                 <CartesianGrid strokeDasharray="3 3" />
// // // // // // //                 <XAxis dataKey="column" />
// // // // // // //                 <YAxis />
// // // // // // //                 <Tooltip />
// // // // // // //                 <Legend />
// // // // // // //                 <Area type="monotone" dataKey="min" fill={COLORS[2]} stroke={COLORS[2]} />
// // // // // // //                 <Area type="monotone" dataKey="max" fill={COLORS[1]} stroke={COLORS[1]} />
// // // // // // //               </AreaChart>
// // // // // // //             </ResponsiveContainer>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       )}

// // // // // // //       {/* Mean Trend */}
// // // // // // //       {trendData.length > 0 && (
// // // // // // //         <div className="rounded-2xl p-3 bg-white dark:bg-gray-800 border">
// // // // // // //           <h3 className="font-semibold mb-2">Mean Trend (Line)</h3>
// // // // // // //           <div style={{width:'100%', height:260}}>
// // // // // // //             <ResponsiveContainer>
// // // // // // //               <LineChart data={trendData}>
// // // // // // //                 <CartesianGrid strokeDasharray="3 3" />
// // // // // // //                 <XAxis dataKey="x" />
// // // // // // //                 <YAxis />
// // // // // // //                 <Tooltip />
// // // // // // //                 <Legend />
// // // // // // //                 <Line type="monotone" dataKey="y" stroke={COLORS[5]} strokeWidth={3} dot />
// // // // // // //               </LineChart>
// // // // // // //             </ResponsiveContainer>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       )}

// // // // // // //       {/* Top Categories */}
// // // // // // //       {categoriesData.length > 0 && (
// // // // // // //         <div className="rounded-2xl p-3 bg-white dark:bg-gray-800 border">
// // // // // // //           <h3 className="font-semibold mb-2">Top Categories</h3>
// // // // // // //           <div style={{width:'100%', height:260}}>
// // // // // // //             <ResponsiveContainer>
// // // // // // //               <PieChart>
// // // // // // //                 <Tooltip />
// // // // // // //                 <Legend />
// // // // // // //                 <Pie data={categoriesData} dataKey="count" nameKey="value" outerRadius={90} label>
// // // // // // //                   {categoriesData.map((_, i) => (
// // // // // // //                     <Cell key={i} fill={COLORS[i % COLORS.length]} />
// // // // // // //                   ))}
// // // // // // //                 </Pie>
// // // // // // //               </PieChart>
// // // // // // //             </ResponsiveContainer>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       )}
// // // // // // //     </div>
// // // // // // //   )
// // // // // // // }

// // // // // // import React from "react";
// // // // // // import {
// // // // // //   ResponsiveContainer,
// // // // // //   CartesianGrid,
// // // // // //   XAxis,
// // // // // //   YAxis,
// // // // // //   Tooltip,
// // // // // //   Legend,
// // // // // //   BarChart,
// // // // // //   Bar,
// // // // // //   LineChart,
// // // // // //   Line,
// // // // // //   PieChart,
// // // // // //   Pie,
// // // // // //   Cell,
// // // // // //   AreaChart,
// // // // // //   Area,
// // // // // // } from "recharts";

// // // // // // const COLORS = ["#3b82f6", "#a78bfa", "#22c55e", "#f59e0b", "#ef4444", "#06b6d4"];

// // // // // // export default function ChartGallery({ summary, template }) {
// // // // // //   const charts = summary?.charts || {};

// // // // // //   // ✅ match backend keys
// // // // // //   const meanData = charts.mean_by_column || [];
// // // // // //   const minMaxData = charts.min_vs_max || [];
// // // // // //   const trendData = charts.mean_trend || [];
// // // // // //   const categoriesData = charts.top_categories || [];

// // // // // //   // ✅ Layout switcher
// // // // // //   const gridClass =
// // // // // //     template === "analytics"
// // // // // //       ? "grid-cols-1 md:grid-cols-3"
// // // // // //       : template === "presentation"
// // // // // //       ? "grid-cols-1"
// // // // // //       : "grid-cols-1 md:grid-cols-2";

// // // // // //   return (
// // // // // //     <div className={`grid ${gridClass} gap-4`}>
// // // // // //       {/* Mean by Column */}
// // // // // //       {meanData.length > 0 && (
// // // // // //         <ChartCard title="Mean by Numeric Column">
// // // // // //           <BarChart data={meanData}>
// // // // // //             <CartesianGrid strokeDasharray="3 3" />
// // // // // //             <XAxis dataKey="column" />
// // // // // //             <YAxis />
// // // // // //             <Tooltip />
// // // // // //             <Legend />
// // // // // //             <Bar dataKey="value" fill={COLORS[0]} />
// // // // // //           </BarChart>
// // // // // //         </ChartCard>
// // // // // //       )}

// // // // // //       {/* Min vs Max */}
// // // // // //       {minMaxData.length > 0 && (
// // // // // //         <ChartCard title="Min vs Max">
// // // // // //           <AreaChart data={minMaxData}>
// // // // // //             <CartesianGrid strokeDasharray="3 3" />
// // // // // //             <XAxis dataKey="column" />
// // // // // //             <YAxis />
// // // // // //             <Tooltip />
// // // // // //             <Legend />
// // // // // //             <Area type="monotone" dataKey="min" fill={COLORS[2]} stroke={COLORS[2]} />
// // // // // //             <Area type="monotone" dataKey="max" fill={COLORS[1]} stroke={COLORS[1]} />
// // // // // //           </AreaChart>
// // // // // //         </ChartCard>
// // // // // //       )}

// // // // // //       {/* Mean Trend */}
// // // // // //       {trendData.length > 0 && (
// // // // // //         <ChartCard title="Mean Trend (Line)">
// // // // // //           <LineChart data={trendData}>
// // // // // //             <CartesianGrid strokeDasharray="3 3" />
// // // // // //             <XAxis dataKey="x" />
// // // // // //             <YAxis />
// // // // // //             <Tooltip />
// // // // // //             <Legend />
// // // // // //             <Line type="monotone" dataKey="y" stroke={COLORS[5]} strokeWidth={3} dot />
// // // // // //           </LineChart>
// // // // // //         </ChartCard>
// // // // // //       )}

// // // // // //       {/* Top Categories */}
// // // // // //       {categoriesData.length > 0 && (
// // // // // //         <ChartCard title="Top Categories">
// // // // // //           <PieChart>
// // // // // //             <Tooltip />
// // // // // //             <Legend />
// // // // // //             <Pie
// // // // // //               data={categoriesData}
// // // // // //               dataKey="value"   // <-- make sure this matches backend field
// // // // // //               nameKey="label"  // <-- adjust if backend sends {label, value}
// // // // // //               outerRadius={90}
// // // // // //               label
// // // // // //             >
// // // // // //               {categoriesData.map((_, i) => (
// // // // // //                 <Cell key={i} fill={COLORS[i % COLORS.length]} />
// // // // // //               ))}
// // // // // //             </Pie>
// // // // // //           </PieChart>
// // // // // //         </ChartCard>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // /* ✅ Wrapper */
// // // // // // function ChartCard({ title, children }) {
// // // // // //   return (
// // // // // //     <div className="rounded-2xl p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
// // // // // //       <h3 className="font-semibold mb-2">{title}</h3>
// // // // // //       <ResponsiveContainer width="100%" height={260}>
// // // // // //         {children}
// // // // // //       </ResponsiveContainer>
// // // // // //     </div>
// // // // // //   );
// // // // // // }
// // // // // import React, { useMemo } from "react";
// // // // // import {
// // // // //   ResponsiveContainer,
// // // // //   CartesianGrid,
// // // // //   XAxis,
// // // // //   YAxis,
// // // // //   Tooltip,
// // // // //   Legend,
// // // // //   BarChart,
// // // // //   Bar,
// // // // //   LineChart,
// // // // //   Line,
// // // // //   PieChart,
// // // // //   Pie,
// // // // //   Cell,
// // // // //   ScatterChart,
// // // // //   Scatter,
// // // // //   ZAxis,
// // // // //   RadialBarChart,
// // // // //   RadialBar,
// // // // //   AreaChart,
// // // // //   Area,
// // // // // } from "recharts";

// // // // // const COLORS = ["#3b82f6", "#a78bfa", "#22c55e", "#f59e0b", "#ef4444", "#06b6d4"];

// // // // // export default function ChartGallery({ summary, template }) {
// // // // //   const charts = summary?.charts || {};

// // // // //   // ✅ Normalize data
// // // // //   const meanData = Array.isArray(charts.mean_by_column)
// // // // //     ? charts.mean_by_column
// // // // //     : Object.entries(charts.mean_by_column || {}).map(([column, value]) => ({
// // // // //         column,
// // // // //         value,
// // // // //       }));

// // // // //   const minMaxData = Array.isArray(charts.min_vs_max)
// // // // //     ? charts.min_vs_max
// // // // //     : Object.entries(charts.min_vs_max || {}).map(([column, obj]) => ({
// // // // //         column,
// // // // //         min: obj.min,
// // // // //         max: obj.max,
// // // // //       }));

// // // // //   const trendData = Array.isArray(charts.mean_trend)
// // // // //     ? charts.mean_trend
// // // // //     : Object.entries(charts.mean_trend || {}).map(([x, y]) => ({ x, y }));

// // // // //   const categoriesData = useMemo(() => {
// // // // //     if (Array.isArray(charts.top_categories)) return charts.top_categories;
// // // // //     if (charts.top_categories && typeof charts.top_categories === "object") {
// // // // //       return Object.entries(charts.top_categories).flatMap(([col, obj]) =>
// // // // //         Object.entries(obj).map(([cat, val]) => ({
// // // // //           label: `${col}: ${cat}`,
// // // // //           value: val,
// // // // //         }))
// // // // //       );
// // // // //     }
// // // // //     return [];
// // // // //   }, [charts]);

// // // // //   // ✅ Layout
// // // // //   const gridClass =
// // // // //     template === "analytics"
// // // // //       ? "grid-cols-1 md:grid-cols-3"
// // // // //       : template === "presentation"
// // // // //       ? "grid-cols-1"
// // // // //       : "grid-cols-1 md:grid-cols-2";

// // // // //   return (
// // // // //     <div className={`grid ${gridClass} gap-4`}>
// // // // //       {/* Mean by Column */}
// // // // //       <ChartCard title="Mean by Numeric Column" show={meanData.length > 0}>
// // // // //         <BarChart data={meanData}>
// // // // //           <CartesianGrid strokeDasharray="3 3" />
// // // // //           <XAxis dataKey="column" />
// // // // //           <YAxis />
// // // // //           <Tooltip />
// // // // //           <Legend />
// // // // //           <Bar dataKey="value" fill={COLORS[0]} />
// // // // //         </BarChart>
// // // // //       </ChartCard>

// // // // //       {/* Min vs Max */}
// // // // //       <ChartCard title="Min vs Max (Area)" show={minMaxData.length > 0}>
// // // // //         <AreaChart data={minMaxData}>
// // // // //           <CartesianGrid strokeDasharray="3 3" />
// // // // //           <XAxis dataKey="column" />
// // // // //           <YAxis />
// // // // //           <Tooltip />
// // // // //           <Legend />
// // // // //           <Area type="monotone" dataKey="min" fill={COLORS[2]} stroke={COLORS[2]} />
// // // // //           <Area type="monotone" dataKey="max" fill={COLORS[1]} stroke={COLORS[1]} />
// // // // //         </AreaChart>
// // // // //       </ChartCard>

// // // // //       {/* Mean Trend */}
// // // // //       <ChartCard title="Mean Trend (Line)" show={trendData.length > 0}>
// // // // //         <LineChart data={trendData}>
// // // // //           <CartesianGrid strokeDasharray="3 3" />
// // // // //           <XAxis dataKey="x" />
// // // // //           <YAxis />
// // // // //           <Tooltip />
// // // // //           <Legend />
// // // // //           <Line type="monotone" dataKey="y" stroke={COLORS[5]} strokeWidth={3} dot />
// // // // //         </LineChart>
// // // // //       </ChartCard>

// // // // //       {/* Top Categories */}
// // // // //       <ChartCard title="Top Categories (Donut)" show={categoriesData.length > 0}>
// // // // //         <PieChart>
// // // // //           <Tooltip />
// // // // //           <Legend />
// // // // //           <Pie
// // // // //             data={categoriesData}
// // // // //             dataKey="value"
// // // // //             nameKey="label"
// // // // //             cx="50%"
// // // // //             cy="50%"
// // // // //             innerRadius={50}
// // // // //             outerRadius={90}
// // // // //             label
// // // // //           >
// // // // //             {categoriesData.map((_, i) => (
// // // // //               <Cell key={i} fill={COLORS[i % COLORS.length]} />
// // // // //             ))}
// // // // //           </Pie>
// // // // //         </PieChart>
// // // // //       </ChartCard>

// // // // //       {/* Scatter */}
// // // // //       <ChartCard title="Scatter Plot (Min vs Max)" show={minMaxData.length > 0}>
// // // // //         <ScatterChart>
// // // // //           <CartesianGrid />
// // // // //           <XAxis dataKey="min" name="Min" />
// // // // //           <YAxis dataKey="max" name="Max" />
// // // // //           <ZAxis dataKey="column" />
// // // // //           <Tooltip cursor={{ strokeDasharray: "3 3" }} />
// // // // //           <Scatter name="Min vs Max" data={minMaxData} fill={COLORS[4]} />
// // // // //         </ScatterChart>
// // // // //       </ChartCard>

// // // // //       {/* Radial Bar */}
// // // // //       <ChartCard title="Category Comparison (Radial)" show={categoriesData.length > 0}>
// // // // //         <RadialBarChart
// // // // //           innerRadius="20%"
// // // // //           outerRadius="90%"
// // // // //           data={categoriesData}
// // // // //           startAngle={180}
// // // // //           endAngle={0}
// // // // //         >
// // // // //           <RadialBar minAngle={15} background clockWise dataKey="value">
// // // // //             {categoriesData.map((_, i) => (
// // // // //               <Cell key={i} fill={COLORS[i % COLORS.length]} />
// // // // //             ))}
// // // // //           </RadialBar>
// // // // //           <Legend iconSize={10} layout="horizontal" verticalAlign="bottom" />
// // // // //           <Tooltip />
// // // // //         </RadialBarChart>
// // // // //       </ChartCard>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // /* ✅ Reusable wrapper */
// // // // // function ChartCard({ title, children, show }) {
// // // // //   if (!show) {
// // // // //     return (
// // // // //       <div className="rounded-2xl p-3 bg-white dark:bg-gray-800 border text-center text-gray-500">
// // // // //         <h3 className="font-semibold mb-2">{title}</h3>
// // // // //         <p>No data available</p>
// // // // //       </div>
// // // // //     );
// // // // //   }
// // // // //   return (
// // // // //     <div className="rounded-2xl p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
// // // // //       <h3 className="font-semibold mb-2">{title}</h3>
// // // // //       <ResponsiveContainer width="100%" height={260}>
// // // // //         {children}
// // // // //       </ResponsiveContainer>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // import React, { useMemo } from "react";
// // // // import {
// // // //   ResponsiveContainer,
// // // //   CartesianGrid,
// // // //   XAxis,
// // // //   YAxis,
// // // //   Tooltip,
// // // //   Legend,
// // // //   BarChart,
// // // //   Bar,
// // // //   LineChart,
// // // //   Line,
// // // //   PieChart,
// // // //   Pie,
// // // //   Cell,
// // // //   ScatterChart,
// // // //   Scatter,
// // // //   ZAxis,
// // // //   RadialBarChart,
// // // //   RadialBar,
// // // //   AreaChart,
// // // //   Area,
// // // // } from "recharts";

// // // // const COLORS = ["#3b82f6", "#a78bfa", "#22c55e", "#f59e0b", "#ef4444", "#06b6d4"];

// // // // export default function ChartGallery({ summary, template }) {
// // // //   const charts = summary?.charts || {};
// // // //   const stats = summary?.stats || {}; // ✅ assume backend sends a stats object

// // // //   // ✅ Normalize data
// // // //   const meanData = Array.isArray(charts.mean_by_column)
// // // //     ? charts.mean_by_column
// // // //     : Object.entries(charts.mean_by_column || {}).map(([column, value]) => ({
// // // //         column,
// // // //         value,
// // // //       }));

// // // //   const minMaxData = Array.isArray(charts.min_vs_max)
// // // //     ? charts.min_vs_max
// // // //     : Object.entries(charts.min_vs_max || {}).map(([column, obj]) => ({
// // // //         column,
// // // //         min: obj.min,
// // // //         max: obj.max,
// // // //       }));

// // // //   const trendData = Array.isArray(charts.mean_trend)
// // // //     ? charts.mean_trend
// // // //     : Object.entries(charts.mean_trend || {}).map(([x, y]) => ({ x, y }));

// // // //   const categoriesData = useMemo(() => {
// // // //     if (Array.isArray(charts.top_categories)) return charts.top_categories;
// // // //     if (charts.top_categories && typeof charts.top_categories === "object") {
// // // //       return Object.entries(charts.top_categories).flatMap(([col, obj]) =>
// // // //         Object.entries(obj).map(([cat, val]) => ({
// // // //           label: `${col}: ${cat}`,
// // // //           value: val,
// // // //         }))
// // // //       );
// // // //     }
// // // //     return [];
// // // //   }, [charts]);

// // // //   // ✅ Layout
// // // //   const gridClass =
// // // //     template === "analytics"
// // // //       ? "grid-cols-1 md:grid-cols-3"
// // // //       : template === "presentation"
// // // //       ? "grid-cols-1"
// // // //       : "grid-cols-1 md:grid-cols-2";

// // // //   return (
// // // //     <div className="space-y-6">
// // // //       {/* 📝 Short CSV Summary */}
// // // //       <div className="rounded-2xl p-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
// // // //         <h2 className="text-lg font-bold mb-2">CSV File Summary</h2>
// // // //         <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
// // // //           <li>📊 Rows: <b>{stats.rows || "N/A"}</b></li>
// // // //           <li>📈 Columns: <b>{stats.columns || "N/A"}</b></li>
// // // //           {stats.column_names && (
// // // //             <li>
// // // //               🏷 Columns:{" "}
// // // //               <span className="italic">{stats.column_names.join(", ")}</span>
// // // //             </li>
// // // //           )}
// // // //           {stats.missing_values && (
// // // //             <li>
// // // //               ⚠️ Missing Values:{" "}
// // // //               <b>{stats.missing_values}</b>
// // // //             </li>
// // // //           )}
// // // //         </ul>
// // // //       </div>

// // // //       {/* 📊 Charts */}
// // // //       <div className={`grid ${gridClass} gap-4`}>
// // // //         {/* Mean by Column */}
// // // //         <ChartCard title="Mean by Numeric Column" show={meanData.length > 0}>
// // // //           <BarChart data={meanData}>
// // // //             <CartesianGrid strokeDasharray="3 3" />
// // // //             <XAxis dataKey="column" />
// // // //             <YAxis />
// // // //             <Tooltip />
// // // //             <Legend />
// // // //             <Bar dataKey="value" fill={COLORS[0]} />
// // // //           </BarChart>
// // // //         </ChartCard>

// // // //         {/* Min vs Max */}
// // // //         <ChartCard title="Min vs Max (Area)" show={minMaxData.length > 0}>
// // // //           <AreaChart data={minMaxData}>
// // // //             <CartesianGrid strokeDasharray="3 3" />
// // // //             <XAxis dataKey="column" />
// // // //             <YAxis />
// // // //             <Tooltip />
// // // //             <Legend />
// // // //             <Area type="monotone" dataKey="min" fill={COLORS[2]} stroke={COLORS[2]} />
// // // //             <Area type="monotone" dataKey="max" fill={COLORS[1]} stroke={COLORS[1]} />
// // // //           </AreaChart>
// // // //         </ChartCard>

// // // //         {/* Mean Trend */}
// // // //         <ChartCard title="Mean Trend (Line)" show={trendData.length > 0}>
// // // //           <LineChart data={trendData}>
// // // //             <CartesianGrid strokeDasharray="3 3" />
// // // //             <XAxis dataKey="x" />
// // // //             <YAxis />
// // // //             <Tooltip />
// // // //             <Legend />
// // // //             <Line type="monotone" dataKey="y" stroke={COLORS[5]} strokeWidth={3} dot />
// // // //           </LineChart>
// // // //         </ChartCard>

// // // //         {/* Top Categories */}
// // // //         <ChartCard title="Top Categories (Donut)" show={categoriesData.length > 0}>
// // // //           <PieChart>
// // // //             <Tooltip />
// // // //             <Legend />
// // // //             <Pie
// // // //               data={categoriesData}
// // // //               dataKey="value"
// // // //               nameKey="label"
// // // //               cx="50%"
// // // //               cy="50%"
// // // //               innerRadius={50}
// // // //               outerRadius={90}
// // // //               label
// // // //             >
// // // //               {categoriesData.map((_, i) => (
// // // //                 <Cell key={i} fill={COLORS[i % COLORS.length]} />
// // // //               ))}
// // // //             </Pie>
// // // //           </PieChart>
// // // //         </ChartCard>

// // // //         {/* Scatter */}
// // // //         <ChartCard title="Scatter Plot (Min vs Max)" show={minMaxData.length > 0}>
// // // //           <ScatterChart>
// // // //             <CartesianGrid />
// // // //             <XAxis dataKey="min" name="Min" />
// // // //             <YAxis dataKey="max" name="Max" />
// // // //             <ZAxis dataKey="column" />
// // // //             <Tooltip cursor={{ strokeDasharray: "3 3" }} />
// // // //             <Scatter name="Min vs Max" data={minMaxData} fill={COLORS[4]} />
// // // //           </ScatterChart>
// // // //         </ChartCard>

// // // //         {/* Radial Bar */}
// // // //         <ChartCard title="Category Comparison (Radial)" show={categoriesData.length > 0}>
// // // //           <RadialBarChart
// // // //             innerRadius="20%"
// // // //             outerRadius="90%"
// // // //             data={categoriesData}
// // // //             startAngle={180}
// // // //             endAngle={0}
// // // //           >
// // // //             <RadialBar minAngle={15} background clockWise dataKey="value">
// // // //               {categoriesData.map((_, i) => (
// // // //                 <Cell key={i} fill={COLORS[i % COLORS.length]} />
// // // //               ))}
// // // //             </RadialBar>
// // // //             <Legend iconSize={10} layout="horizontal" verticalAlign="bottom" />
// // // //             <Tooltip />
// // // //           </RadialBarChart>
// // // //         </ChartCard>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // /* ✅ Reusable wrapper */
// // // // function ChartCard({ title, children, show }) {
// // // //   if (!show) {
// // // //     return (
// // // //       <div className="rounded-2xl p-3 bg-white dark:bg-gray-800 border text-center text-gray-500">
// // // //         <h3 className="font-semibold mb-2">{title}</h3>
// // // //         <p>No data available</p>
// // // //       </div>
// // // //     );
// // // //   }
// // // //   return (
// // // //     <div className="rounded-2xl p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
// // // //       <h3 className="font-semibold mb-2">{title}</h3>
// // // //       <ResponsiveContainer width="100%" height={260}>
// // // //         {children}
// // // //       </ResponsiveContainer>
// // // //     </div>
// // // //   );
// // // // }
// // // import React, { useMemo } from "react";
// // // import {
// // //   ResponsiveContainer,
// // //   CartesianGrid,
// // //   XAxis,
// // //   YAxis,
// // //   Tooltip,
// // //   Legend,
// // //   BarChart,
// // //   Bar,
// // //   LineChart,
// // //   Line,
// // //   PieChart,
// // //   Pie,
// // //   Cell,
// // //   ScatterChart,
// // //   Scatter,
// // //   ZAxis,
// // //   RadialBarChart,
// // //   RadialBar,
// // // } from "recharts";

// // // const COLORS = ["#3b82f6", "#a78bfa", "#22c55e", "#f59e0b", "#ef4444", "#06b6d4"];

// // // export default function ChartGallery({ summary }) {
// // //   const charts = summary.charts || {};

// // //   const meanData = charts.mean_by_column || [];
// // //   const minMaxData = charts.min_vs_max || [];
// // //   const trendData = charts.mean_trend || [];

// // //   // Normalize & top 5 categories for Donut & Radial
// // //   const categoriesData = useMemo(() => {
// // //     const raw = charts.top_categories || [];
// // //     let formatted = [];

// // //     if (Array.isArray(raw)) {
// // //       formatted = raw.map((item) => ({
// // //         label: item.value,
// // //         value: item.count,
// // //       }));
// // //     } else {
// // //       formatted = Object.entries(raw)
// // //         .flatMap(([col, obj]) =>
// // //           Object.entries(obj).map(([cat, val]) => ({
// // //             label: `${col}: ${cat}`,
// // //             value: val,
// // //           }))
// // //         );
// // //     }

// // //     // Sort descending & take top 5
// // //     return formatted.sort((a, b) => b.value - a.value).slice(0, 5);
// // //   }, [charts]);

// // //   return (
// // //     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // //       {/* Mean by Column */}
// // //       <ChartCard title="Mean by Numeric Column">
// // //         <BarChart data={meanData}>
// // //           <CartesianGrid strokeDasharray="3 3" />
// // //           <XAxis dataKey="column" />
// // //           <YAxis />
// // //           <Tooltip />
// // //           <Legend />
// // //           <Bar dataKey="value" fill={COLORS[0]} />
// // //         </BarChart>
// // //       </ChartCard>

// // //       {/* Min vs Max */}
// // //       <ChartCard title="Min vs Max (Stacked Bar)">
// // //         <BarChart data={minMaxData}>
// // //           <CartesianGrid strokeDasharray="3 3" />
// // //           <XAxis dataKey="column" />
// // //           <YAxis />
// // //           <Tooltip />
// // //           <Legend />
// // //           <Bar dataKey="min" stackId="a" fill={COLORS[2]} />
// // //           <Bar dataKey="max" stackId="a" fill={COLORS[1]} />
// // //         </BarChart>
// // //       </ChartCard>

// // //       {/* Trend */}
// // //       <ChartCard title="Mean Trend (Line)">
// // //         <LineChart data={trendData}>
// // //           <CartesianGrid strokeDasharray="3 3" />
// // //           <XAxis dataKey="x" />
// // //           <YAxis />
// // //           <Tooltip />
// // //           <Legend />
// // //           <Line type="monotone" dataKey="y" stroke={COLORS[5]} strokeWidth={3} dot />
// // //         </LineChart>
// // //       </ChartCard>

// // //       {/* Donut Chart */}
// // //       <ChartCard title="Top Categories (Donut)">
// // //         <PieChart>
// // //           <Tooltip />
// // //           <Legend
// // //             layout="vertical"
// // //             verticalAlign="middle"
// // //             align="right"
// // //             iconType="circle"
// // //           />
// // //           <Pie
// // //             data={categoriesData}
// // //             dataKey="value"
// // //             nameKey="label"
// // //             cx="50%"
// // //             cy="50%"
// // //             innerRadius={50}
// // //             outerRadius={90}
// // //             label
// // //             labelLine={false}
// // //           >
// // //             {categoriesData.map((_, i) => (
// // //               <Cell key={i} fill={COLORS[i % COLORS.length]} />
// // //             ))}
// // //           </Pie>
// // //         </PieChart>
// // //       </ChartCard>

// // //       {/* Scatter */}
// // //       <ChartCard title="Scatter Plot (Min vs Max)">
// // //         <ScatterChart>
// // //           <CartesianGrid />
// // //           <XAxis dataKey="min" name="Min" />
// // //           <YAxis dataKey="max" name="Max" />
// // //           <ZAxis dataKey="column" />
// // //           <Tooltip cursor={{ strokeDasharray: "3 3" }} />
// // //           <Scatter name="Min vs Max" data={minMaxData} fill={COLORS[4]} />
// // //         </ScatterChart>
// // //       </ChartCard>

// // //       {/* Radial Chart */}
// // //       <ChartCard title="Category Comparison (Radial)">
// // //         <RadialBarChart
// // //           innerRadius="20%"
// // //           outerRadius="90%"
// // //           data={categoriesData}
// // //           startAngle={180}
// // //           endAngle={0}
// // //         >
// // //           <RadialBar minAngle={15} background clockWise dataKey="value">
// // //             {categoriesData.map((_, i) => (
// // //               <Cell key={i} fill={COLORS[i % COLORS.length]} />
// // //             ))}
// // //           </RadialBar>
// // //           <Legend
// // //             iconSize={10}
// // //             layout="vertical"
// // //             verticalAlign="middle"
// // //             align="right"
// // //             iconType="circle"
// // //           />
// // //           <Tooltip />
// // //         </RadialBarChart>
// // //       </ChartCard>
// // //     </div>
// // //   );
// // // }

// // // function ChartCard({ title, children }) {
// // //   return (
// // //     <div className="rounded-2xl p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
// // //       <h3 className="font-semibold mb-2">{title}</h3>
// // //       <ResponsiveContainer width="100%" height={260}>
// // //         {children}
// // //       </ResponsiveContainer>
// // //     </div>
// // //   );
// // // }
// // import React, { useMemo } from "react";
// // import {
// //   ResponsiveContainer,
// //   CartesianGrid,
// //   XAxis,
// //   YAxis,
// //   Tooltip,
// //   Legend,
// //   BarChart,
// //   Bar,
// //   LineChart,
// //   Line,
// //   PieChart,
// //   Pie,
// //   Cell,
// //   ScatterChart,
// //   Scatter,
// //   ZAxis,
// //   RadialBarChart,
// //   RadialBar,
// //   AreaChart,
// //   Area,
// // } from "recharts";

// // const COLORS = ["#3b82f6", "#a78bfa", "#22c55e", "#f59e0b", "#ef4444", "#06b6d4"];

// // export default function ChartGallery({ summary, template }) {
// //   const charts = summary?.charts || {};

// //   /* ---------------------- NORMALIZE BACKEND DATA ---------------------- */

// //   const meanData = useMemo(() => {
// //     if (Array.isArray(charts.mean_by_column)) return charts.mean_by_column;

// //     return Object.entries(charts.mean_by_column || {}).map(([column, value]) => ({
// //       column,
// //       value,
// //     }));
// //   }, [charts]);

// //   const minMaxData = useMemo(() => {
// //     if (Array.isArray(charts.min_vs_max)) return charts.min_vs_max;

// //     return Object.entries(charts.min_vs_max || {}).map(([column, obj]) => ({
// //       column,
// //       min: obj.min,
// //       max: obj.max,
// //     }));
// //   }, [charts]);

// //   const trendData = useMemo(() => {
// //     if (Array.isArray(charts.mean_trend)) return charts.mean_trend;

// //     return Object.entries(charts.mean_trend || {}).map(([x, y]) => ({ x, y }));
// //   }, [charts]);

// //   const categoriesData = useMemo(() => {
// //     if (Array.isArray(charts.top_categories)) return charts.top_categories;

// //     if (charts.top_categories && typeof charts.top_categories === "object") {
// //       return Object.entries(charts.top_categories).flatMap(([col, obj]) =>
// //         Object.entries(obj).map(([cat, val]) => ({
// //           label: `${col}: ${cat}`,
// //           value: val,
// //         }))
// //       );
// //     }
// //     return [];
// //   }, [charts]);

// //   /* --------------------------- GRID LAYOUT --------------------------- */

// //   const gridClass =
// //     template === "analytics"
// //       ? "grid-cols-1 md:grid-cols-3"
// //       : template === "presentation"
// //       ? "grid-cols-1"
// //       : "grid-cols-1 md:grid-cols-2";

// //   /* ----------------------------- RENDER ------------------------------ */

// //   return (
// //     <div className={`grid ${gridClass} gap-4`}>
      
// //       {/* MEAN (BAR) */}
// //       {meanData.length > 0 && (
// //         <ChartCard title="Mean Values">
// //           <BarChart data={meanData}>
// //             <CartesianGrid strokeDasharray="3 3" />
// //             <XAxis dataKey="column" />
// //             <YAxis />
// //             <Tooltip />
// //             <Legend />
// //             <Bar dataKey="value" fill={COLORS[0]} />
// //           </BarChart>
// //         </ChartCard>
// //       )}

// //       {/* MIN VS MAX (AREA) */}
// //       {minMaxData.length > 0 && (
// //         <ChartCard title="Min vs Max">
// //           <AreaChart data={minMaxData}>
// //             <CartesianGrid strokeDasharray="3 3" />
// //             <XAxis dataKey="column" />
// //             <YAxis />
// //             <Tooltip />
// //             <Legend />
// //             <Area type="monotone" dataKey="min" fill={COLORS[2]} stroke={COLORS[2]} />
// //             <Area type="monotone" dataKey="max" fill={COLORS[1]} stroke={COLORS[1]} />
// //           </AreaChart>
// //         </ChartCard>
// //       )}

// //       {/* TREND (LINE) */}
// //       {trendData.length > 0 && (
// //         <ChartCard title="Mean Trend">
// //           <LineChart data={trendData}>
// //             <CartesianGrid strokeDasharray="3 3" />
// //             <XAxis dataKey="x" />
// //             <YAxis />
// //             <Tooltip />
// //             <Legend />
// //             <Line type="monotone" dataKey="y" stroke={COLORS[5]} strokeWidth={3} dot />
// //           </LineChart>
// //         </ChartCard>
// //       )}

// //       {/* DONUT CHART (FIXED) */}
// //       {categoriesData.length > 0 && (
// //         <ChartCard title="Top Categories (Donut)">
// //           <PieChart>
// //             <Tooltip />
// //             <Legend />
// //             <Pie
// //               data={categoriesData}
// //               dataKey="value"
// //               nameKey="label"
// //               cx="50%"
// //               cy="50%"
// //               innerRadius={55}
// //               outerRadius={90}
// //               label
// //             >
// //               {categoriesData.map((_, i) => (
// //                 <Cell key={i} fill={COLORS[i % COLORS.length]} />
// //               ))}
// //             </Pie>
// //           </PieChart>
// //         </ChartCard>
// //       )}

// //       {/* RADIAL BAR (FULLY FIXED) */}
// //       {categoriesData.length > 0 && (
// //         <ChartCard title="Category Comparison (Radial)">
// //           <RadialBarChart
// //             innerRadius="20%"
// //             outerRadius="90%"
// //             data={categoriesData}
// //             startAngle={90}
// //             endAngle={450}
// //           >
// //             <RadialBar
// //               dataKey="value"
// //               clockWise
// //               minAngle={5}
// //             >
// //               {categoriesData.map((_, i) => (
// //                 <Cell key={i} fill={COLORS[i % COLORS.length]} />
// //               ))}
// //             </RadialBar>
// //             <Legend layout="horizontal" verticalAlign="bottom" />
// //             <Tooltip />
// //           </RadialBarChart>
// //         </ChartCard>
// //       )}
// //     </div>
// //   );
// // }

// // /* --------------- Reusable Card Wrapper ------------------ */

// // function ChartCard({ title, children }) {
// //   return (
// //     <div className="rounded-2xl p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
// //       <h3 className="font-semibold mb-2">{title}</h3>
// //       <ResponsiveContainer width="100%" height={260}>
// //         {children}
// //       </ResponsiveContainer>
// //     </div>
// //   );
// // }
// import React, { useMemo } from "react";
// import {
//   ResponsiveContainer,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   BarChart,
//   Bar,
//   LineChart,
//   Line,
//   PieChart,
//   Pie,
//   Cell,
//   ScatterChart,
//   Scatter,
//   ZAxis,
//   RadialBarChart,
//   RadialBar,
//   AreaChart,
//   Area,
// } from "recharts";

// const COLORS = ["#3b82f6", "#a78bfa", "#22c55e", "#f59e0b", "#ef4444", "#06b6d4"];

// export default function ChartGallery({ summary }) {
//   const charts = summary.charts || {};

//   // Normalize mean data
//   const meanData = Array.isArray(charts.mean_by_column)
//     ? charts.mean_by_column
//     : Object.entries(charts.mean_by_column || {}).map(([column, value]) => ({
//         column,
//         value,
//       }));

//   // Normalize min vs max data
//   const minMaxData = Array.isArray(charts.min_vs_max)
//     ? charts.min_vs_max
//     : Object.entries(charts.min_vs_max || {}).map(([column, obj]) => ({
//         column,
//         min: obj.min,
//         max: obj.max,
//       }));

//   // Normalize trend data
//   const trendData = Array.isArray(charts.mean_trend)
//     ? charts.mean_trend
//     : Object.entries(charts.mean_trend || {}).map(([x, y]) => ({ x, y }));

//   // Normalize categories (top 5)
//   const categoriesData = useMemo(() => {
//     const raw = charts.top_categories || [];
//     let formatted = [];

//     if (Array.isArray(raw)) {
//       formatted = raw.map((item) => ({
//         label: item.value,
//         value: item.count,
//       }));
//     } else {
//       formatted = Object.entries(raw)
//         .flatMap(([col, obj]) =>
//           Object.entries(obj).map(([cat, val]) => ({
//             label: `${col}: ${cat}`,
//             value: val,
//           }))
//         );
//     }

//     return formatted.sort((a, b) => b.value - a.value).slice(0, 5);
//   }, [charts]);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//       {/* Mean by Column */}
//       <ChartCard title="Mean by Numeric Column" show={meanData.length > 0}>
//         <BarChart data={meanData}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="column" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="value" fill={COLORS[0]} />
//         </BarChart>
//       </ChartCard>

//       {/* Min vs Max */}
//       <ChartCard title="Min vs Max (Area)" show={minMaxData.length > 0}>
//         <AreaChart data={minMaxData}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="column" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Area type="monotone" dataKey="min" fill={COLORS[2]} stroke={COLORS[2]} />
//           <Area type="monotone" dataKey="max" fill={COLORS[1]} stroke={COLORS[1]} />
//         </AreaChart>
//       </ChartCard>

//       {/* Mean Trend */}
//       <ChartCard title="Mean Trend (Line)" show={trendData.length > 0}>
//         <LineChart data={trendData}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="x" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey="y" stroke={COLORS[5]} strokeWidth={3} dot />
//         </LineChart>
//       </ChartCard>

//       {/* Top Categories */}
//       <ChartCard title="Top Categories (Donut)" show={categoriesData.length > 0}>
//         <PieChart>
//           <Tooltip />
//           <Legend layout="vertical" verticalAlign="middle" align="right" iconType="circle" />
//           <Pie
//             data={categoriesData}
//             dataKey="value"
//             nameKey="label"
//             cx="50%"
//             cy="50%"
//             innerRadius={50}
//             outerRadius={90}
//             label
//             labelLine={false}
//           >
//             {categoriesData.map((_, i) => (
//               <Cell key={i} fill={COLORS[i % COLORS.length]} />
//             ))}
//           </Pie>
//         </PieChart>
//       </ChartCard>

//       {/* Scatter */}
//       <ChartCard title="Scatter Plot (Min vs Max)" show={minMaxData.length > 0}>
//         <ScatterChart>
//           <CartesianGrid />
//           <XAxis dataKey="min" name="Min" />
//           <YAxis dataKey="max" name="Max" />
//           <ZAxis dataKey="column" />
//           <Tooltip cursor={{ strokeDasharray: "3 3" }} />
//           <Scatter name="Min vs Max" data={minMaxData} fill={COLORS[4]} />
//         </ScatterChart>
//       </ChartCard>

//       {/* Radial */}
//       <ChartCard title="Category Comparison (Radial)" show={categoriesData.length > 0}>
//         <RadialBarChart
//           innerRadius="20%"
//           outerRadius="90%"
//           data={categoriesData}
//           startAngle={180}
//           endAngle={0}
//         >
//           <RadialBar minAngle={15} background clockWise dataKey="value">
//             {categoriesData.map((_, i) => (
//               <Cell key={i} fill={COLORS[i % COLORS.length]} />
//             ))}
//           </RadialBar>
//           <Legend iconSize={10} layout="horizontal" verticalAlign="bottom" />
//           <Tooltip />
//         </RadialBarChart>
//       </ChartCard>
//     </div>
//   );
// }

// /* Reusable wrapper */
// function ChartCard({ title, children, show }) {
//   if (!show) {
//     return (
//       <div className="rounded-2xl p-3 bg-white dark:bg-gray-800 border text-center text-gray-500">
//         <h3 className="font-semibold mb-2">{title}</h3>
//         <p>No data available</p>
//       </div>
//     );
//   }
//   return (
//     <div className="rounded-2xl p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
//       <h3 className="font-semibold mb-2">{title}</h3>
//       <ResponsiveContainer width="100%" height={260}>
//         {children}
//       </ResponsiveContainer>
//     </div>
//   );
// }
import React, { useMemo } from "react";
import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  ScatterChart,
  Scatter,
  ZAxis,
  RadialBarChart,
  RadialBar,
  AreaChart,
  Area,
} from "recharts";

const COLORS = ["#3b82f6", "#a78bfa", "#22c55e", "#f59e0b", "#ef4444", "#06b6d4"];

export default function ChartGallery({ summary, template }) {
  const charts = summary?.charts || {};

  // Normalize chart data
  const meanData = charts.mean_by_column || [];
  const minMaxData = charts.min_vs_max || [];
  const trendData = charts.mean_trend || [];
  const categoriesData = useMemo(() => {
    const raw = charts.top_categories || [];
    let formatted = [];

    if (Array.isArray(raw)) {
      formatted = raw.map((item) => ({
        label: item.value,
        value: item.count,
      }));
    } else {
      formatted = Object.entries(raw)
        .flatMap(([col, obj]) =>
          Object.entries(obj).map(([cat, val]) => ({
            label: `${col}: ${cat}`,
            value: val,
          }))
        );
    }

    return formatted.sort((a, b) => b.value - a.value).slice(0, 5);
  }, [charts]);

  // Dynamic grid layout based on template
  const gridClass =
    template === "analytics"
      ? "grid-cols-1 md:grid-cols-3"
      : template === "presentation"
      ? "grid-cols-1"
      : "grid-cols-1 md:grid-cols-2";

  return (
    <div className="space-y-6">
      {/* 📊 Charts */}
      <div className={`grid ${gridClass} gap-4`}>
        {/* Mean by Column */}
        {meanData.length > 0 && (
          <ChartCard title="Mean by Numeric Column">
            <BarChart data={meanData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="column" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill={COLORS[0]} />
            </BarChart>
          </ChartCard>
        )}

        {/* Min vs Max */}
        {minMaxData.length > 0 && (
          <ChartCard title="Min vs Max (Stacked Bar)">
            <BarChart data={minMaxData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="column" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="min" stackId="a" fill={COLORS[2]} />
              <Bar dataKey="max" stackId="a" fill={COLORS[1]} />
            </BarChart>
          </ChartCard>
        )}

        {/* Mean Trend */}
        {trendData.length > 0 && (
          <ChartCard title="Mean Trend (Line)">
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="x" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="y" stroke={COLORS[5]} strokeWidth={3} dot />
            </LineChart>
          </ChartCard>
        )}

        {/* Top Categories Donut */}
        {categoriesData.length > 0 && (
          <ChartCard title="Top Categories (Donut)">
            <PieChart>
              <Tooltip />
              <Legend layout="vertical" verticalAlign="middle" align="right" iconType="circle" />
              <Pie
                data={categoriesData}
                dataKey="value"
                nameKey="label"
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={90}
                label
                labelLine={false}
              >
                {categoriesData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ChartCard>
        )}

        {/* Scatter */}
        {minMaxData.length > 0 && (
          <ChartCard title="Scatter Plot (Min vs Max)">
            <ScatterChart>
              <CartesianGrid />
              <XAxis dataKey="min" name="Min" />
              <YAxis dataKey="max" name="Max" />
              <ZAxis dataKey="column" />
              <Tooltip cursor={{ strokeDasharray: "3 3" }} />
              <Scatter name="Min vs Max" data={minMaxData} fill={COLORS[4]} />
            </ScatterChart>
          </ChartCard>
        )}

        {/* Radial Bar */}
        {categoriesData.length > 0 && (
          <ChartCard title="Category Comparison (Radial)">
            <RadialBarChart innerRadius="20%" outerRadius="90%" data={categoriesData} startAngle={180} endAngle={0}>
              <RadialBar minAngle={15} background clockWise dataKey="value">
                {categoriesData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </RadialBar>
              <Legend iconSize={10} layout="horizontal" verticalAlign="bottom" />
              <Tooltip />
            </RadialBarChart>
          </ChartCard>
        )}
      </div>
    </div>
  );
}

/* ✅ Chart wrapper */
function ChartCard({ title, children }) {
  return (
    <div className="rounded-2xl p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <h3 className="font-semibold mb-2">{title}</h3>
      <ResponsiveContainer width="100%" height={260}>
        {children}
      </ResponsiveContainer>
    </div>
  );
}
