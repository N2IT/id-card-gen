import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './App.css';


const Catalog = () => {
    return (
        <>
            <Col className="" md="4">
                <div className="test-box">Where is this?</div>
                <p>Name: Tony Eder</p>
                <p>School: Purdue</p>
                <p>Location: Indiana</p>
                <Button onClick="" type="submit" value="Submit">Reset Form</Button>
            </Col>

            <Col className="" md="4">
                <div className="test-box"></div>
                <p>Name: Tony Eder</p>
                <p>School: Purdue</p>
                <p>Location: Indiana</p>
                <Button onClick="" type="submit" value="Submit">Reset Form</Button>
            </Col>

            <Col className="" md="4">
                <div className="test-box"></div>
                <p>Name: Tony Eder</p>
                <p>School: Purdue</p>
                <p>Location: Indiana</p>
                <Button onClick="" type="submit" value="Submit">Reset Form</Button>
            </Col>
        </>
    )
}

export default Catalog