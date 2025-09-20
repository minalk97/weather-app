import { API_CONFIG } from "./config";
import type {
  Coordinates,
  ForecastData,
  GeocodingResponse,
  WeatherData,
} from "./types";
import { createUrl } from "./createUrl";
import { fetchData } from "./fetchData";

export const getCurrentWeather = async ({
  lat,
  lon,
}: Coordinates): Promise<WeatherData> => {
  const url = createUrl(`${API_CONFIG.BASE_URL}/weather`, {
    lat: lat.toString(),
    lon: lon.toString(),
    units: API_CONFIG.DEFAULT_PARAMS.units,
  });

  return fetchData<WeatherData>(url);
};

export const getForecast = async ({
  lat,
  lon,
}: Coordinates): Promise<ForecastData> => {
  const url = createUrl(`${API_CONFIG.BASE_URL}/forecast`, {
    lat: lat.toString(),
    lon: lon.toString(),
    units: API_CONFIG.DEFAULT_PARAMS.units,
  });

  return fetchData<ForecastData>(url);
};

export const reverseGeoCode = async ({
  lat,
  lon,
}: Coordinates): Promise<GeocodingResponse[]> => {
  const url = createUrl(`${API_CONFIG.GEO}/reverse`, {
    lat: lat.toString(),
    lon: lon.toString(),
    limit: 1,
  });

  return fetchData<GeocodingResponse[]>(url);
};

export const searchLocations = async (
  query: string
): Promise<GeocodingResponse[]> => {
  const url = createUrl(`${API_CONFIG.GEO}/direct`, {
    q: query,
    limit: 5,
  });

  return fetchData<GeocodingResponse[]>(url);
};
