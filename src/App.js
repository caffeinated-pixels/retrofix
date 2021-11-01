import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <h1>I am the Home Page</h1>
        </Route>
        <Route path='/browse'>
          <h1>I am the Browse Page</h1>
        </Route>
        <Route path='/signin'>
          <h1>I am the Signin Page</h1>
        </Route>
        <Route path='/signup'>
          <h1>I am the Signup Page</h1>
        </Route>
        <Route path='/profile'>
          <h1>I am the Profile Page</h1>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
