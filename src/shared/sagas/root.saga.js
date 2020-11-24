import { all, fork } from 'redux-saga/effects'

import catSaga from './cat.saga'

export default function* root() {
    yield all([
        fork(catSaga)
    ])
}