import "server-only";

import { timingSafeEqual } from "node:crypto";
import { createRequestSupabase } from "@/lib/serverSupabase";

export function integrationSecretMatches(authorization: string | null, expected: string) {
  if (!authorization?.startsWith("Bearer ")) return false;
  const supplied = Buffer.from(authorization.slice(7), "utf8");
  const configured = Buffer.from(expected, "utf8");
  return supplied.length === configured.length && timingSafeEqual(supplied, configured);
}

export async function requireHmcAdmin(request: Request) {
  const authorization = request.headers.get("authorization");
  if (!authorization?.startsWith("Bearer ")) return { client: null, error: "Authentication is required.", status: 401 };

  try {
    const client = createRequestSupabase(authorization);
    const { data, error } = await client.auth.getUser();
    if (error || !data.user) return { client: null, error: "Authentication is required.", status: 401 };

    const checks = [
      { column: "id", value: data.user.id },
      { column: "email", value: data.user.email },
    ].filter((check) => check.value);
    for (const check of checks) {
      const { data: admin } = await client.from("admin_users").select("*").eq(check.column, check.value).maybeSingle();
      if (admin) return { client, error: null, status: 200 };
    }
    return { client: null, error: "Administrator access is required.", status: 403 };
  } catch {
    return { client: null, error: "Home Money Check is not configured.", status: 500 };
  }
}
