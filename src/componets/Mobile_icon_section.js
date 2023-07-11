import '../css/Mobile_icon_section.css';
import { Col, Container , Row } from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Button from 'react-bootstrap/Button';
import '@fortawesome/fontawesome-free'
import {library} from '@fortawesome/fontawesome-svg-core'
import {far} from '@fortawesome/free-regular-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'
library.add(far,fas,fab);


function Mobile_icon_section() {
    return(
        <div className='mobile_section'>
        <Container>
            <Row className='row_color'>
    
                 <Col md={12} lg={1}>
                    <div className='icon_div'>
                   
                       <FontAwesomeIcon icon="fa-solid fa-mobile-button" className='mobile_icon'/>

                    </div>

                 </Col>
                 <Col md={12} lg={7} className='pl-4 face_name_mobile'>

                 <h2 >Looking For Visa Applications Just Call Us!</h2>
                 <h5>Call us today 111-232-22-33 or email us: info@example.com</h5>
                </Col>
                <Col md={12} lg={4}>
                <Button variant="primary" className='book_button'>
                      BOOK A CONSULTATION
                </Button>

                </Col>
               
            </Row>
            <Row>
                <Col md={12} lg={12}>
                   <h1 className='meet_team'>
                 Meet The Team

                   </h1>
                </Col>
            </Row>
        </Container>
        </div>
    )
}
export default Mobile_icon_section;