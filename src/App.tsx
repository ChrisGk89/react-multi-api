import React from "react";
import styles from "./App.module.css";
import Apod from "./features/Apod";
import Weather from "./features/Weather";

function App() {
  return (
    <div className={styles.App}>
      <Apod />
      <Weather />
    </div>
  );
}

export default App;
