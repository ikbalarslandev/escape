export interface IDashboardUser {
  number: number;
  name: string;
  instagram?: string;
  games: number[];
}

export interface IDashboardData {
  data: IDashboardUser[];
}
