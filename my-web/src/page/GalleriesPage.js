import React, {useState} from 'react';
import Navbar from "../component/Navbar";
import {Button, Container, TextField, Typography} from "@mui/material";
import PackageSection from "../section/PackageSection";
import Footer from "../component/Footer";
import Gallery from "../component/Gallery";
import {addNewGallery} from "../store/Features/gallerySlice";
import {useDispatch} from "react-redux";

function GalleriesPage(props) {
    const [imageLink, setImageLink] = useState('');
    const dispatch = useDispatch();

    return (
        <div>
            <Navbar />
            <Container>
                <Typography
                    variant={"h2"}
                >
                    Our Galleries
                </Typography>
                <Container>
                    <TextField
                        id={"standard-basic"}
                        label={"image link"}
                        variant={"standard"}
                        onChange={(event) => setImageLink(event.target.value)}
                    />
                    <Button onClick={() => dispatch(addNewGallery(imageLink))}>Submit</Button>
                </Container>
                <Gallery />
            </Container>
            <Footer />
        </div>
    );
}

export default GalleriesPage;