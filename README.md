# Career Recommendation Engine - AI/ML Components

A comprehensive machine learning system for personalized career recommendations based on user skills, interests, and personality traits.

## 🎯 Project Overview

This project implements a multi-label classification system that predicts suitable careers with confidence scores, featuring:
- Advanced feature engineering with skill clustering
- Multi-label classification with Random Forest and XGBoost
- Intelligent confidence scoring with validation framework
- Production-ready FastAPI deployment

## 📁 Project Structure

```
assig-ai-tut/
├── data/
│   └── synthetic_user_profiles_large.csv
├── notebooks/
│   ├── 01_data_engineering.ipynb
│   └── 02_model_development.ipynb
├── src/
│   ├── preprocessing.py
│   ├── feature_engineering.py
│   ├── model_trainer.py
│   ├── confidence_scorer.py
│   └── api.py
├── models/
│   └── career_recommender_v1.pkl
├── tests/
│   └── test_api.py
├── requirements.txt
└── README.md
```

## 🚀 Quick Start

### Installation

```bash
pip install -r requirements.txt
```

### Frontend (Next.js) Setup

The repository now includes a modern Next.js 14 interface in the project root.

```bash
npm install
npm run dev
```

Set the backend API location with the `NEXT_PUBLIC_API_BASE_URL` environment variable (see `.env.example`). By default it targets the hosted Render deployment at `https://career-recommender-api-gpbq.onrender.com`.

The app is production-ready for Vercel deployments and lives in the `app/`, `components/`, and `lib/` directories.

### Run Data Preprocessing & Model Training

```bash
jupyter notebook notebooks/01_data_engineering.ipynb
jupyter notebook notebooks/02_model_development.ipynb
```

### Start API Server

```bash
uvicorn src.api:app --reload --port 8000
```

### Access API Documentation

- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

### Run Tests

```bash
pytest tests/ -v
```

## 📊 Model Performance

- **Hamming Loss**: < 0.15
- **Precision@3**: > 0.80
- **Label Ranking Average Precision**: > 0.85

## 🔧 API Usage

```python
import requests

response = requests.post(
    "http://localhost:8000/predict",
    json={
        "skills": ["Python", "Communication"],
        "interests": ["Technology", "Management"],
        "personality": {
            "analytical": 0.8,
            "creative": 0.4,
            "social": 0.7
        },
        "education": "Bachelor",
        "experience": 3
    }
)

print(response.json())
```

## 📈 Key Features

### Task 1: Data Engineering (25%)
- Skill clustering (technical/soft skills)
- Interest profiling
- Personality trait normalization
- Class imbalance handling
- Feature importance analysis

### Task 2: Model Development (40%)
- Multi-label classification
- Hyperparameter optimization
- Probability calibration
- Comprehensive evaluation metrics
- Error analysis

### Task 3: Confidence Scoring (20%)
- Hybrid scoring (model + heuristics)
- Rule-based adjustments
- Validation framework
- Quality assurance metrics

### Task 4: API Deployment (15%)
- FastAPI implementation
- Input validation
- Model versioning
- Comprehensive testing
- OpenAPI documentation

## 👨‍💻 Author

Built as part of AI/ML assignment demonstrating end-to-end ML system development.
