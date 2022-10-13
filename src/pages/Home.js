import Container from "@mui/material/Container";
import { Helmet } from "react-helmet";
import iauction from "iauction"
import { useEffect, useState } from "react";
import axios from 'axios';
import { Divider } from "@mui/material";


const HomePage = () => {

   const [countdown, setCountdown] = useState('01:00')
   const [jokes, setJokes] = useState('')

   useEffect(() => {
      //const minutesToAdd = 1;
      const date = new Date();
      const start = date.getTime();
      //const end = new Date(date.getTime() + minutesToAdd * 60000).getTime();

      iauction({
         countdownInMin: 1,
         startDate: start,
         //endDate: end,
         callback: (time) => setCountdown(time.time),
      });

      if (countdown === '01:00') {
         axios.get(`https://api.chucknorris.io/jokes/random`, {
            headers: {
               'Content-Type': 'application/json',
               "Access-Control-Allow-Origin": "*",
            }
         })
            .then(res => {
               const data = res.data;
               // console.log(data);
               setJokes(data)
            })
            .catch(error => {
               console.log(error)
            })
      }

   }, [countdown])

   return (
      <>
         <Helmet>
            <title>Home | Techready</title>
         </Helmet>

         <Container maxWidth="sm" style={{ textAlign: 'center', }}>
            <h1>Random Jokes - Fun Facts</h1>
            <i>New jokes re-generate in : {countdown} seconds</i>
            <br />
            <br />
            <Divider />
            <p>
               "{jokes.value ? jokes.value : jokes}"
            </p>
         </Container>
      </>
   );
};

export default HomePage;
