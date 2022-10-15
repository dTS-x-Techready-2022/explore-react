import React from 'react';
import Carousel from "react-material-ui-carousel";
import {Paper} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { addNewGallery } from "../store/Features/gallerySlice";

function Gallery(props) {
    const galleries = useSelector((state) => state.gallery)
    return (
        <Carousel>
            {galleries.map((item, index) => {
                return (
                    <Paper>
                        <img
                            src={item.image}
                            alt={item.image}
                            style={{
                                "height": "650px"
                            }}
                        />
                    </Paper>
                )
            })}
        </Carousel>
    );
}

export default Gallery;