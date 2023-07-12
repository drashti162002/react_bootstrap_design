import '../css/Image_info_section.css';
import { Col, Container , Row } from "react-bootstrap";
import face_image from '../images/download.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-free'
import {library} from '@fortawesome/fontawesome-svg-core'
import {far} from '@fortawesome/free-regular-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'
library.add(far,fas,fab);


function Image_info_section() {
    return(
        <div className='image_section'>
        <Container>
            <Row>
                <Col md={6} lg={6}>
                <img src={face_image} alt='img' className="image_face"></img>
                </Col>
                <Col md={6} lg={6}>
                    <div data-aos="fade-left" data-aos-duration="1500">

                <div>

                <FontAwesomeIcon icon="fa-solid fa-quote-right" className='qutoe_icon'/>
                </div>
                    <h1 className='icon_info'>We believe that people can be truly happy on the outside only after reaching happiness within.</h1>
                  <h4>Victoria Perry</h4>
                  <h5 className='ceo_name'>CEO and Co-Founder</h5>
            
                    </div>

                </Col>
            </Row>
        </Container>
        </div>
    )
}
export default Image_info_section;