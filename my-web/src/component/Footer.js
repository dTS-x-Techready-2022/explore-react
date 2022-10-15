import React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import { Typography, List, ListItem, ListItemText, ListItemAvatar, Grid } from "@mui/material";
import {useSelector} from "react-redux";

function Footer(props) {
    const logo = useSelector((state) => state.image.logo);
    return (
        <Container
            maxWidth={false}
            sx={{
                display: "flex",
                backgroundColor: "aqua",
            }}
        >
            <Avatar
                src={logo}
                alt={"logo"}
                sx={{
                    width: "200px",
                    height: "200px",
                    marginTop: "1rem"
                }}
            />
            <Container>
                <Typography variant={"h6"} align={"left"}>
                    Haris Cathotel
                </Typography>
                <List
                    dense={false}
                >
                    <ListItem>
                        <ListItemText primary={"About Us"}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={"Our Location"}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={"Meet With Haris"}/>
                    </ListItem>
                </List>
            </Container>
            <Container>
                <Typography variant={"h6"} align={"left"}>
                    Our Packages
                </Typography>
                <List
                    dense={false}
                >
                    <ListItem>
                        <ListItemText primary={"Daily Package"}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={"Weekly Package"}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={"Monthly Package"}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={"More Packages"}/>
                    </ListItem>
                </List>
            </Container>
            <Container>
                <Typography variant={"h6"} align={"left"}>
                    Contact Us
                </Typography>
                <List
                    dense={false}
                >
                    <ListItem>
                        <ListItemText primary={"Meet at WA"}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={"Meet at Instagram"}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={"Meet by phone"}/>
                    </ListItem>
                </List>
            </Container>
        </Container>
    );
}

export default Footer;