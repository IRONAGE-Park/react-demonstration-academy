import { useState } from "react";
import ClassCheckbox from "./components/ClassCheckbox";
import FunctionCheckbox, {
  FunctionCheckboxList,
} from "./components/FunctionCheckbox";
import LifeCycleCheck from "./components/LifeCycleCheck";

import { StyleAlert, StyleApp, StyleAppContent } from "./App.style";

const App = () => {
  const [isRender, setIsRender] = useState(false);

  const onRender = () => setIsRender(!isRender);

  return (
    <StyleApp>
      <StyleAppContent>
        {/* <FunctionCheckbox />
        <ClassCheckbox /> */}
        <FunctionCheckboxList />
        {isRender && <LifeCycleCheck />}
        <StyleAlert onClick={onRender}>여기를 클릭하면?</StyleAlert>
      </StyleAppContent>
    </StyleApp>
  );
};

export default App;
