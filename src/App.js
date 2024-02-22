import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          ID Card Generator
        </p>
      </header>
      <Container>
        <Row>
          <Col md="6">
            <h1 className="text-center p-5">Input Form</h1>
            <form>
              <p>Enter Name <span><input type='text'></input></span></p>
              <p>Enter College Name: <span><input type='text'></input></span></p>
              <p>Enter Location: <span><input type='text'></input></span></p>
              <Button as="input" type="submit" value="Submit" />{' '}
            </form>
          </Col>
          <Col md="6">
            <h1 className="text-center p-5">Generated Card</h1>
            <div className="bg-box">
              <Container>
                <Row>
                  <Col md="4">
                    <img src="" alt="Placeholder Image"></img>
                  </Col>
                  <Col md="8">
                    <p>Name: Tony Eder</p>
                    <p>School: Flatrion School for Software Engineering</p>
                    <p>Location: Remote / Online</p>
                  </Col>
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
