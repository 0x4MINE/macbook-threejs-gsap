export interface PositionIF {
  id: string;
  left?: number;
  right?: number;
  bottom: number;
  transform?: string;
}

export interface ImageIF {
  id: string;
  src: string;
  alt?: string;
}

export interface MacbookProps {
  [key: string]: any;
}
export interface MacbookStore {
  color: string;
  setColor: (color: string) => void;

  scale: number;
  setScale: (scale: number) => void;

  texture: string;
  setTexture: (texture: string) => void;

  reset: () => void;
}
