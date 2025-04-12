import React from "react";

export interface Input {
  innerRef?: any;
  id?: string;
  label: string;
  tabOrder?: number;
  inputMode?:
    | "text"
    | "numeric"
    | "tel"
    | "search"
    | "email"
    | "password"
    | "alphabet";
  mask?: string;
  width?: string;
  onChange?: (text?: string) => void;
  value?: string;
  margin?: string;
  error?: string;
  onBlur?: () => void;
  onFocus?: () => void;
  autoComplete?: string;
  type?: "password" | "text" | "date";
  disabled?: boolean;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  onKeyDown?: (e: any) => void;
  showSpinner?: boolean;
}

export interface InputProps {
  $width?: string;
  $hasError?: boolean;
  $hasIcon?: boolean;
  $leftIcon?: boolean;
  $rightIcon?: boolean;
  $isNotEmpty?: boolean;
  $backgroundColor?: string;
}

export default Input;
