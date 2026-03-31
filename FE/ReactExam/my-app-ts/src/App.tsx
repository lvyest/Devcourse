import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassCom from './ClassCom';
import FuncCom from './FuncCom';
import MyWeather from './MyWether';

function App() {
  let name = "변수 사용법";

  return (
    <div>
      <ClassCom></ClassCom>
      <FuncCom></FuncCom>
      <MyWeather weather='맑음'>일기예보</MyWeather>
    </div>
  );
}

export default App;
