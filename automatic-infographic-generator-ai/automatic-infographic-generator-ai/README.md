# 📊 Automatic Infographic Generator 

A resume-ready, full-stack project that turns CSV/JSON data into **animated, professional infographics** with  **Key insights**.

## ✨ Features
- Upload **CSV**
- Automatic **data summary** (numeric stats, correlations, top categories)
- **Rich charts** (Bar, Line, Area, Pie, Radar) with smooth animations
- **Multiple datasets** support & quick switching
- **Elegant UI** with Tailwind + dark mode
- **Key Insights** 
- **Export** to **PNG** and **PDF**
- Templates (balanced / analytics / presentation-ready)

## 🧱 Stack
- **Frontend:** React + Vite + Tailwind + Recharts + Framer Motion
- **Backend:** FastAPI + Pandas (+ OpenAI optional)
- **Format:** CSV / JSON

## 🚀 Quick Start

### 1) Backend
```bash
cd backend
python -m venv .venv && source .venv/bin/activate  # on Windows: .venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

### 2) Frontend
```bash
cd frontend
npm install
npm run dev
```

Open **http://localhost:5173**

## 📤 Export
Click **PNG** or **PDF** in the bottom-right export bar.

## 🧪 Sample Data
Use `backend/sample_data.csv` to try it out.

## 🗂️ Structure
```
automatic-infographic-generator-ai/
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   ├── .env.example
│   └── sample_data.csv
└── frontend/
    ├── package.json
    ├── vite.config.js
    ├── index.html
    ├── tailwind.config.js
    ├── postcss.config.js
    └── src/
        ├── App.jsx
        ├── main.jsx
        ├── index.css
        └── components/
            ├── Navbar.jsx
            ├── Uploader.jsx
            ├── DatasetSelector.jsx
            ├── InsightCards.jsx
            ├── ChartGallery.jsx
            ├── TemplatePicker.jsx
            ├── ExportButtons.jsx
            └── AIPanel.jsx
```

---

**Pro tip:** Deploy the backend on Render and the frontend on Vercel/Netlify, set `VITE_API_BASE_URL` to your backend URL, and add screenshots/GIFs to the README for a perfect resume entry.
