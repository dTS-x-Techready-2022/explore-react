import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import { Helmet } from "react-helmet";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About | Techready</title>
      </Helmet>
      <Container>
        <h2>Hello I'm About</h2>
        <Link to="/">Home</Link>
        <br />
        <Link to="/todolist">TodoList</Link>
      </Container>
    </>
  );
};

export default AboutPage;
