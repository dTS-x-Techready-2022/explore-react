//https://reactrouter.com/en/main/components/outlet
//otomatis memasukkan children (lihat di Router/Routerq) ke dalam layout ini

import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'
import  '../assets/css/layoutkosong.css'
const LayoutKosong = () => {

    return (
        <Container maxWidth="sm">
            <div className='blank-page'>
            <div className='app-content content'>
            <div className='content-wrapper'>
                <div className='content-body'>
                    <Outlet />
                </div>
            </div>
            </div>
            </div>
        </Container>
        )
}

export default LayoutKosong