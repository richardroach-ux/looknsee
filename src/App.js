import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
function App() {
  return (
    // Landing Page
    <Container fluid>
      <Row className='h-100 no-gutters' xs={1} md={2}>
        <Col className='column-one' xl={5}>
        <h1>Coming soon... 👀</h1>
          <p>Kia Ora!</p>
          <p>My name is Richard, I'm a Communication and Web Designer based in beautiful Tāmaki Makaurau, New Zealand.
          <br></br><br></br>Look&See is my design portfolio showcasing projects I've found rewarding, and the work behind the work.
          <br></br>It's a deep dive into my process as a designer and all the tangents and explorations that come before the finished outcomes.</p>
          <p>I believe in design driven by detail; by care, craft and collaboration.</p>
          {/* <p>After graduating from AUT with a Bachelor of Communication Design in 2018 I returned to study both at Whitecliffe and Yoobee, this time focusing on digital design.</p>
          <p>As a result I am comfortable across both print and digital and my work reflects the value this range of study has given me.</p> */}
          <p>I'm available for freelance work while I look for a role at a creative agency. Wink wink.<br></br><br></br>#openforwork</p>
          <h2>Project in mind? Get in touch! 📣</h2>
                  <p>+64226472489</p>
                  <p>hello@lookandsee.design</p>
                  <br></br>
                <div className='contact-container'>
                  <a><p>resume</p></a>
                  <a><p>instagram</p></a>
                  <a><p>behance</p></a>
                </div>
        </Col>
        <Col xl={7}>
          <div className='gallery-container'>
            <div id='redBox'>
              Display
            </div>
          </div>
          
        </Col>
      </Row>
    </Container>
  );
}

export default App;
