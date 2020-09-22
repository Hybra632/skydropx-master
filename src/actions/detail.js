import { detailConstants } from '../helpers/constants';

// ---------------------- Fetch --------------------------------------------------
const fetchDetailBegin = () => ({
    type: detailConstants.FETCH_DETAIL_BEGIN,
});

const fetchDetailSuccess = (response) => ({
    type: detailConstants.FETCH_DETAIL_SUCCESS,
    payload: response.data,
});

const fetchDetailError = (response) => ({
    type: detailConstants.FETCH_DETAIL_ERROR,
    payload: response.data,
});

const onAirActions = {
    fetchDetailBegin,
    fetchDetailSuccess,
    fetchDetailError,
};

export default onAirActions;
