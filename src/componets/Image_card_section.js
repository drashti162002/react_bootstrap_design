import '../css/Image_card_section.css'
import { Col, Container , Row } from "react-bootstrap";
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import first_image from '../images/pexels-photo-9136322.jpeg';
import second_image from '../images/pexels-photo-3727464.jpeg'
import third_image from '../images/pexels-photo-2182970.jpeg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Button from 'react-bootstrap/Button';
import '@fortawesome/fontawesome-free'
import {library} from '@fortawesome/fontawesome-svg-core'
import {far} from '@fortawesome/free-regular-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'
library.add(far,fas,fab);
function Image_card_section() {
    return(
        <div className='image_section_full'>

        <Container>
            <Row>
                <Col md ={6} lg={4} className='all_card_column'>
             
                    <Card className='all_card'> 
                        <Card.Img variant="top" src={first_image} className='first_image'/>

                        <Card.Title>Mary Brown</Card.Title>
                        <h6 className='name_leader'>creative leader</h6>
                        <Card.Text>
                        Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum
                        </Card.Text>
                       
                        <div>
                        <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                        <FontAwesomeIcon icon="fa-brands fa-twitter" className='mx-4'/>
                        <FontAwesomeIcon icon="fa-brands fa-instagram" />
                        </div>
                    </Card>
                </Col>
                <Col md ={6} lg={4} className='all_card_column'>
             
                <Card className='all_card'>
                        <Card.Img variant="top" src={second_image} className='first_image'/>
                     
                        <Card.Title>Ann Richmond</Card.Title>
                        <h6 className='name_leader'>creative leader</h6>
                        <Card.Text>
                        Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum
                        </Card.Text>
                        <div>
                        <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                        <FontAwesomeIcon icon="fa-brands fa-twitter" className='mx-4'/>
                        <FontAwesomeIcon icon="fa-brands fa-instagram" />
                        </div>
                    </Card>
                </Col>
                <Col md ={6} lg={4} className='all_card_column'>
             
                <Card className='all_card'>
                        <Card.Img variant="top" src={third_image} className='first_image'/>
                      
                        <Card.Title>Bob Greenfield</Card.Title>
                        <h6 className='name_leader'>programming guru</h6>
                        <Card.Text>
                        Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum
                        </Card.Text>
                        <div className='icon_social'>
                        <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                        <FontAwesomeIcon icon="fa-brands fa-twitter" className='mx-4'/>
                        <FontAwesomeIcon icon="fa-brands fa-instagram" />
                        </div>
                     
                       
                    </Card>
                </Col>

                 
                 
               
            </Row>
        </Container>
        </div>
    )
    
}
export default Image_card_section;