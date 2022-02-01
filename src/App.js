import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
  Home,
  Browse,
  Signin,
  Registration,
  RegForm,
  PlanForm,
  Signup,
  Profile,
  GetTheApp,
  SearchPage,
} from './pages'
import * as ROUTES from './constants/routes'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path={ROUTES.BROWSE} element={<Browse />} />
        <Route path={ROUTES.SIGN_IN} element={<Signin />} />
        <Route path={ROUTES.SIGN_UP} element={<Signup />} />
        <Route path={ROUTES.REGISTRATION} element={<Registration />} />
        <Route path={ROUTES.REG_FORM} element={<RegForm />} />
        <Route path={ROUTES.PLAN_FORM} element={<PlanForm />} />
        <Route path={ROUTES.PROFILE} element={<Profile />} />
        <Route path={ROUTES.GET_THE_APP} element={<GetTheApp />} />
        <Route path={ROUTES.SEARCH} element={<SearchPage />} />
      </Routes>
    </Router>
  )
}

export default App
