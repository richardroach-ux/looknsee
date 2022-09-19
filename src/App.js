import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    // Landing Page
    <Container fluid>
      <Row className='header-spacer'/>
      <Row>
        <Col xs={{offset: 1}}>
        <h1>Coming soon... 👀</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={{span: 8, offset: 2}}>
        <br></br>
          <p>Kia Ora!</p>
          <p>My name is Richard, I'm a Communication and Web Designer based in Takapuna, in beautiful Tāmaki Makaurau, New Zealand.
          <br></br><br></br>Look&See is my design portfolio showcasing projects I've found rewarding, and the work behind the work.
          <br></br>A deep dive into my process as a designer and all the tangents and explorations that come before the finished outcomes.</p>
          <p>I believe in design driven by detail; by care, craft and collaboration.</p>
          {/* <p>Graduating from Auckland University of Technology with a Bachelor of Communication Design in 2018, I recently returned to study and am completing a Diploma of Web and User Experience Design at Yoobee Colleges, and a Diploma of Web Development at Whitecliffe.</p> */}
          <p>I am available for freelance work while I look for a at a creative agency. <br></br>#openforwork</p>
          <br></br>
        </Col>
      </Row>
      <Col xs={{offset: 1}}>
      <h1>Get in touch! 📣</h1>
      </Col>
      <Col xs={12} sm={{span: 8, offset: 2}}>
        <br></br>
        <p>+64226472489</p>
        <p>hello@lookandsee.design</p>
        <br></br>
        <a><p>resume</p></a>
        <a><p>instagram</p></a>
        <a><p>behance</p></a>
      </Col>
      <Row>
      </Row>
    </Container>
  );
}

export default App;
