import { ReactNode, createContext, useState, useMemo } from "react";
import Snackbar from "@components/Snackbar";
import * as T from "@components/Snackbar/types";

type SnackbarProps = {
  openSnackbar: (data: T.SnackbarProps) => void;
};

type SnackbarContextProviderProps = {
  children?: ReactNode;
};

const SnackbarContext = createContext<SnackbarProps>({
  openSnackbar: () => {},
});

const SnackbarContextProvider = ({
  children,
}: SnackbarContextProviderProps) => {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [data, setData] = useState<T.SnackbarProps | null>(null);

  const openSnackbar = (data: T.SnackbarProps | null) => {
    setShowSnackbar(true);
    setData(data);
    setTimeout(() => {
      closeSnackbar();
    }, 5000);
  };

  const closeSnackbar = () => {
    setShowSnackbar(false);
    setData(null);
  };

  const renderSnackbar = () => {
    if (!showSnackbar || !data) {
      return undefined;
    }
    return (
      <Snackbar
        onClick={() => closeSnackbar()}
        message={data?.message?.replace("Error:", "")}
        type={data?.type}
        ShowIcon={data?.ShowIcon}
      />
    );
  };

  const value = useMemo(
    () => ({
      openSnackbar,
    }),
    [data],
  );

  return (
    <SnackbarContext.Provider value={value}>
      {children}
      {renderSnackbar()}
    </SnackbarContext.Provider>
  );
};

export { SnackbarContextProvider, SnackbarContext };
