import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Details = () => {
    const breed = useSelector(state => state.cats.selectedBreed)
    return <React.Fragment>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={breed.url} />
            <Card.Body>
                <h3>{breed.breeds.name}</h3>
                <h4>Origin: {breed.breeds.origin}</h4>
                <h5>{breed.breeds.temperament}</h5>
                <Card.Text>
                    {breed.breeds.description}
                </Card.Text>
                <Button variant="primary" className="btn-block">View Details</Button>
            </Card.Body>
        </Card>
    </React.Fragment>
}

export default Details