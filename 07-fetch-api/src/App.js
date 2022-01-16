import { StyleApp, StyleAppContent } from "./App.style";
import RequestTest from "./components/RequestTest";
import MovieContainer from "./containers/MovieContainer";

const App = () => {
  console.log(process.env);

  return (
    <StyleApp>
      <StyleAppContent>
        <RequestTest />
        <MovieContainer />
      </StyleAppContent>
    </StyleApp>
  );
};

export default App;
