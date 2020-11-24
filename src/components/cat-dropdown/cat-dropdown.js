/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Dropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { filterBreedsAction, getBreedsAction } from '../../shared/actions/cat.action';
import { SELECT_BREED } from '../../shared/constants/terms.constant';

const CatDropdown = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBreedsAction())
    }, [])

    const breedList = useSelector(state => state.cats.breedList)
    const selectBreed = (breed) => {
        dispatch(filterBreedsAction({ id: breed.id }))
    }

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {SELECT_BREED}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {breedList?.map(
                    (breed) =>
                        <Dropdown.Item onClick={() => selectBreed(breed)} key={breed.id}>{breed.name}</Dropdown.Item>
                )}
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default CatDropdown