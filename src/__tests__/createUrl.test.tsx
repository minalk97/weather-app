import { createUrl } from "@/api/createUrl";
import { describe, expect, it } from "vitest";

describe("create URL", () => {
  it("includes API key and merges provided params", () => {
    const endpoint = "https://api.example.com/weather";

    const params = {
      lat: 51.5074,
      lon: -0.1278,
      units: "metric",
    };

    const url = createUrl(endpoint, params);

    const u = new URL(url);

    expect(u.origin + u.pathname).toBe(endpoint);
    expect(u.searchParams.get("appid")).toBe("TEST_KEY");
    expect(u.searchParams.get("lat")).toBe("51.5074");
    expect(u.searchParams.get("lon")).toBe("-0.1278");
    expect(u.searchParams.get("units")).toBe("metric");
  });
});
