import { Suspense } from 'react'
import { Navigate } from 'react-router-dom'
import { getUserData, getHomeRouteForLoggedInUser } from '../utility/Utils'



const PublicRoute = ({ children }) => {
  // if (route) {
    const user = getUserData()

    // const restrictedRoute = route.meta && route.meta.restricted

    if (user) {
      return <Navigate to={getHomeRouteForLoggedInUser(user.role)} />
    }
  // }

  return <Suspense fallback={null}>{children}</Suspense>
}

export default PublicRoute
