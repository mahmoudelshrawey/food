import React ,{ Fragment }  from 'react'
import './Food.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Data from "./Data"
export default function Food() {
    let gv = Data.map((i)=>{
      return ( <Col sm={4} className='emjdnewn' key={i.id}>
            <div><img src={i.img}/></div>
            <div className='qqq12j'>
                <h5>{i.p}</h5>
                <h6>{i.time}</h6>
                <h3>{i.price} <span>{i.price_before}</span></h3>
            </div>
            <a href='#mkfk' src="#djnjd" className='y'>Learn More</a>
        </Col>)
    })
    console.log(gv);
    
  return (
  <Fragment>
    <section className='enjenj'>
      <Container>
        <div className='nwjnejn'>
            <h2>Explore Our Foods</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet<br/>
             leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and <br/>
             Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
            </p>
        </div>
          <Row className='q12qw3q'>
            {
                gv
            }
          </Row>
        </Container>
    </section>
  </Fragment>
  )
}