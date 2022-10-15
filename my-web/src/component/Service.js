import React from 'react';
import { Container, Typography } from "@mui/material";

function Service({image, title, name, description, reverse}) {

    const style = {
        display: "flex",
        padding: "3px",
        marginBottom: "2rem",
        marginTop: "2rem",
        alignContent: "space-between",
        justifyContent: "space-between",
        flexFlow: reverse
    }

    return (
        <Container
            sx={style}
        >
            <img
                src={image}
                alt={name}
                style={{
                    "width": "500px",
                }}
            />
            <Container>
                <Typography variant={"h4"}>{title}</Typography>
                <Typography
                    variant={"body1"}
                    sx={{
                        textAlign: "justify"
                    }}
                >
                    {description}
                </Typography>
            </Container>
        </Container>
    );
}

export default Service;