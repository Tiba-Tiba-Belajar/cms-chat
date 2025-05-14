export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

export interface AnalyticsData {
  visitors: {
    total: number;
    trend: number;
    history: { date: string; count: number }[];
  };
  conversations: {
    total: number;
    trend: number;
    history: { date: string; count: number }[];
  };
  responseTime: {
    average: number;
    trend: number;
    history: { date: string; value: number }[];
  };
  satisfaction: {
    average: number;
    trend: number;
    history: { date: string; value: number }[];
  };
  channelDistribution: {
    website: number;
    shopee: number;
    tokopedia: number;
    lazada: number;
  };
}

export interface WebhookPayload {
  type: string;
  data: unknown;
  timestamp: string;
  signature: string;
}
