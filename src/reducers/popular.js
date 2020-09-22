import { popularConstants } from '../helpers/constants';

const initialState = {
    popular: [],
    loading: false,
    error: '',
    total_pages: 0,
    total_results: 0,
    page: 0,
};

export default (state = initialState, action) => {
    switch (action.type) {
    case popularConstants.FETCH_POPULAR_BEGIN:
        return {
            ...state,
            loading: true,
            error: '',
        };

    case popularConstants.FETCH_POPULAR_SUCCESS:
        return {
            ...state,
            loading: false,
            popular: action.payload.results,
            page: action.payload.page,
            total_pages: action.payload.total_pages,
            total_results: action.payload.total_results,
        };

    case popularConstants.FETCH_POPULAR_ERROR:
        return { ...state, loading: false, error: action.payload };

    default:
        return state;
    }
};
