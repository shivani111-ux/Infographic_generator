# # # # # # # import os
# # # # # # # import io
# # # # # # # import json
# # # # # # # from typing import Optional, List
# # # # # # # from fastapi import FastAPI, UploadFile, File, Form
# # # # # # # from fastapi.middleware.cors import CORSMiddleware
# # # # # # # from pydantic import BaseModel
# # # # # # # import pandas as pd
# # # # # # # import numpy as np

# # # # # # # # Optional: AI insights via OpenAI
# # # # # # # OPENAI_AVAILABLE = True
# # # # # # # try:
# # # # # # #     from openai import OpenAI
# # # # # # # except Exception:
# # # # # # #     OPENAI_AVAILABLE = False

# # # # # # # # ---------- Config ----------
# # # # # # # API_TITLE = "Automatic Infographic Generator API"
# # # # # # # API_DESC = "Upload CSV/JSON, get summaries, charts metadata, and optional AI insights."
# # # # # # # API_VERSION = "1.0.0"

# # # # # # # app = FastAPI(title=API_TITLE, description=API_DESC, version=API_VERSION)

# # # # # # # allowed_origins = os.getenv("ALLOWED_ORIGINS", "*")
# # # # # # # allow_origins = ["*"] if allowed_origins == "*" else [o.strip() for o in allowed_origins.split(",")]

# # # # # # # app.add_middleware(
# # # # # # #     CORSMiddleware,
# # # # # # #     allow_origins=allow_origins,
# # # # # # #     allow_methods=["*"],
# # # # # # #     allow_headers=["*"],
# # # # # # #     allow_credentials=True,
# # # # # # # )
# # # # # # from fastapi import FastAPI, File, UploadFile, Form
# # # # # # from fastapi.middleware.cors import CORSMiddleware
# # # # # # import pandas as pd
# # # # # # import io
# # # # # # import json

# # # # # # app = FastAPI()

# # # # # # # Allow frontend (Vite) to talk to backend
# # # # # # app.add_middleware(
# # # # # #     CORSMiddleware,
# # # # # #     allow_origins=["*"],
# # # # # #     allow_credentials=True,
# # # # # #     allow_methods=["*"],
# # # # # #     allow_headers=["*"],
# # # # # # )

# # # # # # @app.post("/upload")
# # # # # # async def upload_file(file: UploadFile = File(...), want_ai: bool = Form(False)):
# # # # # #     try:
# # # # # #         # Read uploaded file
# # # # # #         contents = await file.read()
        
# # # # # #         if file.filename.endswith(".csv"):
# # # # # #             df = pd.read_csv(io.BytesIO(contents))
# # # # # #         elif file.filename.endswith(".json"):
# # # # # #             df = pd.read_json(io.BytesIO(contents))
# # # # # #         else:
# # # # # #             return {"error": "Unsupported file format"}

# # # # # #         # Summarize dataset
# # # # # #         summary = {
# # # # # #             "rows": len(df),
# # # # # #             "columns": list(df.columns),
# # # # # #             "preview": df.head(5).to_dict(orient="records"),
# # # # # #         }

# # # # # #         # (Optional) add AI insights later
# # # # # #         if want_ai:
# # # # # #             summary["ai_insight"] = "AI summary goes here 🚀"

# # # # # #         return summary

# # # # # #     except Exception as e:
# # # # # #         return {"error": str(e)}
# # # # # from fastapi import FastAPI, UploadFile, Form
# # # # # from fastapi.middleware.cors import CORSMiddleware
# # # # # import pandas as pd
# # # # # import io

# # # # # app = FastAPI()

# # # # # # Allow frontend (Vite) to talk to backend
# # # # # app.add_middleware(
# # # # #     CORSMiddleware,
# # # # #     allow_origins=["*"],
# # # # #     allow_credentials=True,
# # # # #     allow_methods=["*"],
# # # # #     allow_headers=["*"],
# # # # # )

# # # # # @app.post("/upload")
# # # # # async def upload_file(file: UploadFile, want_ai: bool = Form(False)):
# # # # #     content = await file.read()
# # # # #     df = pd.read_csv(io.StringIO(content.decode("utf-8")))

