import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>ارتباط با من</h2>
        <p>برای شروع پروژه خود آماده اید؟ </p>
        <p>برای مشاوره رایگان همین حالا با من تماس بگیرید</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:hasankhodabakhshi@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:hasankhodabakhshi@gmail.com">email</a>
        </div>
        <div>
        <a href="tel:+9163360335"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+9163360335">(+98) 9163360335</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}