import { Col, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Banner from "../components/Banner";
import bannerPic from "../img/banner.jpg";

const BannerLayout = () => {
  return (
    <main className="container">
      <Row>
        <Col>
          <Banner src={bannerPic} text="К весне готовы!" />

          <Outlet />
        </Col>
      </Row>
    </main>
  );
};

export default BannerLayout;