# # # # #     numeric_cols = df.select_dtypes(include="number")
# # # # #     cat_cols = df.select_dtypes(exclude="number")

# # # # #     # Prepare chart data
# # # # #     mean_data = []
# # # # #     minmax_data = []
# # # # #     trend_data = []
# # # # #     categories_data = []

# # # # #     if not numeric_cols.empty:
# # # # #         # Mean by numeric column
# # # # #         mean_data = (
# # # # #             numeric_cols.mean()
# # # # #             .reset_index()
# # # # #             .rename(columns={"index": "column", 0: "value"})
# # # # #             .to_dict(orient="records")
# # # # #         )

# # # # #         # Min vs Max
# # # # #         minmax_data = [
# # # # #             {"column": col, "min": float(numeric_cols[col].min()), "max": float(numeric_cols[col].max())}
# # # # #             for col in numeric_cols.columns
# # # # #         ]

# # # # #         # Trend (just take first numeric column for demo)
# # # # #         first_col = numeric_cols.columns[0]
# # # # #         trend_data = [{"x": int(i), "y": float(v)} for i, v in enumerate(df[first_col])]

# # # # #     if not cat_cols.empty:
# # # # #         # Categories (first categorical column)
# # # # #         first_cat = cat_cols.columns[0]
# # # # #         categories_data = (
# # # # #             df[first_cat]
# # # # #             .value_counts()
# # # # #             .reset_index()
# # # # #             .rename(columns={"index": "value", first_cat: "count"})
# # # # #             .to_dict(orient="records")
# # # # #         )

# # # # #     # ✅ Use the chart keys your frontend expects
# # # # #     summary = {
# # # # #         "rows": df.shape[0],
# # # # #         "columns": df.columns.tolist(),
# # # # #         "charts": {
# # # # #             "mean_by_column": mean_data,
# # # # #             "min_vs_max": minmax_data,
# # # # #             "mean_trend": trend_data,
# # # # #             "top_categories": categories_data,
# # # # #         }
# # # # #     }

# # # # #     return summary
# # # # from fastapi import FastAPI, UploadFile, Form
# # # # from fastapi.middleware.cors import CORSMiddleware
# # # # import pandas as pd
# # # # import io

# # # # app = FastAPI()

# # # # # Allow frontend (Vite/React) to talk to backend
# # # # app.add_middleware(
# # # #     CORSMiddleware,
# # # #     allow_origins=["*"],
# # # #     allow_credentials=True,
# # # #     allow_methods=["*"],
# # # #     allow_headers=["*"],
# # # # )

# # # # @app.post("/upload")
# # # # async def upload_file(file: UploadFile, want_ai: bool = Form(False)):
# # # #     content = await file.read()
# # # #     df = pd.read_csv(io.StringIO(content.decode("utf-8")))

# # # #     numeric_cols = df.select_dtypes(include="number")
# # # #     cat_cols = df.select_dtypes(exclude="number")

# # # #     mean_data, minmax_data, trend_data, categories_data = [], [], [], []

# # # #     if not numeric_cols.empty:
# # # #         mean_data = (
# # # #             numeric_cols.mean()
# # # #             .reset_index()
# # # #             .rename(columns={"index": "column", 0: "value"})
# # # #             .to_dict(orient="records")
# # # #         )
# # # #         minmax_data = [
# # # #             {"column": col, "min": float(numeric_cols[col].min()), "max": float(numeric_cols[col].max())}
# # # #             for col in numeric_cols.columns
# # # #         ]
# # # #         first_col = numeric_cols.columns[0]
# # # #         trend_data = [{"x": int(i), "y": float(v)} for i, v in enumerate(df[first_col])]

# # # #     if not cat_cols.empty:
# # # #         first_cat = cat_cols.columns[0]
# # # #         categories_data = (
# # # #             df[first_cat]
# # # #             .value_counts()
# # # #             .reset_index()
# # # #             .rename(columns={"index": "label", first_cat: "value"})
# # # #             .to_dict(orient="records")
# # # #         )

