import React from 'react'
import { useSelector } from 'react-redux'

const Title = () => {
    const { selectedBreed } = useSelector(state => state.cats)
    return (
        <React.Fragment>
            <h1>{selectedBreed.name}</h1>
        </React.Fragment>
    )
}

export default Title