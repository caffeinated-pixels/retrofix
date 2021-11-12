import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, Browse, Signin, Signup, Profile } from './pages'
import * as ROUTES from './constants/routes'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path={ROUTES.BROWSE}>
          <Browse />
        </Route>
        <Route path={ROUTES.SIGN_IN}>
          <Signin />
        </Route>
        <Route path={ROUTES.SIGN_UP}>
          <Signup />
        </Route>
        <Route path={ROUTES.REGISTRATION}>
          <Signup />
        </Route>
        <Route path={ROUTES.REG_FORM}>
          <Signup />
        </Route>
        <Route path={ROUTES.PLAN_FORM}>
          <Signup />
        </Route>
        <Route path={ROUTES.PROFILE}>
          <Profile />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
