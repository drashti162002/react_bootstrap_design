import  "../css/Section_1.css";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-free'
import {library} from '@fortawesome/fontawesome-svg-core'
import {far} from '@fortawesome/free-regular-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'
import { Container } from "react-bootstrap";
library.add(far,fas,fab);

function Section_1() {
    return(
        <> 
        <div>
        <Container>
        <Row className="list_row_background">
           <Col className="first_section_list" md={12} lg={12} sm={12} xl={12} xs={12} >
           <FontAwesomeIcon icon="fas fa-bars" className='list_icon'/>
           </Col>
       </Row>
        </Container>
        </div>
        
        <div className="first_section_background">
        <Container> 
       <Row className="hedding">
           <Col md={12} lg={12} sm={12} xl={12} xs={12} >
            <div className="full_hedding">
            <p className="first_hedding_name">CORPO<span className="hedding_name_blue">RATE</span></p>
            </div>
            <div>
               <p className="second_headding">We're ready to share our advice and experience</p>
            </div>
         
           </Col>
       </Row>
       </Container>     
        </div>
        </>
    )
}
export default Section_1;