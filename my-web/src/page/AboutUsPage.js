import React from 'react';
import Navbar from "../component/Navbar";
import {Container, Typography} from "@mui/material";
import PackageSection from "../section/PackageSection";
import Footer from "../component/Footer";
import {useSelector} from "react-redux";

function AboutUsPage(props) {
    const images = useSelector((state) => state.image.aboutUsImages);
    return (
        <div>
            <Navbar />
            <Container>
                <Typography
                    variant={"h2"}
                >
                    Who Are We?
                </Typography>
                <img src={images[0]} alt={"image1"} style={{"height": "500px", "width": "auto"}} />
                <Typography>lorem ipsum dolor sit amet consectetur adipiscing elit maecenas facilisi lacinia ornare luctus fringilla donec maximus enim quis orci eros cras pretium et sapien nostra tellus eleifend nisl diam fames habitasse id risus ut mollis dignissim malesuada netus hac dis consequat varius cubilia morbi vulputate bibendum gravida erat in felis eget ad venenatis pharetra feugiat sollicitudin tempor habitant tincidunt inceptos posuere libero est per class aenean nibh vivamus penatibus arcu dui platea finibus nec iaculis leo litora interdum quisque sociosqu turpis semper blandit commodo proin potenti neque vel metus euismod aptent at porttitor sagittis sodales viverra parturient convallis eu tortor torquent condimentum porta imperdiet urna elementum etiam himenaeos suspendisse laoreet facilisis aliquam auctor ac rutrum duis non augue mattis quam rhoncus dictumst natoque curabitur magnis pulvinar efficitur lacus conubia nascetur tempus faucibus nulla scelerisque nisi tristique fusce mi aliquet molestie suscipit phasellus ullamcorper sem massa ultrices ligula velit congue ridiculus montes odio praesent nam a vitae curae mauris placerat integer fermentum senectus lectus accumsan vehicula magna sed pellentesque taciti ex hendrerit dapibus egestas lobortis nunc nullam purus ultricies finibus suspendisse magna tellus nisi velit massa orci fringilla dictumst praesent non ornare fusce maecenas conubia natoque semper maximus odio duis senectus</Typography>
                <img src={images[1]} alt={"image2"} style={{"height": "500px", "width": "auto"}} />
                <Typography>lorem ipsum dolor sit amet consectetur adipiscing elit maecenas facilisi lacinia ornare luctus fringilla donec maximus enim quis orci eros cras pretium et sapien nostra tellus eleifend nisl diam fames habitasse id risus ut mollis dignissim malesuada netus hac dis consequat varius cubilia morbi vulputate bibendum gravida erat in felis eget ad venenatis pharetra feugiat sollicitudin tempor habitant tincidunt inceptos posuere libero est per class aenean nibh vivamus penatibus arcu dui platea finibus nec iaculis leo litora interdum quisque sociosqu turpis semper blandit commodo proin potenti neque vel metus euismod aptent at porttitor sagittis sodales viverra parturient convallis eu tortor torquent condimentum porta imperdiet urna elementum etiam himenaeos suspendisse laoreet facilisis aliquam auctor ac rutrum duis non augue mattis quam rhoncus dictumst natoque curabitur magnis pulvinar efficitur lacus conubia nascetur tempus faucibus nulla scelerisque nisi tristique fusce mi aliquet molestie suscipit phasellus ullamcorper sem massa ultrices ligula velit congue ridiculus montes odio praesent nam a vitae curae mauris placerat integer fermentum senectus lectus accumsan vehicula magna sed pellentesque taciti ex hendrerit dapibus egestas lobortis nunc nullam purus ultricies finibus suspendisse magna tellus nisi velit massa orci fringilla dictumst praesent non ornare fusce maecenas conubia natoque semper maximus odio duis senectus</Typography>
            </Container>
            <Footer />
        </div>
    );
}

export default AboutUsPage;