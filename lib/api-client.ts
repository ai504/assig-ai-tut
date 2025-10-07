import { API_BASE_URL, fetcher } from "@/lib/utils";

export interface HealthStatus {
  status: string;
  model_loaded: boolean;
  model_version?: string;
  uptime?: string;
}

export interface CareersResponse {
  careers: string[];
  count: number;
}

export interface ModelInfo {
  model_name: string;
  version: string;
  num_careers: number;
  feature_count: number;
}

export interface PredictionRequest {
  skills: string[];
  interests: string[];
  personality: {
    analytical: number;
    creative: number;
    social: number;
  };
  education: string;
  experience: number;
}

export interface CareerRecommendation {
  title: string;
  confidence: number;
}

export interface PredictionResponse {
  careers: CareerRecommendation[];
  model_version: string;
  timestamp: string;
}

export async function getHealthStatus(): Promise<HealthStatus> {
  return fetcher<HealthStatus>(`${API_BASE_URL}/health`);
}

export async function getAvailableCareers(): Promise<CareersResponse> {
  return fetcher<CareersResponse>(`${API_BASE_URL}/careers`);
}

export async function getModelInfo(): Promise<ModelInfo> {
  return fetcher<ModelInfo>(`${API_BASE_URL}/model-info`);
}

export async function predictCareers(body: PredictionRequest): Promise<PredictionResponse> {
  return fetcher<PredictionResponse>(`${API_BASE_URL}/predict`, {
    method: "POST",
    body: JSON.stringify(body)
  });
}
