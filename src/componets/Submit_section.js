import '../css/Submit_section.css'
import { Col, Container, Row } from "react-bootstrap";
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button';
import round_image from '../images/download (1).jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-free'
import {library} from '@fortawesome/fontawesome-svg-core'
import {far} from '@fortawesome/free-regular-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'
library.add(far,fas,fab);
function Submit_section(){
    return(
        <div className='submit_section'>

        <Container>
            <Row>
                <Col md={12} lg={12}>
                     <h2 className='input_title'>Get money management and loan tips here!</h2>
                </Col>
                <Col md={7} lg={7}>
                    <div className="input_type">
                        <FormControl
                            placeholder="Enter Your Name"
                            />
                          
                        <Button variant="primary" className='submit_button'>Submit</Button>
                          
                        
                    </div>
                    <div>
                        <p className='text-muted'>Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day real less till dear read. Considered use dispatched melancholy sympathize discretion led. Oh feel if up to till like. He an thing rapid these after going drawn or. Timed she his law the spoil round defer. In surprise concerns informed betrayed he learning is ye. Ignorant formerly so ye blessing. He as spoke avoid given downs money on we. Of properly carriage shutters ye as wandered up repeated moreover.</p>
                    </div>
                    <div className='image_name'>
                        <img src={round_image} alt=''></img>
                        <p className='name_image'>Nina Scavo</p>
                    </div>
                </Col>
                <Col md={5} lg={5} className='social_icon'>
                   <div className='all_icon'> 
                        <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                        <FontAwesomeIcon icon="fa-brands fa-twitter" />
                        <FontAwesomeIcon icon="fa-brands fa-instagram" />

                   </div>
                </Col>
            </Row>
        </Container>
        </div>
    )
}
export default Submit_section;