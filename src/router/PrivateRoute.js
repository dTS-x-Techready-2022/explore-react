import { Navigate } from 'react-router-dom'
import {  Suspense } from 'react'


const PrivateRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('userData'))

  // if (route) {
  //   let action = null
  //   let resource = null
  //   let restrictedRoute = false

    // if (route.meta) {
    //   action = route.meta.action
    //   resource = route.meta.resource
    //   restrictedRoute = route.meta.restricted
    // }
    if (!user) {
      return <Navigate to='/login' />
    }
    // if (user && restrictedRoute) {
    //   return <Navigate to='/' />
    // }
    // if (user && restrictedRoute && user.role === 'client') {
    //   return <Navigate to='/access-control' />
    // }
    // if (user && !ability.can(action || 'read', resource)) {
    //   return <Navigate to='/misc/not-authorized' replace />
    // }
  // }
    // return children
  return <Suspense fallback={null}>{children}</Suspense>
}

export default PrivateRoute
