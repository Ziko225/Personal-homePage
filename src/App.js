import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import Footer from "./features/Footer";
import GitHubApi from "./features/GitHub";
import Header from "./features/Header";
import { selectTheme } from "./features/Header/ThemeToggleButton/themeSlice";
import Skillset from "./features/Skillset";
import { GlobalStyle } from "./GlobalStyle";
import { Main } from "./styled";
import { themeLight, themeDark } from "./theme";

function App() {
  const isDarkTheme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
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
