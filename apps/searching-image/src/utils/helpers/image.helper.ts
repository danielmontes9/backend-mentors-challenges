import { ImageModelDao } from '../../models/image.model.dao';
import { ImageModelDto } from '../../models/image.model.dto';

export const formatImageData = (data: ImageModelDao): ImageModelDto => {
  return {
    id: data.id,
    alt_description: data.alt_description,
    views: data.views,
    downloads: data.downloads,
    width: data.width,
    height: data.height,
    tags: data.tags,
    topics: data.topics,
    urls: data.urls,
    links: data.links,
  };
};

export const formatImageArrayData = (
  data: ImageModelDao[],
): ImageModelDto[] => {
  return data.map((item) => formatImageData(item));
};
