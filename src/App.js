import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import Footer from "./features/Footer";
import GitHubApi from "./features/GitHub";
import Header from "./features/Header";
import Skillset from "./features/Skillset";
import { GlobalStyle } from "./GlobalStyle";
import { Main } from "./styled";
import { themeLight, themeDark } from "./theme";

function App() {
  const theme = useSelector((state) => state.theme.value);

  return (
    <ThemeProvider theme={theme ? themeDark : themeLight}>
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
