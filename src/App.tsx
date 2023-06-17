import React, { useEffect, useState } from "react";
import styles from "./App.module.scss";
import Header from "./Components/Header";
import { Theme } from "./Context/ThemeContext/Context";
import ThemeProvider from "./Context/ThemeContext/Provider";
import Router from "./Pages/Router";

const App = () => {
  const [theme, setTheme] = useState(Theme.Light);

  const onChangeTheme = () => {
    setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light);
  };
  return (
    <ThemeProvider theme={theme} onChangeTheme={onChangeTheme}>
      <Router></Router>
    </ThemeProvider>
  );
};

export default App;
