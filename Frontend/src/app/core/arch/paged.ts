export interface Paged<T> {
  hasNext: boolean;
  hasPrevious: boolean;
  data: T[];
  total?: number;
}
