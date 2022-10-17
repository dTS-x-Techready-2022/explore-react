import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Banner } from "./Banner";
import { useDispatch } from 'react-redux';
import { changeActive } from '../stores/features/activeMenuSlice';

export const About = () => {
    const dispatch = useDispatch();
    dispatch(changeActive('about'));

    return (
        <>
            <Banner />

            <Container>
                <Box className='about-box' border={3} borderRadius={5} boxShadow={20} marginTop={20} textAlign={'center'}>
                    <h1>Timer</h1>
                    <h2>Created by Willy</h2>
                    <h2>To fulfill assignment from Irwan</h2>
                </Box>
            </Container>
        </>
    );
}