export interface Articles {
  data: Data[];
  meta: Meta;
}

export interface Data {
  id: number;
  documentId: string;
  title: string;
  description: string;
  slug: string;
  readingTime: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  cover: Cover;
  author: Author;
  category: Author;
  blocks: Block[];
  Text: any[];
}

export interface Author {
  id: number;
  documentId: string;
  name: string;
  email?: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  slug?: string;
  description?: null;
}

export interface Block {
  __component: string;
  id: number;
  body?: string;
  title?: string;
}

export interface Cover {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface Formats {
  thumbnail: Large;
  medium: Large;
  small: Large;
  large: Large;
}

export interface Large {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
