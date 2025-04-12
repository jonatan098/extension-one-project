import { ReactNode } from "react";

export interface Carousel {
  name: string;
  children: ReactNode;
  itemsPerView?: number;
  itemsPerViewAutoMobile?: boolean;
  clickSendToFirst?: boolean;
  gapMobile?: string;
  gapDesktop?: string;
  uncut?: boolean;
}

export default Carousel;
