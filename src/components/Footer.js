import { Container, Row, Col } from "react-bootstrap";
// import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.svg";
import navIcon3 from "../assets/img/discord.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="d-flex flex-between align-items-center w-100">
          <Col xs={12} sm={4}>
            <h4 className="logo">Rim Yahyaoui </h4>

          </Col>
          
          <Col xs={12} sm={4} >

            <p>Copyright © 2024< span  style={{color:"#d63384"}} className=" fs-5 fst-italic mx-auto">Yahyaoui RIM</span></p>
          </Col>
          <Col xs={12} sm={4} >
            <div className="social-icon d-flex flex-end">
              <a href="https://www.linkedin.com/in/yahyaoui-rim-342733270/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/yahyaouirim"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://discord.com/yahyaouirim."><img src={navIcon3} alt="Icon" /></a>

            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
