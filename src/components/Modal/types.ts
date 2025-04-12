import { ReactNode } from "react";

export interface ModalProps {
  children: ReactNode;
  padding?: string;
  maxWidth?: string;
  onClose?: () => void;
}
