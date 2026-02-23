export interface PagedResponse<T> {
  next?: string;
  previous?: string;
  total?: number;
  results: T[];
}
