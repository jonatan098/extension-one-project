import type { AppProps } from "next/app";
import Loader from "@components/Loader";
import Footer from "@components/Footer";
import Header from "@components/Header";
import GlobalWrapper from "@components/GlobalWrapper";

import Provider from "src/state";
import GlobalStyle from "./globalStyle";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider>
      <GlobalWrapper>
        <GlobalStyle />
        <Header />
        <div id="component">
          <Component {...pageProps} />
        </div>
        <Loader />
        <Footer />
      </GlobalWrapper>
    </Provider>
  );
};

export default App;
