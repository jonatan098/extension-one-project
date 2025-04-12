import { useContext } from "react";
import { LoaderContext } from "@context/loaderContext";
import { useSnackbar } from "@hooks/useSnackbar";

const Test = () => {
  const { setShowLoader } = useContext(LoaderContext);
  const snackbar = useSnackbar();
  // setShowLoader(true);
  return (
    <>
      <h1>test</h1>
      <button
        onClick={() => {
          snackbar({ message: "sucesso", type: "success" });
        }}
      >
        click
      </button>
    </>
  );
};

export default Test;
