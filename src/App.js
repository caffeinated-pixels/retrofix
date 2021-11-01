import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, Browse, Signin, Signup, Profile } from './pages'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/browse'>
          <Browse />
        </Route>
        <Route path='/signin'>
          <Signin />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
