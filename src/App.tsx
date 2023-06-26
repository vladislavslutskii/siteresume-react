import React, { useState } from "react";
import { Provider } from "react-redux";

import { Theme } from "./Context/ThemeContext/Context";
import styles from "./app.module.scss";
import ThemeProvider from "./Context/ThemeContext/Provider";
import Router from "./Pages/Router";
import store from "./Redux/store";

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

const AppWithStore = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppWithStore;
