import React from "react";
import { GestureDetector } from "react-native-gesture-handler";
import ExamplePanGesture from "./components/ExamplePanGesture";
import ExampleScrollView from "./components/ExampleScrollView";

const App = () => {
  // return <ExampleScrollView />;
  return (
    <GestureDetector>
      <ExamplePanGesture />
    </GestureDetector>
  );
};

export default App;
