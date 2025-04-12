export interface SnackbarProps {
  message: string;
  type: "success" | "error";
  ShowIcon?: boolean;
}

export interface SnackbarComponentProps {
  onClick: () => void;
}
