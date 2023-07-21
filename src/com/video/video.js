import React ,{ Fragment }  from 'react'
import './video.css';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
export default function header() {
   return (
<Fragment>
    <section class="ewsxaqw">
        <Container>
            <h2>
                When a man's stomach is full it makes no<br/>
                difference whether he is rich or poor.
            </h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio<br/>
                finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
            </p>
            <a><FontAwesomeIcon icon={faPlay} /> 
                Watch Our Story
            </a>
  
        </Container>
    </section>
</Fragment>
)
}