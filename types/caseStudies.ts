export interface ICaseStudy {
  id: number;
  slug: string;
  thumbnail: string;
  title: string;
  noindex?: boolean;
  features?: string[];
  summary: ICaseSummary;
  tech_stack: ICaseTechStack;
  images: string[];
}

export interface ICaseGalleryItem {
  id: number;
  slug: string;
  thumbnail: string;
  title: string;
  noindex?: boolean;
  summary?: {
    description?: string;
  };
}

export interface ICaseDetailsItem {
  id: number;
  title: string;
  features?: string[];
  summary: ICaseSummary;
  tech_stack: ICaseTechStack;
  images: string[];
}

export interface ICaseSummary {
  description: string;
  goal?: string;
  result?: string;
  industry: string;
}

export interface ICaseTechStack {
  backend?: string;
  frontend?: string;
  db?: string;
  api?: string;
  devops?: string;
  libraries_used?: string;
  qa?: string;
  project_management?: string;
}
