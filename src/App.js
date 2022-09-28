import { Container, Row, Col } from 'react-bootstrap';
import GalleryObject from './Components/GalleryObject.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
function App() {
  return (
    // Landing Page
    <Container fluid>
      <Row className='h-100 no-gutters' xs={1} md={2}>
        <Col className='column-one' xl={4}>
        <h1>Coming soon... 👀</h1>
          <p>Kia Ora!</p>
          <p>My name is Richard, I'm a Communication and Web Designer based in beautiful Tāmaki Makaurau, New Zealand.
          <br></br><br></br>Though still under construction, Look&See is my design portfolio showcasing projects I've found rewarding, and the work behind the work.
          <br></br>It's a deep dive into my process as a designer and all the tangents and explorations that come before the finished outcomes.</p>
          <p>I believe in design driven by detail; by care, craft and collaboration.</p>
          {/* <p>After graduating from AUT with a Bachelor of Communication Design in 2018 I returned to study both at Whitecliffe and Yoobee, this time focusing on digital design.</p>
          <p>As a result I am comfortable across both print and digital and my work reflects the value this range of study has given me.</p> */}
          <p>I'm available for freelance work while I look for a role at a creative agency. Wink wink.<br></br><br></br>#openforwork</p>
          <div className='d-none d-md-block contact-wrapper'>
          <h1>Got your eye on me? <br></br>Get in touch! 📣</h1>
            <a href="tel:64226472489" className="blanklink"><p>+64226472489</p></a>
            <a href="mailto:hello@lookandsee.design" className="blanklink"><p>hello@lookandsee.design</p></a>
            <br></br>
            <div className='contact-container'>
              <a target="_blank" noreferrer href="" className="blanklink"><p>Resume</p></a>
              <a href="https://www.instagram.com/_richardroach/" className="blanklink"><p>Instagram</p></a>
              <a href="https://www.behance.net/richard_rob20d" className="blanklink"><p>Behance</p></a>
            </div>
          </div>
        </Col>
        <Col xl={8}>
          <div id='gallery-container'>
            <GalleryObject />
          </div>
          
        </Col>
        <Col className='d-block d-md-none contact-wrapper-mobile'>
            <h1>Got your eye on me? <br></br>Get in touch! 📣</h1>
            <a href="tel:64226472489" className="blanklink"><p>+64226472489</p></a>
            <a href="mailto:hello@lookandsee.design" className="blanklink"><p>hello@lookandsee.design</p></a>
            <br></br>
            <div className='contact-container-mobile'>
              <a target="_blank" noreferrer href="" className="blanklink"><p>Resume</p></a>
              <a href="https://www.instagram.com/_richardroach/" className="blanklink"><p>Instagram</p></a>
              <a href="https://www.behance.net/richard_rob20d" className="blanklink"><p>Behance</p></a>
            </div>
        </Col>
      </Row>
    </Container>
  );
}



export default App;
