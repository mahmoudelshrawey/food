import React ,{ Fragment }  from 'react'
import './swss.css';
import Container from 'react-bootstrap/Container';
import  Image  from './1.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function header() {
   return (
<Fragment>
    <section class="jfnj">
        <Container>
            <Row>
                <Col sm={7} className='jg'>
                    <div className='div'>
                        <img src={Image}/>
                    </div>
                </Col>
            <Col sm={5} className='k'>
                <h2>
                    We pride ourselves on making real food from the best ingredients.
                </h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus
                </p>
                <a href='#mkfk' src="#djnjd" className='y'>Learn More</a>
            </Col>
            </Row>
        </Container>
    </section>
</Fragment>
)
}