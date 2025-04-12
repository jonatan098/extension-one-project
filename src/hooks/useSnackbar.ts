import { useContext } from "react";
import { SnackbarContext } from "@context/snackbarContext";

export const useSnackbar = () => {
  const { openSnackbar } = useContext(SnackbarContext);
  return openSnackbar;
};
