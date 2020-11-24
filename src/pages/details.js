/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { first } from 'lodash'
import { useHistory, withRouter } from 'react-router-dom';
import Preloader from '../components/preloader';
import { getBreedDetailAction } from '../shared/actions/cat.action';
import { BACK, ORIGIN } from '../shared/constants/terms.constant';

const Details = ({ match }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [hasBreed, setHasBreed] = useState(false)
    const [details, setDetails] = useState()
    const { selectedBreed } = useSelector(state => state.cats)

    useEffect(() => {
        if (match?.params?.id) {
            dispatch(getBreedDetailAction(match.params.id))
        }
    }, [])

    useEffect(() => {
        if (selectedBreed && Object.keys(selectedBreed)?.length) {
            setDetails(first(selectedBreed.breeds))
            setHasBreed(true)
        }
    }, [selectedBreed])

    const goBack = () => {
        history.push(`/breed/${details.id}`)
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
                    <h3>{ORIGIN}: {details.origin}</h3>
                    <h4>{details.temperament}</h4>
                    <Card.Text>
                        {details.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Fragment>
        : <Preloader />
}

export default withRouter(Details)