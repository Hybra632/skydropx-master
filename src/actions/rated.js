import { ratedConstants } from '../helpers/constants';

// ---------------------- Fetch --------------------------------------------------
const fetchRatedBegin = () => ({
    type: ratedConstants.FETCH_RATED_BEGIN,
});

const fetchRatedSuccess = (response) => ({
    type: ratedConstants.FETCH_RATED_SUCCESS,
    payload: response.data,
});

const fetchRatedError = (response) => ({
    type: ratedConstants.FETCH_RATED_ERROR,
    payload: response.data,
});

const ratedActions = {
    fetchRatedBegin,
    fetchRatedSuccess,
    fetchRatedError,
};

export default ratedActions;
