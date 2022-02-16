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
  Watch,
  PageNotFound,
  ManageProfile,
  Children,
} from './pages'
import { WindowWidthContextProvider } from './context/WindowWidthContext'
import { RequireAuth, RedirectUser } from './components'
import * as ROUTES from './constants/routes'

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes no-redirect*/}
        <Route path={ROUTES.CHILDREN} element={<Children />} />
        <Route path='/*' element={<PageNotFound />} />

        {/* Public routes redirect when signed in*/}
        <Route element={<RedirectUser />}>
          <Route path='/' element={<Home />} />
          <Route path={ROUTES.SIGN_IN} element={<Signin />} />
          <Route path={ROUTES.SIGN_UP}>
            <Route index element={<Signup />}></Route>
            <Route path={ROUTES.REGISTRATION} element={<Registration />} />
            <Route path={ROUTES.REG_FORM} element={<RegForm />} />
            <Route path={ROUTES.PLAN_FORM} element={<PlanForm />} />
          </Route>
        </Route>

        {/* Protected routes*/}
        <Route element={<RequireAuth />}>
          <Route
            path={ROUTES.BROWSE}
            element={
              <WindowWidthContextProvider>
                <Browse />
              </WindowWidthContextProvider>
            }
          />
          <Route path={ROUTES.PROFILE} element={<Profile />} />
          <Route path={ROUTES.MANAGE_PROFILE} element={<ManageProfile />} />
          <Route path={`${ROUTES.GET_THE_APP}/:id`} element={<GetTheApp />} />
          <Route path={ROUTES.SEARCH} element={<SearchPage />} />
          <Route path={`${ROUTES.WATCH}/:id`} element={<Watch />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
