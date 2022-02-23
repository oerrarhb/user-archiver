import './App.css';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserList from './components/UserList';
import Home from './components/Home';
import UserEdit from './components/UserEdit';

class App extends Component
{
  render()
  {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/users' exact={true} component={UserList}/>
          <Route path='/users/:id' component={UserEdit}/>
        </Switch>
      </Router>
    )
  }
}

export default App;