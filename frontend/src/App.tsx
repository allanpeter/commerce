
import Home from './components/Home'
import Plans from './components/Plans';
import {  Route, Switch, Router } from 'react-router-dom';
import UserRegister from './components/UserRegister';

function App() {
 
    return(
      <Router>
      <Switch>
          <Route path='/' Component={Home} />
          <Route path='/plans' Component={Plans} />
          <Route path='/register' Component={UserRegister} />
      </Switch>
      </Router>
    )
}

export default App
