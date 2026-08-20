"use server";

import { cookies } from "next/headers";

const BANNER_DISMISS_COOKIE = "banner_dismissed_version";

export async function dismissBanner(version: number) {
  const cookieStore = await cookies();
  cookieStore.set(BANNER_DISMISS_COOKIE, String(version), {
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
    sameSite: "lax",
  });
}

export async function getDismissedVersion(): Promise<number | null> {
  const cookieStore = await cookies();
  const value = cookieStore.get(BANNER_DISMISS_COOKIE)?.value;
  return value ? Number(value) : null;
}
