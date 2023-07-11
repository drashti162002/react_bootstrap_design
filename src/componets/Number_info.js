import "../css/Number_info.css";
import { Col, Container, Row } from "react-bootstrap";
import image_set from '../images/pexels-photo-3184450.jpeg';



function Number_info() {
    return(
    <Container>
            <Row className="all_number_info">
                <Col md={6} lg={6}>
                    <div className="info_section">
                    <div className="number_all">
                    <h1 className="number_1">01</h1>
                    </div>
                    <div className="pera_all">
                    <p className="pera_info_1">
                    Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day real less till dear read. Considered use dispatched melancholy sympathize discretion led. Oh feel if up to till like. He an thing rapid these after going drawn or. </p>

                    </div>

                    </div>
                   
                </Col>
                <Col md={6} lg={6}>
                   <div className="info_section"> 
                    <div className="number_all">
                   <h1 className="number_1">02</h1>

                    </div>
                    <div className="pera_all">

                    <p className="pera_info_1">
                    Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day real less till dear read. Considered use dispatched melancholy sympathize discretion led. Oh feel if up to till like. He an thing rapid these after going drawn or. </p>
                    </div>
                    </div>
                   
                </Col>
            </Row>

            <Row className="image_row">
                <Col md={6} lg={6}>
                   <img src={image_set}  className='image_1' alt=''></img>
                </Col>
                <Col md={6} lg={6} className="col_center">
                    <div className="image_info">

                    <p className="image_data">We collaborate with brands and agencies to create memorable experiences.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default Number_info;