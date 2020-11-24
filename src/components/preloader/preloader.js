import React from 'react'
import { Spinner } from 'react-bootstrap'
import { LOADING } from '../../shared/constants/terms.constant'

const Preloader = () => (
    <div align="center">
        <Spinner animation="border" role="status">
            <span className="sr-only">{LOADING}</span>
        </Spinner>
    </div>
)

export default Preloader