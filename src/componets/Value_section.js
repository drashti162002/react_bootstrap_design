import '../css/Value_section.css'
import { Container , Col , Row } from "react-bootstrap";
import CountUp , { useCountUp }from 'react-countup';
import value_section_image from '../images/pexels-photo-3609781.jpeg'
function Value_section(){
    useCountUp({
        ref: 'counter',
        end: 1234567,
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
      });
    return(
        <div className='number_section_full'>

        <Container>
            <Row>
                <Col md={6} lg={6}>
                  
                       <img src={value_section_image} alt="" className="value_section_image"></img>
                  
                    <div className='section_name'>
                        <h3>We collaborate with brands and agencies to create memorable experiences.</h3>
                    </div>
                </Col>
                <Col md={6} lg={6} className='column_in_row'>
                <Row>
                <Col md={12} lg={6} className='number_col'>
                    <div style={{padding:'0px 20px'}}>
                         <CountUp start={0} end={50} delay={0} enableScrollSpy>
                                {({ countUpRef }) => (
                                    <div>
                                    <span ref={countUpRef}  className='number_value'/><span className='number_value'>%</span>
                                    </div>
                                )}
                         </CountUp>
                    {/* <CountUp end={100}  duration={5}> */}
                        {/* <h1 className='number_value'></h1> */}
                    {/* </CountUp> */}
                        <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                    </div>

                </Col>
                <Col md={12} lg={6} className='number_col'>
                    <div style={{padding:'0px 20px'}}>
                    <CountUp start={0} end={17} delay={0} enableScrollSpy>
                                {({ countUpRef }) => (
                                    <div>
                                    <span ref={countUpRef}  className='number_value'/><span className='number_value'>%</span>
                                    </div>
                                )}
                         </CountUp>
                        <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                    </div>

                </Col>
                </Row>
                <Row>

                <Col md={12} lg={6} className='number_col'>
                    <div style={{padding:'0px 20px'}}>
                    <CountUp start={0} end={20} delay={0} enableScrollSpy>
                                {({ countUpRef }) => (
                                    <div>
                                    <span ref={countUpRef}  className='number_value'/><span className='number_value'>%</span>
                                    </div>
                                )}
                         </CountUp>
                        <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                    </div>
                  
                </Col>
                <Col md={12} lg={6} className='number_col1'>
                  
                    <div style={{padding:'0px 20px'}}>
                    <CountUp start={0} end={13} delay={0} enableScrollSpy>
                                {({ countUpRef }) => (
                                    <div>
                                    <span ref={countUpRef}  className='number_value'/><span className='number_value'>%</span>
                                    </div>
                                )}
                         </CountUp>
                        <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                    </div>

                </Col>
                </Row>
              
            </Col>
            </Row>
        </Container>
    </div>
    )
}
export default Value_section;