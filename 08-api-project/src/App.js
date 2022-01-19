import { StyleApp, StyleAppContent } from "./App.style";
import MovieContainer from "./containers/MovieContainer";

const App = () => {
  return (
    <StyleApp>
      <StyleAppContent>
        <MovieContainer />
      </StyleAppContent>
    </StyleApp>
  );
}

export default App;
