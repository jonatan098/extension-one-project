export interface ProductCardProps {
  imgUrl: string;
  title: string;
  storeName?: string | null;
  price: number;
  description: string;
  editMode?: boolean;
  onClick?: () => void;
  onDelete?: () => void;
  onEdit?: () => void;
}
