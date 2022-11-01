import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import Header from "./common/Header";
import Main from "./common/Main";
import Footer from "./features/Footer";
import GitHubApi from "./features/GitHub";
import Skillset from "./features/Skillset";
import { GlobalStyle } from "./GlobalStyle";
import { themeLight, themeDark } from "./theme";

function App() {
  const darkTheme = useSelector((state) => state.theme.value);

  return (
    <ThemeProvider theme={darkTheme ? themeDark : themeLight}>
      <GlobalStyle />
      <Main>
        <Header />
        <Skillset />
        <GitHubApi />
        <Footer />
      </Main>
    </ThemeProvider>
  );
};

export default App;
