import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home} from './components/home/Home.jsx';
import React from 'react';
import { Landing } from './components/landing/Landing';
import NewProduct from './components/newproduct/NewProduct';
import Details from './components/details/Details'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component= {Landing}/>
          <Route path = '/home' component= {Home}/>
          <Route path = '/new' component= {NewProduct}/>
          <Route path = '/:id' component= {Details}/>
         </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;