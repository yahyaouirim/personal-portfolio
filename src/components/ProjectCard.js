import { Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import 'animate.css';


export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col xs={12} sm={12} md={6} lg={6} xl={4}>
      <TrackVisibility>
        {({ isVisible }) =>
          <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
            <div className="proj-imgbx">
              <img src={imgUrl} />
              <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
              </div>
            </div>
          </div>}
      </TrackVisibility>
    </Col>
  )
}
