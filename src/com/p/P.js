import React ,{ Fragment }  from 'react'
import './P.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function header() {
   return (
<Fragment>
    <section class="q22211">
        <Container>
            <h2>Frequently Asked Questions</h2>
            <Row>
                <Col sm={6} className='w w2'>
                    <h5><span>~</span> Is Foodera Bread really baked fresh each day?</h5>
                    <p>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.
                    </p>
                </Col>
                <Col sm={6} className='w w3'>
                    <h5><span>~</span> Do you bake breads containing animal fats or products?</h5>
                    <p>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.
                    </p>
                </Col>
                <Col sm={6} className='w w1'>
                    <h5><span>~</span> Can I order your products online?</h5>
                    <p>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.
                    </p>
                </Col>
                <Col sm={6} className='w w4'>
                    <h5><span>~</span> When are you opening a shop near me?</h5>
                    <p>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.
                    </p>
                </Col>
            </Row>
        </Container>
    </section>
</Fragment>
)
}