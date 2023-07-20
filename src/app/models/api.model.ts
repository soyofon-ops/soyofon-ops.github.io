export interface APIResponse<T> {
  status: string;
  message: string;
  data: T;
}

export interface Sitemap {
  code: string;
  name: string;
  path: string;
  children: Sitemap[];
}
