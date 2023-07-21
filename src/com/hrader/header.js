import React ,{ Fragment }  from 'react'
import './header.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function header() {
  return (
  <Fragment>
    <section class="divwwww">
        <Container>
          <Row>
            <Col sm={6} className='ww'>
              <h2 className='qwwwwq'>
                Good food choices <br />are good <br />investments.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Etiam et purus a odio finibus bibendum amet leo.
              </p>
              <div className='tyty'>
                <a href='#mkfk' src="#djnjd" className='y'>Order New</a>
                <a href='#mkfk' src="#djnjd" className='n'>Learn More</a>
              </div>
            </Col>
            <Col sm={6} className='eee'></Col>
          </Row>
        </Container>
    </section>
    <section className='qaz123'>
      <Container>
          <Row>
            <Col sm={3} className='q123 col-md-3 '>
              <h2>1287+</h2>
              <h6>SAVINGS</h6>
            </Col>
            <Col sm={3} className='q123 col-md-3 '>
              <h2>5786+</h2>
              <h6>PHOTOS</h6>
            </Col>
            <Col sm={3} className='q123 col-md-3 '>
              <h2>1440+</h2>
              <h6>ROCKETS</h6>
            </Col>
            <Col sm={3}  className='q123 col-md-3  '>
              <h2>7110+</h2>
              <h6>GLOBES</h6>
            </Col>
          </Row>
        </Container>
    </section>
  </Fragment>
  )
}