# # # #     summary = {
# # # #         "rows": df.shape[0],
# # # #         "columns": df.columns.tolist(),
# # # #         "charts": {
# # # #             "mean_by_column": mean_data,
# # # #             "min_vs_max": minmax_data,
# # # #             "mean_trend": trend_data,
# # # #             "top_categories": categories_data,
# # # #         },
# # # #         "ai_insight": "AI summary goes here 🚀" if want_ai else None
# # # #     }

# # # #     return summary
# # # from fastapi import FastAPI, UploadFile, Form
# # # from fastapi.middleware.cors import CORSMiddleware
# # # import pandas as pd
# # # import io
# # # import openai
# # # import os

# # # app = FastAPI()

# # # # allow frontend access
# # # app.add_middleware(
# # #     CORSMiddleware,
# # #     allow_origins=["*"],  
# # #     allow_credentials=True,
# # #     allow_methods=["*"],
# # #     allow_headers=["*"],
# # # )

# # # openai.api_key = os.getenv("OPENAI_API_KEY")

# # # @app.post("/upload")
# # # async def upload(file: UploadFile, want_ai: str = Form("false")):
# # #     contents = await file.read()
# # #     df = pd.read_csv(io.BytesIO(contents))

# # #     charts = {
# # #         "mean_by_column": df.mean(numeric_only=True)
# # #             .reset_index()
# # #             .rename(columns={"index": "column", 0: "value"})
# # #             .to_dict(orient="records"),

# # #         "min_vs_max": [
# # #             {"column": col, "min": float(df[col].min()), "max": float(df[col].max())}
# # #             for col in df.select_dtypes(include="number").columns
# # #         ],

# # #         "mean_trend": [
# # #             {"x": i, "y": float(val)}
# # #             for i, val in enumerate(df.select_dtypes(include="number").mean().values)
# # #         ],

# # #         "top_categories": (
# # #             df[df.select_dtypes(include="object").columns[0]]
# # #             .value_counts()
# # #             .reset_index()
# # #             .rename(columns={"index": "label", 0: "value"})
# # #             .to_dict(orient="records")
# # #             if len(df.select_dtypes(include="object").columns) > 0
# # #             else []
# # #         ),
# # #     }

# # #     ai_summary = None
# # #     if want_ai.lower() == "true":
# # #         sample_desc = df.head(3).to_dict(orient="records")
# # #         prompt = f"""
# # #         You are a data analyst. Summarize the dataset in plain English.
# # #         The dataset has {df.shape[0]} rows and {df.shape[1]} columns.
# # #         Here is a small sample: {sample_desc}.
# # #         Mention key columns, trends, and interesting points.
# # #         """
# # #         response = openai.ChatCompletion.create(
# # #             model="gpt-4o-mini",
# # #             messages=[{"role": "user", "content": prompt}],
# # #             max_tokens=300,
# # #             temperature=0.7,
# # #         )
# # #         ai_summary = response["choices"][0]["message"]["content"]

# # #     return {"charts": charts, "ai_summary": ai_summary}
# # # backend/main.py
# # import os, io, json
# # from typing import Optional
# # import pandas as pd
# # from fastapi import FastAPI, UploadFile, File, Form
# # from fastapi.middleware.cors import CORSMiddleware

# # # Optional OpenAI
# # OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "").strip()
# # USE_AI = bool(OPENAI_API_KEY)
# # try:
# #     import openai
# #     if USE_AI:
# #         openai.api_key = OPENAI_API_KEY
# # except Exception:
# #     USE_AI = False

# # app = FastAPI(title="Automatic Infographic Generator API")

# # app.add_middleware(
# #     CORSMiddleware,
# #     allow_origins=["*"],  # dev-friendly; tighten for prod
# #     allow_credentials=True,
# #     allow_methods=["*"],
# #     allow_headers=["*"],
# # )

# # def read_df(file: UploadFile, raw: bytes) -> pd.DataFrame:
# #     name = (file.filename or "").lower()
# #     if name.endswith(".json"):
# #         try:
# #             data = json.loads(raw.decode("utf-8"))
# #             if isinstance(data, list):
# #                 return pd.DataFrame(data)
# #             return pd.json_normalize(data)
# #         except Exception:
# #             # fallback: pandas can also read JSON bytes
# #             return pd.read_json(io.BytesIO(raw))
# #     # default: CSV
# #     return pd.read_csv(io.StringIO(raw.decode("utf-8")), engine="python")

