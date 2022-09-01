import Container from "@components/Container";
import Header from "@components/Header";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => (
  <Container>
    <Header />
    <Outlet />
  </Container>
);

export default DefaultLayout;
