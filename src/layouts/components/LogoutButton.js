import { Logout } from "@mui/icons-material"
import { Button, ListItemIcon, MenuItem } from "@mui/material"
import { Navigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { handleLogout } from "../../redux/auth"
const LogoutButton = () => {

    const dispatch = useDispatch()

   

    return (
            
        // <MenuItem onClick={() => dispatch(handleLogout())} >
        <MenuItem >
            <ListItemIcon>
                <Logout fontSize="small" />
            </ListItemIcon>
            <Button sx={{padding:'0px'}}href="/login" onClick={() => dispatch(handleLogout())} >
            Logout
            </Button>
        </MenuItem>
    )

}

export default LogoutButton