import {
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
  ReactNode,
} from "react";

type LoaderProps = {
  showLoader: boolean;
  setShowLoader: Dispatch<SetStateAction<boolean>>;
};

type LoaderContextProviderProps = {
  children?: ReactNode;
};

const LoaderContext = createContext<LoaderProps>({} as LoaderProps);

const LoaderContextProvider = ({ children }: LoaderContextProviderProps) => {
  const [showLoader, setShowLoader] = useState(false);
  const value = useMemo(
    () => ({
      showLoader,
      setShowLoader,
    }),
    [showLoader],
  );
  return (
    <LoaderContext.Provider value={value}>{children}</LoaderContext.Provider>
  );
};

export { LoaderContextProvider, LoaderContext };
