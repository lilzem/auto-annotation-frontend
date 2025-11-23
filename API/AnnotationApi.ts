import { AxiosInstance } from "axios";
import { createApiClient } from "./config";

export interface Annotation {
  id: string;
  title: string;
  image?: string;
  source_file: string;
  source_type: string;
  annotation?: string;
  genre?: string;
  tts_url?: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface AnnotationsListResponse {
  data: {
    annotations: Annotation[];
    pagination: {
      count: number;
      limit: number;
      offset: number;
    };
  };
  message: string;
  success: boolean;
}

export interface AnnotationStats {
  data: {
    total: number;
    processing: number;
    completed: number;
    failed: number;
  };
  success: boolean;
  message: string;
}

export interface CreateAnnotationRequest {
  title: string;
  image?: File;
  file: File;
}

export interface UpdateAnnotationRequest {
  title?: string;
  image?: File;
  annotation?: string;
  genre?: string;
}

export class AnnotationApi {
  private client: AxiosInstance;

  constructor(token?: string) {
    this.client = createApiClient(token);
  }

  async uploadAndCreate(data: CreateAnnotationRequest): Promise<Annotation> {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      if (data.image) {
        formData.append("image", data.image, data.image.name);
      }
      formData.append("file", data.file, data.file.name);

      const response = await this.client.post<{
        success: boolean;
        message: string;
        data: Annotation;
      }>("/annotations/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getAll(limit = 10, offset = 0): Promise<AnnotationsListResponse> {
    try {
      const response = await this.client.get<AnnotationsListResponse>("/annotations", {
        params: { limit, offset },
      });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getById(id: string): Promise<Annotation> {
    try {
      const response = await this.client.get<{
        success: boolean;
        message: string;
        data: Annotation;
      }>(`/annotations/${id}`);
      return response.data.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async update(id: string, data: UpdateAnnotationRequest): Promise<Annotation> {
    try {
      // If image file is provided, use FormData
      if (data.image) {
        const formData = new FormData();
        if (data.title) formData.append("title", data.title);
        if (data.annotation) formData.append("annotation", data.annotation);
        if (data.genre) formData.append("genre", data.genre);
        formData.append("image", data.image, data.image.name);

        const response = await this.client.patch<{
          success: boolean;
          message: string;
          data: Annotation;
        }>(`/annotations/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        return response.data.data;
      }

      // Otherwise use JSON
      const response = await this.client.patch<{
        success: boolean;
        message: string;
        data: Annotation;
      }>(`/annotations/${id}`, data);
      return response.data.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await this.client.delete(`/annotations/${id}`);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async generateTTS(id: string): Promise<Annotation> {
    try {
      const response = await this.client.post<{
        success: boolean;
        message: string;
        data: Annotation;
      }>(`/annotations/${id}/tts`);
      return response.data.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getStats(): Promise<AnnotationStats> {
    try {
      const response = await this.client.get<AnnotationStats>("/annotations/stats");
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
