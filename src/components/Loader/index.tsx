/* c8 ignore start */
import { useContext } from "react";
import styled from "styled-components";
import Spinner from "@components/Spinner";
import { LoaderContext } from "@context/loaderContext";
import zIndex from "@utils/zIndex";

const Loader: React.FC = () => {
  const { showLoader } = useContext(LoaderContext);

  if (showLoader) {
    return (
      <LoaderWrapper>
        <Spinner width="50px" height="50px" />
      </LoaderWrapper>
    );
  }
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <></>;
};

const LoaderWrapper = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: ${zIndex.highest + zIndex.highest};
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Loader;
