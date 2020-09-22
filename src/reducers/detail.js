import { detailConstants } from '../helpers/constants';

const initialState = {
    detail: {},
    loading: false,
    error: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
    case detailConstants.FETCH_DETAIL_BEGIN:
        return {
            ...state,
            loading: true,
            error: '',
        };

    case detailConstants.FETCH_DETAIL_SUCCESS:
        return {
            ...state,
            loading: false,
            detail: action.payload,
        };

    case detailConstants.FETCH_DETAIL_ERROR:
        return { ...state, loading: false, error: action.payload };

    default:
        return state;
    }
};
