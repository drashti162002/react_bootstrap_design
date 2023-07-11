import { Col, Container , Row } from "react-bootstrap";
import '../css/Information_section.css';
import Button from 'react-bootstrap/Button';

function Information_section() {
    return(
        <div className="all_about_info">

        <Container>
            <Row>
                <Col md={6} lg={6}>
                    <h3>about us</h3>
                    <p className="infosection_info_1">We run all kinds of IT services that vow your success</p>
                    <p className="infosection_info_2">We help local nonprofits access the funding, tools, training, and support they need to become more effective.</p>
                    <Button variant="primary" className="button_info" >
                       LEARN MORE
                    </Button>
                </Col>
                <Col md={6} lg={6}>
                    <div>
                    <h4 className="main_name">Development</h4>
                    <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                    </div>
                    <div>
                    <h4 className="main_name">Web marketing</h4>
                    <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                    </div>
                    <div>
                    <h4 className="main_name">Data analytic</h4>
                    <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                    </div>

                </Col>
            </Row>
        </Container>
        </div>
    )
}
export default Information_section;