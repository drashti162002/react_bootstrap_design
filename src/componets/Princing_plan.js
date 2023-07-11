import '../css/Princing_plan.css'
import { Container , Row , Col} from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-free'
import {library} from '@fortawesome/fontawesome-svg-core'
import {far} from '@fortawesome/free-regular-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'
library.add(far,fas,fab);

function Princing_plan(){
    return(
        <div className="card_part">

        <Container>
            <Row>
                <Col md={12} lg={12}>
                    <h5>Pricing Plan</h5>
                    <h1 className='small_name'>Small Pricing Plan For</h1>
                    <h1 className='small_name1'>Your Creative Business</h1>

                </Col>
                <Col md={6} lg={4} >
                <Card className='card_shawdow'>
                    <Card.Body>
                    <FontAwesomeIcon icon="fa-regular fa-lightbulb" className="card_icon1"/>
                        <Card.Title className='dolar_number'>$0</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Per Month</Card.Subtitle>
                        <hr></hr>
                        <Card.Text>
                       <p> 15 Users </p> 
                       <p>  Feature 2 </p>
                       <p>  Feature 3</p> 
                       <p>  Feature 4 </p> 
                        </Card.Text>
                        <Button variant="primary" disabled className='get_plan_button'>GET PLAN</Button>
                    </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4}>
                <Card className='card_shawdow'>
                    <Card.Body>
                    <FontAwesomeIcon icon="fa-solid fa-mobile-screen"  className="card_icon2"/>
                        <Card.Title className='dolar_number'>$29</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Per Month</Card.Subtitle>
                        <hr></hr>
                        <Card.Text>
                        <p> 15 Users </p> 
                       <p>  Feature 2 </p>
                       <p>  Feature 3</p> 
                       <p>  Feature 4 </p> 
                        </Card.Text>
                        <Button variant="primary" className='get_plan_button'>GET PLAN</Button>
                    </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4}>
                <Card className='card_shawdow'>
                    <Card.Body>
                    <FontAwesomeIcon icon="fa-solid fa-gear"  className="card_icon3"/>
                        <Card.Title className='dolar_number'>$59</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Per Month</Card.Subtitle>
                        <hr></hr>
                        <Card.Text>
                        <p> 15 Users </p> 
                       <p>  Feature 2 </p>
                       <p>  Feature 3</p> 
                       <p>  Feature 4 </p> 
                        </Card.Text>
                        <Button variant="primary" disabled className='get_plan_button'>GET PLAN</Button>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </div>
    )
}
export default Princing_plan;