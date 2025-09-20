import axios, { AxiosError } from "axios";

export const fetchData = async <T>(url: string): Promise<T> => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    throw new Error(
      `Weather API Error: ${err.response?.statusText || err.message}`
    );
  }
};