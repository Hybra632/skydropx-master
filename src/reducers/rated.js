import { ratedConstants } from '../helpers/constants';

const initialState = {
    rated: [],
    loading: false,
    error: '',
    total_pages: 0,
    total_results: 0,
    page: 0,
};

export default (state = initialState, action) => {
    switch (action.type) {
    case ratedConstants.FETCH_RATED_BEGIN:
        return {
            ...state,
            loading: true,
            error: '',
        };

    case ratedConstants.FETCH_RATED_SUCCESS:
        return {
            ...state,
            loading: false,
            rated: action.payload.results,
            page: action.payload.page,
            total_pages: action.payload.total_pages,
            total_results: action.payload.total_results,
        };

    case ratedConstants.FETCH_RATED_ERROR:
        return { ...state, loading: false, error: action.payload };

    default:
        return state;
    }
};
