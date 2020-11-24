/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { filterBreedsAction, getBreedsAction } from '../../shared/actions/cat.action';
import { LOADING, SELECT_BREED } from '../../shared/constants/terms.constant';

const CatDropdown = () => {
    const [dropdownLabel, setDropdownLabel] = useState(SELECT_BREED)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch(getBreedsAction())
    }, [])

    const { breedList, limit, status, selectedBreed } = useSelector(state => state.cats)

    const selectBreed = (breed) => {
        dispatch(filterBreedsAction({ limit, page: 1, breed }))
        history.push(`/breed/${breed.id}`)
    }

    useEffect(() => {
        if (selectedBreed?.name) {
            setDropdownLabel(selectedBreed.name)
        }
    }, [selectedBreed])

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {status.loading && status.type === 'getBreeds' ? LOADING : dropdownLabel}
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