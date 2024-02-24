import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const CardGenerated = ({ imageUrl, name, school, location, resetForm }) => {

    return (
        <>
            <Col className="p-3" md="4">
                <img src={imageUrl} alt="Card Avatar" style={{maxWidth:"165px"}}></img>
            </Col>
            <Col className="inner-bg p-3" md="8">
                <p>Name: {name}</p>
                <p>School: {school}</p>
                <p>Location: {location}</p>
            </Col>
            <Button onClick={resetForm} type="submit" value="Submit">Reset Form</Button>

        </>
    )
}

export default CardGenerated