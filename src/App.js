import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './assets/styles/App.css';
import Home from './containers/Home';
import Detail from './containers/Detail';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import combineReducers from './redux/Reducers/index'

const store = configureStore({
  reducer: combineReducers
})

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:id" component={Detail} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
