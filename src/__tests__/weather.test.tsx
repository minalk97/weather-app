import { describe, expect, it, vi, type Mock } from "vitest";
import { getCurrentWeather } from "@/api/weather";
import { createUrl } from "@/api/createUrl";
import { fetchData } from "@/api/fetchData";

vi.mock("@/api/createUrl", () => ({
  createUrl: vi.fn(),
}));

vi.mock("@/api/fetchData", () => ({
  fetchData: vi.fn(),
}));

const createUrlMock = createUrl as unknown as Mock;
const fetchDataMock = fetchData as unknown as Mock;

describe("getCurrentWeather", () => {
  const mockUrl = "http://mocked-url.com";
  const mockWeather = { name: "London", main: { temp: 14.6 } };

  it("includes API key and merges provided params", async () => {
    const params = {
      lat: 51.5074,
      lon: -0.1278,
    };

    createUrlMock.mockReturnValue(mockUrl);

    fetchDataMock.mockResolvedValue(mockWeather);

    const response = await getCurrentWeather(params);

    expect(response).toEqual(mockWeather);
  });
});
