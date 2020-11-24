import React from 'react';
import { Button, Card } from 'react-bootstrap';
import PropTypes from 'prop-types'

const CatCard = ({ breed }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={breed.url} />
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