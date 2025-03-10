export interface Book {
    id: number;
    title: string;
    description: string;
    slug: string;
    price: number;
    stock: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    image: Image;
  }
  
  
  interface Image {
    id: number;
    documentId: string;
    name: string;
    alternativeText: null;
    caption: null;
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
    provider_metadata: Providermetadata;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  }
  
  interface Formats {
    large: Large;
    small: Large;
    medium: Large;
    thumbnail: Large;
  }
  
  interface Large {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: null;
    size: number;
    width: number;
    height: number;
    sizeInBytes: number;
    provider_metadata: Providermetadata;
  }
  
  interface Providermetadata {
    public_id: string;
    resource_type: string;
  }
  