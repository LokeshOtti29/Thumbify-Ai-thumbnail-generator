export type { AspectRatio } from "./type";
export type {ThumbnailStyle} from './type';
export const aspectRatios = ['16:9', '1:1', '9:16'] as const
export const thumbnailStyles = ["Bold & Graphic","Minimalist","Photorealistic", "Illustrated","Tech/Futuristic"] as const
export const colorSchemes = [
  {
    id: 'vibrant',
    name: 'Vibrant',
    colors: ['#FF6B6B', '#4D96FF', '#6BCB77'],
  },
  {
    id: 'warm',
    name: 'Warm',
    colors: ['#FF9F45', '#FF4D4D', '#7A2E4D'],
  },
  {
    id: 'cool',
    name: 'Cool',
    colors: ['#00B4D8', '#90DBF4', '#CAF0F8'],
  },
  {
    id: 'nature',
    name: 'Nature',
    colors: ['#2D6A4F', '#52B788', '#B7E4C7'],
  },
  {
    id: 'purple',
    name: 'Purple',
    colors: ['#7B2CBF', '#9D4EDD', '#C77DFF'],
  },
  {
    id: 'monochrome',
    name: 'Monochrome',
    colors: ['#111111', '#555555', '#AAAAAA'],
  },
  {
    id: 'pastel',
    name: 'Pastel',
    colors: ['#FFB5A7', '#FCD5CE', '#F8EDEB'],
  },
] as const;
