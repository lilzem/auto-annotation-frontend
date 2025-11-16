import "axios";

interface RequestMetricMetadata {
  endTimer?: (labels?: Partial<Record<string, string | number>>) => number | undefined;
  route?: string;
}

declare module "axios" {
  interface AxiosRequestConfig {
    metricMetadata?: RequestMetricMetadata;
  }

  interface InternalAxiosRequestConfig {
    metricMetadata?: RequestMetricMetadata;
  }
}
