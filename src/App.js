import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import Footer from "./common/Footer";
import Header from "./common/Header";
import Main from "./common/Main";
import Section from "./common/Section";
import GitHubApi from "./features/gitHubPortfolio";
import { GlobalStyle } from "./GlobalStyle";
import { themeLight, themeDark } from "./theme";

function App() {
  const darkTheme = useSelector((state) => state.theme.value);

  return (
    <ThemeProvider theme={darkTheme ? themeDark : themeLight}>
      <GlobalStyle />
      <Main>
        <Header />
        <Section />
        <GitHubApi />
        <Footer />
      </Main>
    </ThemeProvider>
  );
}

export default App;