# # def build_charts(df: pd.DataFrame) -> dict:
# #     num = df.select_dtypes(include="number")
# #     cat = df.select_dtypes(exclude="number")

# #     # mean_by_column
# #     mean_by_column = []
# #     if not num.empty:
# #         m = num.mean().reset_index()
# #         m.columns = ["column", "value"]
# #         mean_by_column = m.to_dict(orient="records")

# #     # min_vs_max
# #     min_vs_max = []
# #     if not num.empty:
# #         for col in num.columns:
# #             col_series = num[col].dropna()
# #             if col_series.empty:
# #                 continue
# #             min_vs_max.append({
# #                 "column": col,
# #                 "min": float(col_series.min()),
# #                 "max": float(col_series.max())
# #             })

# #     # mean_trend: use first numeric column as a sequence
# #     mean_trend = []
# #     if not num.empty:
# #         first_col = num.columns[0]
# #         mean_trend = [{"x": int(i), "y": float(v)} for i, v in enumerate(num[first_col].dropna().values)]

# #     # top_categories: first categorical column value counts
# #     top_categories = []
# #     if not cat.empty:
# #         first_cat = cat.columns[0]
# #         vc = df[first_cat].astype(str).value_counts().head(10).reset_index()
# #         vc.columns = ["label", "value"]
# #         top_categories = vc.to_dict(orient="records")

# #     return {
# #         "mean_by_column": mean_by_column,
# #         "min_vs_max": min_vs_max,
# #         "mean_trend": mean_trend,
# #         "top_categories": top_categories,
# #     }

# # def ai_summary_for(df: pd.DataFrame) -> str:
# #     # Safe fallback if no AI key
# #     if not USE_AI:
# #         rows, cols = df.shape
# #         return (
# #             f"Dataset has {rows} rows × {cols} columns. "
# #             f"Numeric columns summarized; top categories listed when available."
# #         )
# #     # Keep prompt small
# #     preview = df.head(30).to_dict(orient="records")
# #     prompt = (
# #         "You are a concise data analyst. Using the dataset preview and your own reasoning, "
# #         "write 4–6 bullet insights in plain English highlighting trends, outliers, ranges, "
# #         "and one actionable recommendation.\n\n"
# #         f"Preview (up to 30 rows): {json.dumps(preview)[:8000]}"
# #     )
# #     try:
# #         # Works with the classic SDK
# #         resp = openai.ChatCompletion.create(
# #             model="gpt-4o-mini",
# #             messages=[{"role": "user", "content": prompt}],
# #             temperature=0.4,
# #             max_tokens=300,
# #         )
# #         return resp["choices"][0]["message"]["content"].strip()
# #     except Exception:
# #         rows, cols = df.shape
# #         return f"Dataset has {rows} rows × {cols} columns. (AI summary unavailable; showing baseline stats.)"

# # @app.get("/")
# # def root():
# #     return {"ok": True, "message": "Backend running"}

# # # @app.post("/upload")
# # # async def upload(
# # #     file: UploadFile = File(...),
# # #     want_ai: str = Form("false"),  # frontend sends "true"/"false"
# # # ):
# # #     raw = await file.read()
# # #     df = read_df(file, raw)

# # #     charts = build_charts(df)
# # #     rows = int(df.shape[0])
# # #     columns = [str(c) for c in df.columns.tolist()]
# # #     preview = df.head(5).to_dict(orient="records")

# # #     ai_summary = None
# # #     if want_ai.lower() == "true":
# # #         ai_summary = ai_summary_for(df)

# # #     return {
# # #         "rows": rows,
# # #         "columns": columns,
# # #         "preview": preview,
# # #         "charts": charts,
# # #         "ai_summary": ai_summary,
# # #     }
# # @app.post("/upload")
# # async def upload_file(file: UploadFile, want_ai: bool = Form(False)):
# #     content = await file.read()

