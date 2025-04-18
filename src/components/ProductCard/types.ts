export interface ProductCardProps {
  imgUrl: string;
  title: string;
  storeName: string;
  price: number;
  description: string;
  onClick: () => void;
}
