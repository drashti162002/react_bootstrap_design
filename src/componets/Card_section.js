import "../css/Card_section.css";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-free'
import {library} from '@fortawesome/fontawesome-svg-core'
import {far} from '@fortawesome/free-regular-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'
library.add(far,fas,fab);


function Card_section() {
    return(
        <>
        <div className="all_section_color">
        <Container className="all_info_section_card">
            <div className="first_row">

           
        <Row>                                   
            <Col  md={6} lg={3}>       
                <Card className="all_card" data-aos="zoom-in" data-aos-duration="2000">
                    <Card.Body>
                        <FontAwesomeIcon icon="fa-solid fa-gear" className="setting_icon"/>
                        <Card.Title className="card_name">Advisory</Card.Title>
                    </Card.Body>
                </Card>
                {/* <Card>
                    <Card.Body>
                        <FontAwesomeIcon icon="fa-solid fa-gear" />
                        <Card.Title>Card Title</Card.Title>
                    </Card.Body>
                </Card> */}
            </Col>
            <Col md={6} lg={3}>
                <Card className="all_card" data-aos="zoom-in" data-aos-duration="2000">
                    <Card.Body>
                        <FontAwesomeIcon icon="fa-solid fa-gear" className="setting_icon"/>
                        <Card.Title className="card_name">Development</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={6} lg={3}>
                <Card className="all_card" data-aos="zoom-in" data-aos-duration="2000">
                    <Card.Body>
                        <FontAwesomeIcon icon="fa-solid fa-gear" className="setting_icon"/>
                        <Card.Title className="card_name">Planning</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={6} lg={3}>
                <Card className="all_card" data-aos="zoom-in" data-aos-duration="2000"> 
                    <Card.Body>
                        <FontAwesomeIcon icon="fa-solid fa-gear" className="setting_icon"/>
                        <Card.Title className="card_name">Strategy</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
    
         

            {/* <Col>
            <Card>
                    <Card.Body>
                        <FontAwesomeIcon icon="fa-solid fa-gear" />
                        <Card.Title>Card Title</Card.Title>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Body>
                        <FontAwesomeIcon icon="fa-solid fa-gear" />
                        <Card.Title>Card Title</Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <FontAwesomeIcon icon="fa-solid fa-gear" />
                        <Card.Title>Card Title</Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <FontAwesomeIcon icon="fa-solid fa-gear" />
                        <Card.Title>Card Title</Card.Title>
                    </Card.Body>
                </Card>
            </Col> */}
        </Row>
       </div>

        <Row>
            <Col className="line_perentclass">
               <p className="line_blue"></p>
            </Col>
        </Row>
        <Row>
            <Col>
              <div>
                <h4>what we do</h4>
                <h2>We have the knowledge and experience</h2>
                <p className="card_bottam_info">We offer support, visual & design strategies to our customers.. Click to select<br></br> the text box. Click again or double click to start editing the text. Excepteur<br></br> sint occaecat cupidatat non proident.</p>
              </div>
            </Col>
        </Row>
        </Container>
        </div>


     
        </>
     
     
    )
    
}
export default Card_section;