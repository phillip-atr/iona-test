import { all, put, call, takeLatest } from 'redux-saga/effects'
import { filterBreedsAction, filterBreedsFailedAction, filterBreedsSuccessAction, getBreedDetailAction, getBreedDetailFailedAction, getBreedDetailSuccessAction, getBreedsAction, getBreedsFailedAction, getBreedsSuccessAction } from '../actions/cat.action'
import catService from '../services/cat.service'

function* getBreeds(action) {
    try {
        const { data } = yield call(catService.getList, action.payload)
        yield put(getBreedsSuccessAction(data))
    } catch (error) {
        yield put(getBreedsFailedAction(error))
    }
}

function* filterBreeds(action) {
    try {
        const { data } = yield call(catService.filterList, action.payload)
        yield put(filterBreedsSuccessAction(data))
    } catch (error) {
        yield put(filterBreedsFailedAction(error))
    }
}

function* getBreedDetail(action) {
    try {
        const { data } = yield call(catService.getDetails, action.payload)
        yield put(getBreedDetailSuccessAction(data))
    } catch (error) {
        yield put(getBreedDetailFailedAction(error))
    }
}

export default function* root() {
    yield all([
        takeLatest(getBreedsAction.toString(), getBreeds),
        takeLatest(filterBreedsAction.toString(), filterBreeds),
        takeLatest(getBreedDetailAction.toString(), getBreedDetail),
    ])
}
