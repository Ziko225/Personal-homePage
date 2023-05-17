import { ThemeProvider } from "styled-components";
import Footer from "./features/Footer";
import GitHubApi from "./features/GitHub";
import Header from "./features/Header";
import Skillset from "./features/Skillset";
import { GlobalStyle } from "./GlobalStyle";
import { Main } from "./styled";
import { themeLight, themeDark } from "./theme";
import useToggleTheme from "./useToggleTheme";

function App() {
  const { isDarkTheme, toggleTheme } = useToggleTheme();
  
  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <GlobalStyle />
      <Main>
        <Header isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
        <Skillset />
        <GitHubApi />
        <Footer />
      </Main>
    </ThemeProvider>
  );
};

export default App;
