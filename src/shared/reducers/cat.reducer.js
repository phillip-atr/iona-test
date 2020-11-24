import { handleActions } from "redux-actions"
import { getBreedDetailAction, getBreedDetailFailedAction, getBreedDetailSuccessAction, getBreedsAction, getBreedsFailedAction, getBreedsSuccessAction } from "../actions/cat.action";

const defaultState = {
    breedList: [],
    filteredBreeds: [],
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
