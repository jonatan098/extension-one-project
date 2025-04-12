import { JSX, ReactNode } from "react";
import { SnackbarContextProvider } from "@context/snackbarContext";
import { LoaderContextProvider } from "./context/loaderContext";

type ProviderProps = {
  children?: ReactNode | JSX.Element | JSX.Element[];
};

const Provider = ({ children }: ProviderProps) => {
  return (
    <LoaderContextProvider>
      <SnackbarContextProvider>{children}</SnackbarContextProvider>
    </LoaderContextProvider>
  );
};

export default Provider;
