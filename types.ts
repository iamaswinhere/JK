import React from 'react';

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export interface DesignService {
  title: string;
  description: string;
  priceRange: string;
  icon: React.ReactNode;
}

export interface AIResponse {
  advice: string;
  colorPalette: string[];
}