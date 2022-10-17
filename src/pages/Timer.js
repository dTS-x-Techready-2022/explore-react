import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import iauction from 'iauction';
import dateFormat from "dateformat";

export const Timer = () => {
    const timerValue = useSelector( (state) => state.timer);

    const [menit, setMenit] = useState(timerValue.menit);
    const [detik, setDetik] = useState(timerValue.detik);

    function padLeadingZeros(num, size) {
        var s = num+"";
        while (s.length < size) s = "0" + s;
        return s;
    }

    const handleStart = () => {
        let mulai_date = new Date();
        let selesai_date = new Date(mulai_date.valueOf());

        selesai_date.setSeconds(selesai_date.getSeconds() + parseInt(detik));
        selesai_date.setMinutes(selesai_date.getMinutes() + parseInt(menit));

        let mulai_str = dateFormat(mulai_date, "yyyy/mm/dd HH:MM:ss");
        let selesai_str = dateFormat(selesai_date, "yyyy/mm/dd HH:MM:ss");
        let lama = parseInt(menit);

        iauction({
            countdownInMin: lama,
            startDate: mulai_str,
            endDate: selesai_str,
            callback: (time) => {
                let time_m = time.time.substring(0, 2);
                let time_s = time.time.substring(3, 5);

                setMenit(time_m);
                setDetik(time_s);
                //console.log(time);
            },
            // time ~ { start: [bool], time: [string], reps: [integer] }
          });
    };

    return (
        <>
            <Box m={2} pt={3}>
            <Typography variant="h1" gutterBottom> {padLeadingZeros(menit, 2)}:{padLeadingZeros(detik, 2)} </Typography>
            </Box>

            <Box m={2}>
            <Button variant="contained" onClick={handleStart}>Start</Button>
            </Box>
        </>
    )

}