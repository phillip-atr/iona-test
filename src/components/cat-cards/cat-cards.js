import React from 'react';
import CatCard from './cat-card';
import { useSelector } from 'react-redux';

const CatCards = () => {
    const filteredBreeds = useSelector(state => state.cats.filteredBreeds)
    return filteredBreeds?.map((breed) => <CatCard key={breed.id} breed={breed} />)
}


export default CatCards