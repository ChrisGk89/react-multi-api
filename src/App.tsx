import React from 'react';
import styles from './App.module.css';
import Apod from './features/Apod';
import Weather from './features/Weather';
import Header from './features/Header';
import Counter from './features/Counter';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Counter />
      <Apod />
      <Weather />
    </div>
  );
}

export default App;
