import { handleActions } from "redux-actions"
import { filterBreedsAction, filterBreedsFailedAction, filterBreedsSuccessAction, getBreedDetailAction, getBreedDetailFailedAction, getBreedDetailSuccessAction, getBreedsAction, getBreedsFailedAction, getBreedsSuccessAction } from "../actions/cat.action";

const defaultState = {
    breedList: [],
    filteredBreeds: [],
    page: 1,
    limit: 5,
    noMore: false,
    selectedBreed: {},
    status: { submitted: false, success: false, loading: false },
};

const reducer = handleActions(
    {
        [getBreedsAction]: (state) => {
            return {
                ...state,
                status: {
                    submitted: true,
                    success: false,
                    loading: true,
                    type: "getBreeds",
                },
            };
        },
        [getBreedsSuccessAction]: (state, { payload }) => {
            return {
                ...state,
                breedList: payload,
                status: {
                    submitted: true,
                    success: true,
                    loading: false,
                    type: "getBreeds"
                },
            }
        },
        [getBreedsFailedAction]: (state, { payload }) => {
            return {
                ...state,
                status: {
                    submitted: true,
                    success: false,
                    message: payload,
                    loading: false,
                    type: "getBreeds",
                },
            };
        },
        [filterBreedsAction]: (state, { payload }) => {
            return {
                ...state,
                page: payload.page,
                selectedBreed: payload.breed,
                status: {
                    submitted: true,
                    success: false,
                    loading: true,
                    type: "filterBreeds",
                },
            };
        },
        [filterBreedsSuccessAction]: (state, { payload }) => {
            let filteredBreeds = [...state.filteredBreeds]

            if (state.page > 1) {
                filteredBreeds = [...state.filteredBreeds, ...payload]
            } else {
                filteredBreeds = payload
            }

            return {
                ...state,
                filteredBreeds,
                status: {
                    submitted: true,
                    success: true,
                    loading: false,
                    type: "filterBreeds"
                },
            }
        },
        [filterBreedsFailedAction]: (state, { payload }) => {
            return {
                ...state,
                status: {
                    submitted: true,
                    success: false,
                    message: payload,
                    loading: false,
                    type: "filterBreeds",
                },
            };
        },
        [getBreedDetailAction]: (state) => {
            return {
                ...state,
                status: {
                    submitted: true,
                    success: false,
                    loading: true,
                    type: "getBreedDetail",
                },
            };
        },
        [getBreedDetailSuccessAction]: (state, { payload }) => {
            return {
                ...state,
                catList: payload,
                status: {
                    submitted: true,
                    success: true,
                    loading: false,
                    type: "getBreedDetail"
                },
            }
        },
        [getBreedDetailFailedAction]: (state, { payload }) => {
            return {
                ...state,
                status: {
                    submitted: true,
                    success: false,
                    message: payload,
                    loading: false,
                    type: "getBreedDetail",
                },
            };
        },
    },
    defaultState
)
export default reducer
