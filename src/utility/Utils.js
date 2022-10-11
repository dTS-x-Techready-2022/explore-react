const getUserData = () => {
    return JSON.parse(localStorage.getItem('userData'))
}

const getHomeRouteForLoggedInUser = userRole => {
    if (userRole === 'admin') return '/dashboard'
    if (userRole === 'registered') return '/toko'
    return '/login'
}
const isObjEmpty = obj => Object.keys(obj).length === 0

export {getUserData, getHomeRouteForLoggedInUser, isObjEmpty}