import Footer from "./common/Footer";
import Header from "./common/Header";
import Main from "./common/Main";
import Section from "./common/Section";
import GitHubApi from "./features/gitHubPortfolio";

function App() {
  return (
    <Main>
      <Header />
      <Section />
      <GitHubApi />
      <Footer />
    </Main>
  );
}

export default App;