# #     # Read CSV/JSON
# #     if file.filename.endswith(".csv"):
# #         df = pd.read_csv(io.StringIO(content.decode("utf-8")))
# #     elif file.filename.endswith(".json"):
# #         df = pd.read_json(io.BytesIO(content))
# #     else:
# #         return {"error": "Unsupported file format"}

# #     numeric = df.select_dtypes(include="number")
# #     categorical = df.select_dtypes(exclude="number")

# #     # ----- Rule-Based Summary -----
# #     summary_text = []

# #     summary_text.append(
# #         f"The dataset contains {df.shape[0]} rows and {df.shape[1]} columns."
# #     )

# #     summary_text.append(
# #         f"It includes {len(numeric.columns)} numeric and {len(categorical.columns)} categorical columns."
# #     )

# #     # Missing values
# #     missing = df.isnull().sum()
# #     missing_cols = missing[missing > 0]
# #     if not missing_cols.empty:
# #         for col, val in missing_cols.items():
# #             pct = round((val / len(df)) * 100, 2)
# #             summary_text.append(
# #                 f"Column '{col}' has {val} missing values ({pct}%)."
# #             )
# #     else:
# #         summary_text.append("No missing values detected in the dataset.")

# #     # Numeric Stats
# #     for col in numeric.columns:
# #         summary_text.append(
# #             f"'{col}' ranges from {numeric[col].min()} to {numeric[col].max()} "
# #             f"with an average of {round(numeric[col].mean(), 2)}."
# #         )

# #     # Categorical Stats
# #     for col in categorical.columns:
# #         top = df[col].value_counts().idxmax()
# #         count = df[col].value_counts().max()
# #         unique = df[col].nunique()
# #         summary_text.append(
# #             f"'{col}' contains {unique} unique values, with '{top}' "
# #             f"being the most frequent ({count} occurrences)."
# #         )

# #     rule_based_summary = " ".join(summary_text)

# #     # ---------- Charts (same as before) ----------
# #     numeric_cols = numeric
# #     cat_cols = categorical

# #     mean_data = []
# #     minmax_data = []
# #     trend_data = []
# #     categories_data = []

# #     if not numeric_cols.empty:
# #         mean_data = (
# #             numeric_cols.mean().reset_index().rename(columns={"index":"column", 0:"value"}).to_dict(orient="records")
# #         )
# #         minmax_data = [
# #             {"column": col, "min": float(numeric_cols[col].min()), "max": float(numeric_cols[col].max())}
# #             for col in numeric_cols.columns
# #         ]
# #         first = numeric_cols.columns[0]
# #         trend_data = [{"x": i, "y": float(v)} for i, v in enumerate(numeric_cols[first].fillna(0))]

# #     if not cat_cols.empty:
# #         first_cat = cat_cols.columns[0]
# #         categories_data = (
# #             df[first_cat].value_counts().reset_index().rename(columns={"index":"value", first_cat:"count"}).to_dict(orient="records")
# #         )

# #     # Final response
# #     return {
# #         "rows": df.shape[0],
# #         "columns": df.columns.tolist(),
# #         "charts": {
# #             "mean_by_column": mean_data,
# #             "min_vs_max": minmax_data,
# #             "mean_trend": trend_data,
# #             "top_categories": categories_data,
# #         },
# #         "chart_suggestion": "bar",
# #         "ai_insight": rule_based_summary  # <-- works without AI
# #     }
# # backend/main.py
# import os, io, json
# from fastapi import FastAPI, UploadFile, Form, File
# from fastapi.middleware.cors import CORSMiddleware
# import pandas as pd

# app = FastAPI(title="Automatic Infographic Generator API")

# # Allow frontend access
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],   # For production, replace with your frontend domain
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # -------------------------
# # Helper: Read CSV / JSON
# # -------------------------
# def read_dataframe(file: UploadFile, raw: bytes) -> pd.DataFrame:
#     name = (file.filename or "").lower()

#     # JSON
#     if name.endswith(".json"):
#         try:
#             data = json.loads(raw.decode("utf-8"))
#             if isinstance(data, list):
#                 return pd.DataFrame(data)
#             return pd.json_normalize(data)
#         except Exception:
#             return pd.read_json(io.BytesIO(raw))

#     # Default: CSV
#     return pd.read_csv(io.StringIO(raw.decode("utf-8")), engine="python")


