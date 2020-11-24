import React from 'react';
import { Button, Card } from 'react-bootstrap';
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom';
import { VIEW_DETAILS } from '../../shared/constants/terms.constant';

const CatCard = ({ breed }) => {
    const history = useHistory()

    const goTo = (breed) => {
        history.push(`/breed/detail/${breed.id}`)
    }

    return (
        <Card>
            <Card.Img variant="top" style={{ height: '200px', backgroundImage: `url(${breed.url})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
            <Card.Body>
                <Button variant="primary" className="btn-block" onClick={() => goTo(breed)}>{VIEW_DETAILS}</Button>
            </Card.Body>
        </Card>
    )
}

CatCard.propTypes = {
    breed: PropTypes.object.isRequired
}

export default CatCard