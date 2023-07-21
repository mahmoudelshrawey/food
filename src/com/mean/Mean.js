import React ,{ Fragment }  from 'react'
import './Mean.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function header() {
   return (
<Fragment>
    <section class="q11122211">
        <Container>
            <Row>
                <Col sm={7} className='r'>
                    <h3>Baked fresh daily by bakers with passion.</h3>
                </Col>
                <Col sm={5} className='r op'>
                    <a href='#mkfk' src="#djnjd" className='y'>Learn More</a>
                </Col>
            </Row>
        </Container>
    </section>
</Fragment>
)
}