# # -------------------------
# # Helper: Create chart data
# # -------------------------
# def create_charts(df: pd.DataFrame) -> dict:
#     numeric = df.select_dtypes(include="number")
#     categorical = df.select_dtypes(exclude="number")

#     mean_by_column = []
#     if not numeric.empty:
#         mean_by_column = (
#             numeric.mean()
#             .reset_index()
#             .rename(columns={"index": "column", 0: "value"})
#             .to_dict(orient="records")
#         )

#     min_vs_max = []
#     if not numeric.empty:
#         min_vs_max = [
#             {
#                 "column": col,
#                 "min": float(numeric[col].min()),
#                 "max": float(numeric[col].max())
#             }
#             for col in numeric.columns
#         ]

#     trend = []
#     if not numeric.empty:
#         first = numeric.columns[0]
#         trend = [{"x": i, "y": float(v)} for i, v in enumerate(numeric[first].fillna(0))]

#     top_categories = []
#     if not categorical.empty:
#         first_cat = categorical.columns[0]
#         vc = df[first_cat].astype(str).value_counts().reset_index()
#         vc.columns = ["value", "count"]
#         top_categories = vc.to_dict(orient="records")

#     return {
#         "mean_by_column": mean_by_column,
#         "min_vs_max": min_vs_max,
#         "mean_trend": trend,
#         "top_categories": top_categories,
#     }


# # -------------------------
# # Helper: Rule-based AI-like summary
# # -------------------------
# def generate_ai_style_summary(df: pd.DataFrame) -> str:
#     rows, cols = df.shape

#     numeric = df.select_dtypes(include="number")
#     categorical = df.select_dtypes(exclude="number")

#     summary = []
#     summary.append(
#         f"The dataset contains {rows} rows and {cols} columns, "
#         f"including {len(numeric.columns)} numeric and {len(categorical.columns)} categorical fields."
#     )

#     # Missing values
#     missing = df.isnull().sum()
#     missing_cols = missing[missing > 0]

#     if not missing_cols.empty:
#         summary.append("Some columns contain missing values:")
#         for col, val in missing_cols.items():
#             pct = round((val / rows) * 100, 2)
#             summary.append(f"• '{col}': {val} missing values ({pct}%).")
#     else:
#         summary.append("No missing values were detected.")

#     # Numeric statistics
#     for col in numeric.columns:
#         series = df[col].dropna()
#         min_v, max_v = series.min(), series.max()
#         mean_v, median_v = series.mean(), series.median()
#         std_v = series.std()

#         skew = "right-skewed" if mean_v > median_v else "left-skewed" if mean_v < median_v else "fairly symmetric"

#         summary.append(
#             f"'{col}' ranges from {min_v} to {max_v} with an average of {round(mean_v,2)}. "
#             f"The distribution appears {skew} with a standard deviation of {round(std_v,2)}."
#         )

#     # Trend detection
#     if not numeric.empty:
#         first = numeric.columns[0]
#         series = numeric[first].fillna(0)
#         trend = "upward" if series.iloc[-1] > series.iloc[0] else "downward"
#         summary.append(f"'{first}' shows an overall {trend} trend across the dataset index.")

#     # Categorical summary
#     for col in categorical.columns:
#         vc = df[col].astype(str).value_counts()
#         top = vc.idxmax()
#         top_count = vc.max()
#         unique = vc.nunique()

#         summary.append(
#             f"'{col}' contains {unique} unique values, with '{top}' being the most frequent ({top_count} occurrences)."
#         )

#     return " ".join(summary)


# # -------------------------
# # API Route
# # -------------------------
# @app.post("/upload")
# async def upload_file(file: UploadFile = File(...), want_ai: bool = Form(False)):
#     raw = await file.read()
#     df = read_dataframe(file, raw)

#     charts = create_charts(df)
#     ai_text = generate_ai_style_summary(df)

#     return {
#         "rows": df.shape[0],
#         "columns": df.columns.tolist(),
#         "charts": charts,
#         "ai_insight": ai_text,    # frontend uses this
#         "chart_suggestion": "bar"
#     }


