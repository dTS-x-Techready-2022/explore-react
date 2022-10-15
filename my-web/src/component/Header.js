import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import {useSelector} from "react-redux";

function Header(props) {
    const headerImages = useSelector((state) => state.image.header);
    return (
        <Carousel>
            {headerImages.map(image => {
                return (
                    <Paper>
                        <img
                            src={image}
                            alt={"image"}
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

export default Header;