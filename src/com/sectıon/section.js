import React ,{ Fragment }  from 'react'
import './section.css';
import Container from 'react-bootstrap/Container';
import  Image  from './2.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import { faCheck } from '@fortawesome/fontawesome-svg-core'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
//<FontAwesomeIcon icon={faCheck} />
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function header() {
   return (
<Fragment>
    <section className='jfnj' >
        <Container>
            <Row>
                <Col sm={5} className='ere'>
                    <h2>
                        
                    We make everything by hand with the best possible ingredients.
                    </h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Etiam et purus a odio finibus bibendum in sit amet leo. 
                    Mauris feugiat erat tellus.Far far away, behind the word mountains,
                    far from the countries Vokalia and Consonantia, there live the blind texts.
                    </p>
                    <ul>
                        <li><FontAwesomeIcon icon={faCheck} />  Etiam sed dolor ac diam volutpat.</li>
                        <li><FontAwesomeIcon icon={faCheck} />  Erat volutpat aliquet imperdiet.</li>
                        <li><FontAwesomeIcon icon={faCheck} />  purus a odio finibus bibendum.</li>
                    </ul>
                    <a href='#mkfk' src="#djnjd" className='y'>Learn More</a>
                </Col>
            <Col sm={7} className='oioo'>

                <div className='img'>
                        <img src={Image}/>
                </div>
            </Col>
            </Row>
        </Container>
    </section>
</Fragment>
)
}