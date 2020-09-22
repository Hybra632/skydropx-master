import { onAirConstants } from '../helpers/constants';

// ---------------------- Fetch --------------------------------------------------
const fetchOnAirBegin = () => ({
    type: onAirConstants.FETCH_ON_AIR_BEGIN,
});

const fetchOnAirSuccess = (response) => ({
    type: onAirConstants.FETCH_ON_AIR_SUCCESS,
    payload: response.data,
});

const fetchOnAirError = (response) => ({
    type: onAirConstants.FETCH_ON_AIR_ERROR,
    payload: response.data,
});

const onAirActions = {
    fetchOnAirBegin,
    fetchOnAirSuccess,
    fetchOnAirError,
};

export default onAirActions;
