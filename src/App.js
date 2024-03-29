import { useState } from 'react'
// import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardGenerated from './CardGenerated';
import Loading from './Loading'
import Row from 'react-bootstrap/Row'
import Catalog from './Catalog'



function App() {
  const [name, setName] = useState("")
  const [school, setSchool] = useState("")
  const [location, setLocation] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [isVisible, setAsVisible] = useState(false)
  // let cardName = setName ? name : null

  const handleSubmit = (e) => {
    e.preventDefault()
    setAsVisible(!isVisible)
    console.log(name)
  }

  const resetForm = () => {
    setSchool("")
    setLocation("")
    setImageUrl("")
    setName("")
    setAsVisible(false)
  }

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
          <Col className="framed" md="6">
            <h1 className="text-center p-5">Input Form</h1>
            <form id='form' onSubmit={handleSubmit}>
              <p>Avatar Image: <span><input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} title="avatar" id="avatar" type="text" required></input></span></p>
              <p>Enter Name: <span><input value={name} onChange={(e) => setName(e.target.value)} title='name' id='name' type='text' required></input></span></p>
              <p>Enter College Name: <span><input value={school} onChange={(e) => setSchool(e.target.value)} title='school' id='school' type='text' required></input></span></p>
              <p>Enter Location: <span><input value={location} onChange={(e) => setLocation(e.target.value)} title='location' id='location' type='text' required></input></span></p>
              <Button as="input" type="submit" value="Submit" />{' '}
            </form>
          </Col>
          <Col className="framed" md="6">
            <h1 className="text-center p-5">Generated Card</h1>
            <div className="bg-box p-3">
              <Container className="styled">
                {isVisible ? <CardGenerated name={name} school={school} location={location} imageUrl={imageUrl} resetForm={resetForm} /> : <Loading />}
              </Container>
            </div>
          </Col>
        </Row>
        <Row>
          <Catalog />
        </Row>
      </Container>
    </div>
  );
}

export default App;
