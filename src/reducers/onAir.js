import { onAirConstants } from '../helpers/constants';

const initialState = {
    onAir: [],
    loading: false,
    error: '',
    total_pages: 0,
    total_results: 0,
    page: 0,
};

export default (state = initialState, action) => {
    switch (action.type) {
    case onAirConstants.FETCH_ON_AIR_BEGIN:
        return {
            ...state,
            loading: true,
            error: '',
        };

    case onAirConstants.FETCH_ON_AIR_SUCCESS:
        return {
            ...state,
            loading: false,
            onAir: action.payload.results,
            page: action.payload.page,
            total_pages: action.payload.total_pages,
            total_results: action.payload.total_results,
        };

    case onAirConstants.FETCH_ON_AIR_ERROR:
        return { ...state, loading: false, error: action.payload };

    default:
        return state;
    }
};
