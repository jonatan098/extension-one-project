import { FC } from "react";
import { IconBase } from "./base";
import * as T from "../types";

const path = (color: string) => (
  <path
    d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
    fill={color}
  />
);

const ArrowRightIcon: FC<T.ExtendedIcon> = ({ color = "#000", size }) =>
  IconBase({
    path: path(color),
    viewBox: "0 0 24 24",
    size,
  });

export default ArrowRightIcon;
