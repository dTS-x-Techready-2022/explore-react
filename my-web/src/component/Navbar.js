import React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import {useSelector} from "react-redux";

function Navbar(props) {
    const navigate = useNavigate();
    const logo = useSelector((state) => state.image.logo);

    return (
        <Container
            sx={{
                display: "flex",
                backgroundColor: "aqua",
                paddingTop: "5px",
                paddingBottom: "5px"
            }}
            maxWidth={false}
        >
            <Avatar
                src={logo}
                alt={"logo"}
                sx={{
                    width: "75px",
                    height: "75px"
                }}
                onClick={() => navigate("/")}
            />
            <Container
                sx={{
                    display: "flex",
                    margin: 0,
                    justifyItems: "flex-start",
                }}
                maxWidth={false}
            >
                <Button
                    onClick={() => navigate('/packages')}
                >
                    Our Packages
                </Button>
                <Button
                    onClick={() => navigate('/contact-us')}
                >
                    Contact Us
                </Button>
                <Button
                    onClick={() => navigate('/about-us')}
                >
                    About Us
                </Button>
                <Button
                    onClick={() => navigate('/galleries')}
                >
                    Galleries
                </Button>
            </Container>
        </Container>
    );
}

export default Navbar;