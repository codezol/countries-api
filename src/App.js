import { useState } from 'react';
import './App.css';
import Header from './Components/header'
import CountriesContainer from './Components/Countries-container';
import { useGlobalContext } from './Context';
function App() {
    const {lightTheme} = useGlobalContext()
  return (
    <div className={lightTheme ? "App light-theme" : "App"}>
      <Header/>
      <CountriesContainer />
    </div>
  );
}

export default App;
