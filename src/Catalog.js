import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './App.css';
import Row from 'react-bootstrap/Row'

const Catalog = () => {
    return (
        <>
            <Col md="4">
                <Row>
                    <Col className="" md="4">
                        <div className="test-box"></div>
                    </Col>
                    <Col md="8">
                        <p>Name: Tony Eder</p>
                        <p>School: Purdue</p>
                        <p>Location: Indiana</p>
                        <Button onClick="" type="submit" value="Submit">Reset Form</Button>
                    </Col>
                </Row>
            </Col>
            <Col md="4">
                <Row>
                    <Col className="" md="4">
                        <div className="test-box"></div>
                    </Col>
                    <Col md="8">
                        <p>Name: Tony Eder</p>
                        <p>School: Purdue</p>
                        <p>Location: Indiana</p>
                        <Button onClick="" type="submit" value="Submit">Reset Form</Button>
                    </Col>
                </Row>
            </Col>
            <Col md="4">
                <Row>
                    <Col className="" md="4">
                        <div className="test-box"></div>
                    </Col>
                    <Col md="8">
                        <p>Name: Tony Eder</p>
                        <p>School: Purdue</p>
                        <p>Location: Indiana</p>
                        <Button onClick="" type="submit" value="Submit">Reset Form</Button>
                    </Col>
                </Row>
            </Col>
        </>
    )
}

export default Catalog