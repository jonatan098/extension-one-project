import { FC } from "react";
import { IconBase } from "./base";
import * as T from "../types";

const path = (color: string) => (
  <path
    d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
    fill={color}
  />
);

const ArrowLeftIcon: FC<T.ExtendedIcon> = ({ color = "#000", size }) =>
  IconBase({
    path: path(color),
    size,
    viewBox: "0 0 24 24",
  });

export default ArrowLeftIcon;
