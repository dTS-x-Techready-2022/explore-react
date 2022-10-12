import { Navigate, useRoutes } from 'react-router-dom'
import LayoutKosong from '../layouts/LayoutKosong'
import Login from '../views/auth/Login'

// import LayoutKosong from '../layouts/LayoutKosong'
// import LayoutApp from '../layouts/LayoutApp'
// import Login from '../views/auth/Login'
import { getRoutes}  from './SemuaRoutes'



const Routerq = () => {

    
    const allRoutes = getRoutes()

    const getUserLogin = () => {
        //bukan best practice, hanya untuk percobaan
        return localStorage.getItem('userData') //if exist then true
    }

    const getHomeRoute = () => {
        const userLogin = getUserLogin()
        if (userLogin) {
            return '/dashboard'
        } else {
            return '/login'
        }

    }
    
    const routes = useRoutes([
        {
            path : '/',
            index : true,
            element : <Navigate replace to = {getHomeRoute()} />
        },
        {
            path : '/login',
            element : <LayoutKosong/>,
            children : [
                {
                    path : '/login',
                    element : <Login/>
                }
            ]

        }, 
        {
            path : '/tidakditemukan',
            element : <h1>tidakditemukan</h1>
        },
        {
            path : '*',
            element : <h1>Default *</h1>
        },
        ...allRoutes
    ]
    
    )

    return routes
}

export default Routerq