import React from "react";
import {ThemeProvider} from "./context/theme.jsx";
import TodoApp from "./components/todo/index.jsx";

const App = () => (
    <ThemeProvider>
      <TodoApp />
    </ThemeProvider>
);

export default App;