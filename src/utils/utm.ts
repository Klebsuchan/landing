export function extractUtmParams(search: string): Record<string, string> {
  const params: Record<string, string> = {};
  if (!search) return params;

  try {
    const searchParams = new URLSearchParams(search);
    searchParams.forEach((value, key) => {
      params[key] = value;
    });
  } catch (e) {
    console.error('Error parsing UTM params:', e);
  }

  return params;
}

export function buildUrlWithParams(baseUrl: string, params: Record<string, string>): string {
  if (!params || Object.keys(params).length === 0) {
    return baseUrl;
  }

  try {
    const url = new URL(baseUrl);
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
    return url.toString();
  } catch {
    // If not a full URL (like relative), handle with string splitting
    const [path, search] = baseUrl.split('?');
    const existingParams = new URLSearchParams(search || '');
    Object.entries(params).forEach(([key, value]) => {
      existingParams.set(key, value);
    });
    return `${path}?${existingParams.toString()}`;
  }
}
