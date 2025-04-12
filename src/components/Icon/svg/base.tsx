import { FC, JSX } from "react";
import * as T from "../types";

export const IconBase: FC<T.Icon> = ({
  path,
  size,
  viewBox = "0 0 26 26",
  onClick,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width={`${size}px`}
      height={`${size}px`}
      onClick={onClick}
    >
      {path as JSX.Element}
    </svg>
  );
};
