import React, { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
// import { PrivateRoute } from './PrivateRoutes'
// import { LoadingPage } from '../StyledComponents/StyledSpinner'
import { Spinner } from './Components/Spinner'
const Home = lazy(() => import('./Pages/Home'))
// const Login = lazy(() => import('../Containers/LoginContainer'))
// const Signup = lazy(() => import('../Containers/SignupContainer'))
// const About = lazy(() => import('../Pages/About'))
const Shop = lazy(() => import('./Pages/Shop'))
// const Profile = lazy(() => import('../Pages/Profile'))

export const Routes = () => {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/shop' component={Shop} exact />
        </Switch>
      </Suspense>
    </>
  )
}
