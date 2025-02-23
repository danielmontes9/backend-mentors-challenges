export interface StadisticsModel {
  id: string;
  slug: string;
  downloads: Downloads;
  views: Views;
  likes: Likes;
}

interface Downloads {
  total: number;
  historical: Historical;
}

interface Views {
  total: number;
  historical: Historical;
}

interface Likes {
  total: number;
  historical: Historical;
}

interface Historical {
  change: number;
  resolution: string;
  quantity: number;
  values: Value[];
}

interface Value {
  date: string;
  value: number;
}
