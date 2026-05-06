export function withBase(path: string) {
  if (!path || path.startsWith("http://") || path.startsWith("https://") || path.startsWith("mailto:") || path.startsWith("#")) {
    return path;
  }

  const base = import.meta.env.BASE_URL;
  const normalizedBase = base.endsWith("/") ? base.slice(0, -1) : base;

  if (path === "/") {
    return base;
  }

  if (path.startsWith("/")) {
    return `${normalizedBase}${path}`;
  }

  return `${base}${path}`;
}
