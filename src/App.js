import React from 'react';
import logo from './logo.svg';
import './App.css';
import FonctionDeclarativeComponent from './Components/FonctionDeclarativeComponent';
import FonctionComponent from './Components/FonctionComponent';
import ClassComponent from './Components/ClassComponent';

function App() {
  return (
    <div>
      <FonctionDeclarativeComponent
        color='#0000FF'
        name='Fonction Declarative Component'
      />
      <FonctionComponent
        color='#FF0000'
        name='Fonction Component'
      />
      <ClassComponent />
    </div>
  );
}

export default App;
