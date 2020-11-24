/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, lazy, Suspense, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { first } from 'lodash'
import { withRouter } from 'react-router-dom';
import Preloader from '../components/preloader';
import Title from '../components/title';
import { filterBreedsAction, selectBreedAction } from '../shared/actions/cat.action';
import { SITE_NAME } from '../shared/constants/terms.constant';

const CatCards = lazy(() => import('../components/cat-cards'))
const LoadMore = lazy(() => import('../components/load-more'))
const CatDropdown = lazy(() => import('../components/cat-dropdown'))

const App = ({ match }) => {
    const dispatch = useDispatch()
    const { limit, page, filteredBreeds } = useSelector(state => state.cats)

    useEffect(() => {
        if (match?.params?.id) {
            dispatch(filterBreedsAction({ limit, page, breed: { id: match.params.id } }))
        }
    }, [match])

    useEffect(() => {
        if (filteredBreeds?.length) {
            dispatch(selectBreedAction(first(first(filteredBreeds).breeds)))
        }
    }, [filteredBreeds])

    return (
        <Fragment>
            <div className="logo">{SITE_NAME}</div>
            <Suspense fallback={<Preloader />}>
                <Row>
                    <Col className="breed-dropdown">
                        <CatDropdown />
                    </Col>
                    <Col align="right">
                        <Title />
                    </Col>
                </Row>
                <Row xs={1} sm={2} md={4} lg={5} className="breed-cards">
                    <CatCards />
                </Row>
                <Row>
                    <Col align="center">
                        <LoadMore />
                    </Col>
                </Row>
            </Suspense>
        </Fragment>
    )
}

export default withRouter(App)