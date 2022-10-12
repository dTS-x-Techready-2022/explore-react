import { Grid } from "@mui/material"
import iauction from "iauction"
import { useEffect, useState } from "react"
import LogoutButton from "../../layouts/components/LogoutButton"




const Dashboardq = () => {
    // const init = Math.floor(Date.now() / 1000) // in second
    const [minute, setMinute] = useState(1)
    const [awal, setAwal] = useState(new Date())
    const [akhir, setAkhir] = useState(new Date(awal.getTime() + minute * 60000))
    const [showButton, setShowButton] = useState(false)
    
    // const dispatch = useDispatch()

    // const onClickLogoutButton = () => {
    //     dispatch(handleLogout())

    //     return <Navigate to ="/login" replace/>
    // }
   
    useEffect(() => {
       
        iauction({
          countdownInMin: 1,
          startDate: awal,
          endDate: akhir,
          callback: (time) => {
            console.log(time)
            setShowButton(!time.start)
          },
         
          
        });
      }, []) 
    return (
        <>  
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <h1>Dashboard Aktifitas</h1>
                </Grid>
            </Grid>

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <h6>
                        Tombol Logout Akan muncul dalam {minute} menit lagi
                    </h6>
                    {showButton ? (<LogoutButton/>) : null}
                </Grid>
            </Grid>
        </>
    )
}

export default Dashboardq