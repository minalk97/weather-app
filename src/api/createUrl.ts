import { API_CONFIG } from "./config";

export const createUrl = (
  endpoint: string,
  params: Record<string, string | number>
) => {
  const searchParams = new URLSearchParams({
    appid: API_CONFIG.API_KEY,
    ...params,
  });
  return `${endpoint}?${searchParams.toString()}`;
};