# @app.get("/")
# def home():
#     return {"message": "Backend working!"}
# backend/main.py
import os, io, json
from fastapi import FastAPI, UploadFile, Form, File
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd

app = FastAPI(title="Automatic Infographic Generator API")

# Allow frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # For production, replace with your domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -------------------------
# Helper: Read CSV / JSON properly
# -------------------------
def read_dataframe(file: UploadFile, raw: bytes) -> pd.DataFrame:
    name = (file.filename or "").lower()

    if name.endswith(".json"):
        try:
            data = json.loads(raw.decode("utf-8"))
            return pd.DataFrame(data)
        except:
            return pd.read_json(io.BytesIO(raw))

    # Default CSV
    return pd.read_csv(io.StringIO(raw.decode("utf-8")), engine="python")


# -------------------------
# Helper: Build chart data for frontend
# -------------------------
def create_charts(df: pd.DataFrame) -> dict:
    numeric = df.select_dtypes(include="number")
    categorical = df.select_dtypes(exclude="number")

    # Mean by Column
    if not numeric.empty:
        mean_by_column = (
            numeric.mean()
            .reset_index()
            .rename(columns={"index": "column", 0: "value"})
            .to_dict(orient="records")
        )
    else:
        mean_by_column = []

    # Min vs Max
    if not numeric.empty:
        min_vs_max = [
            {
                "column": col,
                "min": float(numeric[col].min()),
                "max": float(numeric[col].max())
            }
            for col in numeric.columns
        ]
    else:
        min_vs_max = []

    # Trend (use first numeric column)
    if not numeric.empty:
        first = numeric.columns[0]
        trend = [{"x": i, "y": float(v)} for i, v in enumerate(numeric[first].fillna(0))]
    else:
        trend = []

    # Top Categories
    if not categorical.empty:
        first_cat = categorical.columns[0]
        vc = df[first_cat].astype(str).value_counts().reset_index()
        vc.columns = ["value", "count"]
        top_categories = vc.to_dict(orient="records")
    else:
        top_categories = []

    return {
        "mean_by_column": mean_by_column,
        "min_vs_max": min_vs_max,
        "mean_trend": trend,
        "top_categories": top_categories,
    }


# -------------------------
# Helper: Rule-based AI-style insights (no OpenAI needed)
# -------------------------
def generate_ai_style_summary(df: pd.DataFrame) -> str:
    rows, cols = df.shape
    numeric = df.select_dtypes(include="number")
    categorical = df.select_dtypes(exclude="number")

    summary = [
        f"The dataset contains {rows} rows and {cols} columns.",
        f"It includes {len(numeric.columns)} numeric and {len(categorical.columns)} categorical columns."
    ]

    # Missing values
    missing = df.isnull().sum()
    missing_cols = missing[missing > 0]

    if not missing_cols.empty:
        summary.append("Missing data detected in:")
        for col, val in missing_cols.items():
            pct = round((val / rows) * 100, 2)
            summary.append(f"• {col}: {val} missing values ({pct}%).")
    else:
        summary.append("No missing values detected.")

    # Numeric stats
    for col in numeric.columns:
        series = df[col].dropna()
        summary.append(
            f"'{col}' ranges from {series.min()} to {series.max()} "
            f"with an average of {round(series.mean(),2)}."
        )

    # Categorical stats
    for col in categorical.columns:
        vc = df[col].astype(str).value_counts()
        top = vc.idxmax()
        summary.append(
            f"'{col}' has {vc.nunique()} unique values, "
            f"with '{top}' being the most common."
        )

    return " ".join(summary)


# -------------------------
# Upload Route
# -------------------------
@app.post("/upload")
async def upload_file(file: UploadFile = File(...), want_ai: bool = Form(False)):
    raw = await file.read()
    df = read_dataframe(file, raw)

    # Build charts
    charts = create_charts(df)

    # Generate summary
    summary_text = generate_ai_style_summary(df)

    return {
        "rows": df.shape[0],
        "columns": df.columns.tolist(),
        "charts": charts,
        "ai_insight": summary_text,
        "chart_suggestion": "bar"
    }


@app.get("/")
def home():
    return {"message": "Backend is running!"}
