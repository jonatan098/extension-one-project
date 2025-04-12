export interface ButtonProps {
  label: string;
  onClick?: () => void;
  width?: string;
  height?: string;
  outline?: boolean;
  color?: string;
  margin?: string;
  disabled?: boolean;
  type?: "button" | "submit";
}
