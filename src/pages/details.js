/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { first } from 'lodash'
import { useHistory } from 'react-router-dom';
import Preloader from '../components/preloader';
import { getBreedDetailAction } from '../shared/actions/cat.action';
import { BACK } from '../shared/constants/terms.constant';

const Details = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [hasBreed, setHasBreed] = useState(false)
    const [details, setDetails] = useState()
    const { selectedBreed } = useSelector(state => state.cats)

    useEffect(() => {
        dispatch(getBreedDetailAction(history.location.pathname))
    }, [])

    useEffect(() => {
        if (selectedBreed && Object.keys(selectedBreed)?.length) {
            setDetails(first(selectedBreed.breeds))
            setHasBreed(true)
        }
    }, [selectedBreed])

    const goBack = () => {
        history.push(`/?breed_id=${details.id}`)
    }

    return hasBreed && details ?
        <Fragment>
            <Button size="small" variant="link" onClick={goBack}>
                {BACK}
            </Button>
            <Card>
                <Card.Img variant="top" src={selectedBreed.url} />
                <Card.Body>
                    <h2>{details.name}</h2>
                    <h3>Origin: {details.origin}</h3>
                    <h4>{details.temperament}</h4>
                    <Card.Text>
                        {details.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Fragment>
        : <Preloader />
}

export default Details