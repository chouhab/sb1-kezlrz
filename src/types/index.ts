export interface APK {
  id: string;
  name: string;
  version: string;
  size: string;
  developer: string;
  category: string;
  rating: number;
  downloads: number;
  lastUpdated: string;
  compatible: boolean;
  verified: boolean;
  iconUrl: string;
}

export interface SearchFilters {
  category: string;
  sortBy: 'popular' | 'recent' | 'rating';
  verified: boolean;
  compatible: boolean;
}