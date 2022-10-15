import React, {useState} from 'react';
import {Container} from "@mui/material";
import Header from "../component/Header";
import ServiceSection from "../section/ServiceSection";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

function HomePage(props) {
    return (
        <div>
            <Navbar />
            <Container>
                <Header />
                <ServiceSection />
            </Container>
            <Footer />
        </div>
    );
}

export default HomePage;