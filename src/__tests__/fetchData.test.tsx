import { describe, expect, it, vi, type Mock } from "vitest";
import axios from "axios";
import { fetchData } from "@/api/fetchData";

vi.mock("axios");

const mockedAxiosGet = axios.get as unknown as Mock;

describe("fetchData", () => {
  it("should return weather data when coordinates are provided", async () => {
    const mockData = {
      main: {
        feels_like: 14.41,
        grnd_level: 988,
        humidity: 88,
        pressure: 998,
        sea_level: 998,
        temp: 14.6,
        temp_max: 15.09,
        temp_min: 14.07,
      },
      name: "Coventry",
      sys: {
        country: "GB",
      },
    };

    mockedAxiosGet.mockResolvedValue({ data: mockData });

    const response = await fetchData("https://example.com");

    expect(response).toEqual(mockData);
  });

  it("should throw error if API fails", async () => {
    const url = "https://example.test";

    mockedAxiosGet.mockRejectedValueOnce({
      message: "Network down",
    });

    await expect(fetchData(url)).rejects.toThrow(
      "Weather API Error: Network down"
    );
  });

  it("should throw error with statusText if API fails", async () => {
    const url = "https://example.test";

    mockedAxiosGet.mockRejectedValueOnce({
      response: { statusText: "Bad Request" },
    });

    await expect(fetchData(url)).rejects.toThrow(
      "Weather API Error: Bad Request"
    );
  });
});
