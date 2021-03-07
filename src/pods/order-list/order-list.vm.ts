export interface Order {
  id: string;
  date: string;
  client: string;
  status: 'valid' | 'invalid';
}