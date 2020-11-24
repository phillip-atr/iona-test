import React, { Fragment, lazy, Suspense } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Preloader from '../components/preloader';
import Title from '../components/title';

const CatCards = lazy(() => import('../components/cat-cards'))
const LoadMore = lazy(() => import('../components/load-more'))
const CatDropdown = lazy(() => import('../components/cat-dropdown'))

const App = () => {
    return (
        <Fragment>
            <div className="logo">Recat App</div>
            <Suspense fallback={<Preloader />}>
                <Row>
                    <Col className="breed-dropdown">
                        <CatDropdown />
                    </Col>
                    <Col align="right">
                        <Title />
                    </Col>
                </Row>
                <Row className="breed-cards">
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

export default App