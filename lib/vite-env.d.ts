/// <reference types="vite/client" />

declare global {
  type MobilePlayerProps = {
    isPlaying?: boolean;
  }
  type SliderItemProps = {
    backgroundUrl: string,
    backgroundColor?: string,
  }
}
export {};