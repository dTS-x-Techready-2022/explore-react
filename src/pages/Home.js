import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Banner } from "./Banner";
import { Timer } from "./Timer";
import { useDispatch } from "react-redux";
import { changeActive } from "../stores/features/activeMenuSlice";

export const Home = () => {
    const dispatch = useDispatch();
    dispatch(changeActive('home'));

    return (
        <>
            <Banner />

            <Container>
                <Box className='about-box' border={3} borderRadius={5} boxShadow={20} marginTop={20} textAlign={'center'}>
                    <Timer />
                </Box>
            </Container>
        </>
    );
}