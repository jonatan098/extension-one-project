import { FC } from "react";
import { IconBase } from "./base";
import * as T from "../types";

const path = (color: string) => (
  <g>
    <g
      id="Elipse_270"
      data-name="Elipse 270"
      fill="none"
      stroke={color}
      strokeWidth="3"
    >
      <circle cx="18.163" cy="18.163" r="18.163" stroke="none" />
      <circle cx="18.163" cy="18.163" r="16.663" fill="none" />
    </g>
    <line
      id="Linha_70"
      data-name="Linha 70"
      y2="12.613"
      transform="translate(18.182 11.856)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeWidth="3"
    />
    <line
      id="Linha_71"
      data-name="Linha 71"
      x1="12.613"
      transform="translate(11.856 18.144)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeWidth="3"
    />
  </g>
);

const PlusSingIcon: FC<T.ExtendedIcon> = ({ color = "#000", size }) =>
  IconBase({
    path: path(color),
    size,
    viewBox: "0 0 36.326 36.326",
  });

export default PlusSingIcon;
