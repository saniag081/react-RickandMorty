import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './assets/styles/App.css';
import Home from './containers/Home';
import Detail from './containers/Detail';
// import CaruselCharacter from './components/CaruselCharacter';
// import Header from './components/Header';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={Detail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
