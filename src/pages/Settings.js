import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Banner } from "./Banner";
import { useDispatch, useSelector } from 'react-redux';
import { changeActive } from '../stores/features/activeMenuSlice';
import { changeMinute, changeSecond } from '../stores/features/timerSlice';
import { useState } from 'react';

export const Settings = () => {
    const dispatch = useDispatch();
    dispatch(changeActive('settings'));
    
    const timerValue = useSelector( (state) => state.timer);

    const [menit, setMenit] = useState(timerValue.menit);
    const [detik, setDetik] = useState(timerValue.detik);
    const [open, setOpen] = useState(false);

    const handleSimpan = () => {
        dispatch(changeMinute(menit));
        dispatch(changeSecond(detik));

        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
    };

    function padLeadingZeros(num, size) {
        var s = num+"";
        while (s.length < size) s = "0" + s;
        return s;
    }

    return (
        <>
            <Banner />

            <Container>
                <Box className='settings-box' border={3} borderRadius={5} boxShadow={20} marginTop={10} textAlign={'center'}>
                    <h1>SETTINGS</h1>

                    <Box m={2} pt={3}>
                    <TextField id="txtm" label="Menit" type="number" InputLabelProps={{shrink: true,}} 
                        variant="standard" value={menit} onChange={(e) => setMenit(e.target.value)} />
                    </Box>
                    
                    <Box m={2} pt={3}>
                    <TextField id="txts" label="Detik" type="number" InputLabelProps={{shrink: true,}}
                        variant="standard" value={detik} onChange={(e) => setDetik(e.target.value)} />
                    </Box>

                    <Box m={2} pt={3}>
                    <Button variant="contained" onClick={handleSimpan}>Simpan</Button>
                    </Box>
                    
                </Box>
            </Container>

            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Pengaturan timer menjadi {padLeadingZeros(menit, 2)}:{padLeadingZeros(detik, 2)} sudah tersimpan!
                </Alert>
            </Snackbar>
        </>
    );
}