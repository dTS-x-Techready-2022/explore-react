import React, {useState} from 'react';
import Service from "../component/Service";
import {Typography} from "@mui/material";
import {useSelector} from "react-redux";

function ServiceSection(props) {
    const serviceData = useSelector((state) => state.image.services)
    return (
        <div>
            <Typography variant={"h2"}>Kenapa Memilih Kami?</Typography>
            {serviceData.map(value => <Service image={value.image} name={value.name} description={value.description} reverse={value.reverse} title={value.title}/>)}
        </div>
    );
}

export default ServiceSection;