import React from 'react';
import Cronometer from '../components/Cronometer';
import style from './App.module.scss';
import Form from '../components/Form';
import List from '../components/List';

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
      <Cronometer />
    </div>
  );
}

export default App;
