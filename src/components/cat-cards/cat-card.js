import React from 'react';
import { Button, Card } from 'react-bootstrap';
import PropTypes from 'prop-types'

const CatCard = ({ breed }) => {
    return (
        <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" style={{ height: '200px', backgroundImage: `url(${breed.url})`, backgroundSize: 'cover',  backgroundPosition: 'center' }} />
            <Card.Body>
                <Button variant="primary" className="btn-block">View Details</Button>
            </Card.Body>
        </Card>
    )
}

CatCard.propTypes = {
    breed: PropTypes.object.isRequired
}

export default CatCard