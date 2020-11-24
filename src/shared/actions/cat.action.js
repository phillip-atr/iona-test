import { createAction } from 'redux-actions'

export const getBreedsAction = createAction('GET_BREEDS_ACTION')
export const getBreedsSuccessAction = createAction('GET_BREEDS_SUCCESS_ACTION')
export const getBreedsFailedAction = createAction('GET_BREEDS_FAILED_ACTION')

export const filterBreedsAction = createAction('FILTER_BREEDS_ACTION')
export const filterBreedsSuccessAction = createAction('FILTER_BREEDS_SUCCESS_ACTION')
export const filterBreedsFailedAction = createAction('FILTER_BREEDS_FAILED_ACTION')

export const selectBreedAction = createAction('SELECT_BREED_ACTION')

export const getBreedDetailAction = createAction('GET_BREED_DETAIL_ACTION')
export const getBreedDetailSuccessAction = createAction('GET_BREED_DETAIL_SUCCESS_ACTION')
export const getBreedDetailFailedAction = createAction('GET_BREED_DETAIL_FAILED_ACTION')
