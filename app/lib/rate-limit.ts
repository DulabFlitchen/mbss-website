type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const globalState = globalThis as typeof globalThis & {
  __mbssRateLimitStore?: Map<string, RateLimitEntry>;
};

const store = globalState.__mbssRateLimitStore ?? new Map<string, RateLimitEntry>();
if (!globalState.__mbssRateLimitStore) {
  globalState.__mbssRateLimitStore = store;
}

export function enforceRateLimit(
  key: string,
  maxRequests: number,
  windowMs: number
): { allowed: boolean; remaining: number; retryAfterSeconds: number } {
  const now = Date.now();
  const entry = store.get(key);

  if (!entry || entry.resetAt <= now) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    return {
      allowed: true,
      remaining: Math.max(maxRequests - 1, 0),
      retryAfterSeconds: Math.ceil(windowMs / 1000),
    };
  }

  if (entry.count >= maxRequests) {
    return {
      allowed: false,
      remaining: 0,
      retryAfterSeconds: Math.max(Math.ceil((entry.resetAt - now) / 1000), 1),
    };
  }

  entry.count += 1;
  store.set(key, entry);

  return {
    allowed: true,
    remaining: Math.max(maxRequests - entry.count, 0),
    retryAfterSeconds: Math.max(Math.ceil((entry.resetAt - now) / 1000), 1),
  };
}
