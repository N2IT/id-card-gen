import Col from 'react-bootstrap/Col';

const CardGenerated = ({ imageUrl, name, school, location }) => {

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
        </>
    )
}

export default CardGenerated