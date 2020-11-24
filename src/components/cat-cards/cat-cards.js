import React from 'react';
import CatCard from './cat-card';
import { useSelector } from 'react-redux';
import { Col } from 'react-bootstrap';
import Preloader from '../preloader';

const CatCards = () => {
    const { filteredBreeds, status, page } = useSelector(state => state.cats)
    return status.loading && status.type === 'filterBreeds' && page < 2 ? (
        <Preloader />
    ) : filteredBreeds.map((breed) => (
        <Col key={breed.id}>
            <CatCard breed={breed} />
        </Col>
    ))
}


export default CatCards