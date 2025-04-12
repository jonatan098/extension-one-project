import { useContext } from "react";
import { LoaderContext } from "@context/loaderContext";

export const useLoader = () => {
  const { setShowLoader } = useContext(LoaderContext);
  return setShowLoader;
};
