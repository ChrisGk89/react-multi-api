import React from "react";
import styles from "./App.module.css";
import Apod from "./features/Apod";
import Weather from "./features/Weather";
import Header from "./features/Header";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Apod />
      <Weather />
    </div>
  );
}

export default App;
