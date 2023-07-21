import React ,{ Fragment }  from 'react'
import './slid.css';
import Container from 'react-bootstrap/Container';
import img from "./1.jpg"
import img2 from "./2.jpg"
export default function Slid() {
    let y =(e)=>{

     // document.querySelector(`.o${e}`).classList.contains("o1")
      //console.log( document.querySelector(`.o${e}`).classList.remove("o1"));
      if( document.querySelector(`.y${e}`).classList.contains("aq") === true){
      }else{
        //document.querySelectorAll(".slid-div").map((t)=>t.classList.remove("aq"))
        let uu = document.querySelectorAll(".slid-span span")
        for(let i = 0;uu.length>i;i++){
            if (uu[i].classList.contains("aq")) {
                uu[i].classList.remove("aq") 
            }
        }
        document.querySelector(`.y${e}`).classList.add("aq")
      }
      if( document.querySelector(`.o${e}`).classList.contains("activ") === true){

      }else{
      //document.querySelectorAll(".slid-div").map((t)=>t.classList.remove("aq"))
      let uu = document.querySelectorAll(".slid-div")
      for(let i = 0;uu.length>i;i++){
          if (uu[i].classList.contains("activ")) {
              uu[i].classList.remove("activ") 
              uu[i].classList.add("non")  
              setTimeout(() => {
                uu[i].classList.remove("non") 
              }, 400);
          }
         }
          document.querySelector(`.o${e}`).classList.add("activ")

      }
   
      //document.querySelector(`.y${e}`)
    }
  return (
  <Fragment>
    <section className='slid12q2'>
        <Container>
            <h2>Testimonials</h2>
            <div className='slid'>
                <div className='selid'>
                    <div className='slid-div o1'>
                        <div><img src={img}/></div>
                        <p>"Far far away, behind the word mountains, far from the countries <br/>Vokalia and Consonantia, there live the blind texts. Separated they<br/> live."</p>
                        <h6>Simab Dave - Web Designer</h6>
                    </div>
                    <div className='slid-div o2 activ'>
                        <div><img src={img2}/></div>
                        <p>"Far far away, behind the word mountains, far from the countries <br/>Vokalia and Consonantia, there live the blind texts. Separated they <br/>live far from the countries Vokalia."</p>
                        <h6>Johnthan Doe - UX Designer</h6>
                    </div>
                    <div className='slid-div o3'>
                        <div><img src={img}/></div>
                        <p>"Far far away, behind the word mountains, far from the countries <br/>Vokalia and Consonantia, there live the blind texts. "</p>
                        <h6>Maccy Doe - Front End</h6>
                    </div>
                </div>
                <div className='slid-span'>
                    <span className='y1' onClick={()=>y(1)}></span>
                    <span className='y2 aq' onClick={()=>y(2)}></span>
                    <span className='y3' onClick={()=>y(3)}></span>
                </div>
            </div>
        
        </Container>
    </section>
  </Fragment>
  )
}