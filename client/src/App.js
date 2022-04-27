import './App.css';
import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';
import {Home} from './components/home/Home.jsx';
import React from 'react';
import { Landing } from './components/landing/Landing';
import NewProduct from './components/newproduct/NewProduct';
import Details from './components/details/Details'
import EditProduct from './components/editproduct/EditProduct';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component= {withRouter(Landing)}/>
          <Route path = '/home' component= {withRouter(Home)}/>
          <Route path = '/new' component= {withRouter(NewProduct)}/>
          <Route path = '/:id' component= {withRouter(Details)}/>
          <Route exact path = '/edit' component= {withRouter(EditProduct)}/>
         </Switch>
      </div>
    </Router>
  );
}

export default App;