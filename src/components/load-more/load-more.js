import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { filterBreedsAction } from '../../shared/actions/cat.action'
import { LOAD_MORE } from '../../shared/constants/terms.constant'

const LoadMore = () => {
    const dispatch = useDispatch()
    const { filteredBreeds, noMore, limit, page, selectedBreed } = useSelector(state => state.cats)
    const showButton = filteredBreeds?.length && !noMore
    const getMore = () => {
        dispatch(filterBreedsAction({ limit, page: page + 1, breed: selectedBreed }))
    }
    return showButton ? (
        <Button variant="info" onClick={getMore}>{LOAD_MORE}</Button>
    ) : ''
}

export default LoadMore