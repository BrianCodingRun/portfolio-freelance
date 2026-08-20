// utils/analytics-helpers.ts
import * as UAParser from "ua-parser-js";

export async function getGeoInfo(
  ip: string
): Promise<{ country: string; city: string }> {
  try {
    const res = await fetch(`https://ipapi.co/${ip}/json/`);
    const data = await res.json();

    return {
      country: data.country_name || "Unknown",
      city: data.city || "Unknown",
    };
  } catch (err) {
    console.error("Geo lookup failed:", err);
    return { country: "Unknown", city: "Unknown" };
  }
}

export function getDeviceInfo(userAgent: string): {
  device: "desktop" | "mobile" | "tablet" | "unknown";
  browser: string;
  os: string;
} {
  const parser = new UAParser.UAParser(userAgent);
  const deviceType = parser.getDevice().type;
  const browser = parser.getBrowser().name || "Unknown";
  const os = parser.getOS().name || "Unknown";

  let type: "desktop" | "mobile" | "tablet" | "unknown";

  switch (deviceType) {
    case "mobile":
    case "tablet":
      type = deviceType;
      break;
    default:
      type = "desktop";
  }

  return {
    device: type,
    browser,
    os,
  };
}
