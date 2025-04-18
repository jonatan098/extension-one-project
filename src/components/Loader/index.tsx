import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { LoaderContext } from "@context/loaderContext";
import zIndex from "@utils/zIndex";

const Loader: React.FC = () => {
  const { showLoader } = useContext(LoaderContext);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeStart = () => setLoading(true);
    const handleRouteChangeComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleRouteChangeStart);

    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    router.events.on("routeChangeError", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
      router.events.off("routeChangeError", handleRouteChangeComplete);
    };
  }, [router.events]);

  if (showLoader || loading) {
    return (
      <LoaderWrapper>
        <Spinner />
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
  z-index: ${zIndex.highest};
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = styled.div`
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-left-color: #70c347;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
