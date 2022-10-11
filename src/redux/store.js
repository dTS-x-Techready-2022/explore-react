import { configureStore } from "@reduxjs/toolkit"
// import auth from './auth'
import rootReducer from "./rootReducer"

const store = configureStore({
    reducer : rootReducer,
    // reducer : {
    //     auth : auth
    // },
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware({
          serializableCheck: false
        })
    }
})

export { store }