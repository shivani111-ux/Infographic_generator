# 📊 Automatic Infographic Generator • AI

A resume-ready, full-stack project that turns CSV/JSON data into **animated, professional infographics** with optional **AI-powered insights**.

## ✨ Features
- Upload **CSV/JSON**
- Automatic **data summary** (numeric stats, correlations, top categories)
- **Rich charts** (Bar, Line, Area, Pie, Radar) with smooth animations
- **Multiple datasets** support & quick switching
- **Elegant UI** with Tailwind + dark mode
- **AI Insights (optional)** via OpenAI (fallback heuristics if no key)
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
cp .env.example .env  # add your OPENAI_API_KEY if you want AI insights
uvicorn main:app --reload
```

### 2) Frontend
```bash
cd frontend
npm install
# set API base if needed (optional):
# echo 'VITE_API_BASE_URL="http://127.0.0.1:8000"' > .env
npm run dev
```

Open **http://localhost:5173**

## 📤 Export
Click **PNG** or **PDF** in the bottom-right export bar.

## 🔐 AI Insights
- Add your **OPENAI_API_KEY** in `backend/.env`
- If no key is set, backend returns **smart heuristic** insights instead

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
