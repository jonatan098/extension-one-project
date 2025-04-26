export interface CartCardProps {
  image: string;
  title: string;
  description: string;
  subtotal: number;
  onDelete?: () => void;
}
