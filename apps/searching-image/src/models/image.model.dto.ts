export interface ImageModelDto {
  id: string;
  alt_description: string;
  views: number;
  downloads: number;
  width: number;
  height: number;
  tags: Tags[];
  topics: Topic;
  urls: Urls;
  links: Links;
}

interface Tags {
  type: string;
  title: string;
}

interface Topic {
  id: string;
  title: string;
  slug: string;
  visibility: string;
}

interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

interface Links {
  self: string;
  html: string;
  download: string;
  download_location: string;
}
