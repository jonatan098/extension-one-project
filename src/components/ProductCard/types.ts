export interface ProductCardProps {
  imgUrl: string;
  title: string;
  storeName?: string | null;
  price: number;
  description: string;
  onClick: () => void;
}
