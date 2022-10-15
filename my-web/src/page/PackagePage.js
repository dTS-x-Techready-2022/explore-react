import React from 'react';
import Navbar from "../component/Navbar";
import {Container, Typography} from "@mui/material";
import Header from "../component/Header";
import ServiceSection from "../section/ServiceSection";
import Footer from "../component/Footer";
import PackageSection from "../section/PackageSection";

function PackagePage(props) {
    return (
        <div>
            <Navbar />
            <Container>
                <Typography
                    variant={"h2"}
                >
                    Our Packages
                </Typography>
                <PackageSection />
            </Container>
            <Footer />
        </div>
    );
}

export default PackagePage;