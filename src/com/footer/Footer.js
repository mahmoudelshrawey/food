import React ,{ Fragment }  from 'react'
import './Footer.css';
import Container from 'react-bootstrap/Container';
//import { fa } from '@fortawesome/fontawesome-svg-core'
import {faFacebookF,faTwitter,faYoutube,faDribbble,faLinkedin,faInstagram} from '@fortawesome/free-brands-svg-icons'

//<FontAwesomeIcon icon={faCheck} />
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function searsh() {
   return (
<Fragment>
    <footer >
        <Container>
            <ul className='asas'>
               <li><a href='#'>Register</a></li>
               <li><a href='#'>Forum</a></li>
               <li><a href='#'>Affiliate</a></li>
               <li><a href='#'>FAQ</a></li>
            </ul>
            <ul className='q1'>
               <li><a><FontAwesomeIcon icon={faFacebookF} /> </a></li>
               <li><a><FontAwesomeIcon icon={faTwitter} /> </a></li>
               <li><a><FontAwesomeIcon icon={faYoutube} /> </a></li>
               <li><a><FontAwesomeIcon icon={faDribbble} /> </a></li>
               <li><a><FontAwesomeIcon icon={faLinkedin} /> </a></li>
               <li><a><FontAwesomeIcon icon={faInstagram} /> </a></li>
            </ul>
            <span>© 2021. Foodera. All rights reserved.</span>
        </Container>
    </footer>
</Fragment>
)
}