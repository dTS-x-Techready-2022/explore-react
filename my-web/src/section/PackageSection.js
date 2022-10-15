import React from 'react';
import Service from "../component/Service";
import {useSelector} from "react-redux";

function PackageSection(props) {
    const data = useSelector((state) => state.image.packages);
    return (
        <div>
            {data.map(value => <Service image={value.image} name={value.name} description={value.description} reverse={value.reverse} title={value.title}/>)}
        </div>
    );
}

export default PackageSection;