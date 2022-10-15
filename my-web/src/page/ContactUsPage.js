import React from 'react';
import Navbar from "../component/Navbar";
import {Container, Typography} from "@mui/material";
import PackageSection from "../section/PackageSection";
import Footer from "../component/Footer";
import {FacebookRounded, Instagram, WhatsApp} from "@mui/icons-material";

function ContactUsPage(props) {
    return (
        <div>
            <Navbar />
            <Container>
                <Typography
                    variant={"h2"}
                >
                    Contact Us
                </Typography>
                <div>
                    <Container sx={{
                        display: "flex",
                        marginBottom: "2rem"
                    }}>
                        <FacebookRounded></FacebookRounded>
                        <a href={"facebook.com/haris-cathotel"}>facebook.com/haris-cathotel</a>
                    </Container>
                    <Container sx={{
                        display: "flex",
                        marginBottom: "2rem"
                    }}>
                        <Instagram></Instagram>
                        <a href={"instagram.com/haris-cathotel"}>instagram.com/haris-cathotel</a>
                    </Container>
                    <Container sx={{
                        display: "flex",
                        marginBottom: "2rem"
                    }}>
                        <WhatsApp></WhatsApp>
                        <a href={"web.whatsapp.com/haris-cathotel"}>web.whatsapp.com/haris-cathotel</a>
                    </Container>
                </div>
            </Container>
            <Footer />
        </div>
    );
}

export default ContactUsPage;