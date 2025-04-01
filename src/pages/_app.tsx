import type { AppProps } from "next/app";
import styled from "styled-components";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <MainWrapper>
      <Component {...pageProps} />
    </MainWrapper>
  );
};

export const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  overflow-x: auto;
  overflow-y: hidden;

  font-family: "Roboto", sans-serif;

  margin: 80px 0 0 0;

  background-color: #0000001f;

  @media (min-width: 900px) {
    width: 100%;
    overflow-x: hidden;
  }
`;

export default App;
