import { popularConstants } from '../helpers/constants';

// ---------------------- Fetch --------------------------------------------------
const fetchPopularBegin = () => ({
    type: popularConstants.FETCH_POPULAR_BEGIN,
});

const fetchPopularSuccess = (response) => ({
    type: popularConstants.FETCH_POPULAR_SUCCESS,
    payload: response.data,
});

const fetchPopularError = (response) => ({
    type: popularConstants.FETCH_POPULAR_ERROR,
    payload: response.data,
});

const popularActions = {
    fetchPopularBegin,
    fetchPopularSuccess,
    fetchPopularError,
};

export default popularActions;
