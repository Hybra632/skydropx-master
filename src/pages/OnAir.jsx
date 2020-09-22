import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import onAirActions from '../actions/onAir';
import CardContainer from '../components/CardContainer/CardContainer';
import Loader from '../components/Loader/Loader';
import Pagination from '../components/Pagination/Pagination';
import { getQueryPayload } from '../helpers/api';

const OnAir = () => {
    const url = `${process.env.REACT_APP_API_URL}/tv/on_the_air`;
    const apiKey = process.env.REACT_APP_API_KEY;
    const language = 'EN_US';
    const dispatch = useDispatch();
    const onAir = useSelector((state) => state.onAir);
    let page = 1;
    const fetchOnAirBegin = () => dispatch(onAirActions.fetchOnAirBegin());
    const fetchOnAirSuccess = (response) => dispatch(onAirActions.fetchOnAirSuccess(response));
    const fetchOnAirError = (error) => dispatch(onAirActions.fetchOnAirError(error));

    const getOnAir = () => {
        const params = {
            params: {
                page,
                api_key: apiKey,
                language,
            },
            headers: {
                Accept: 'application/json',
            },
        };
        getQueryPayload(url, params, fetchOnAirBegin, fetchOnAirSuccess, fetchOnAirError);
    };

    const loadPage = (newPage) => {
        page = newPage;
        getOnAir();
    };

    useEffect(() => {
        getOnAir();
    // eslint-disable-next-line
    }, []);

    return (
        <div>
            <Pagination page={onAir.page} totalPages={onAir.total_pages} loadPage={loadPage} />
            {onAir.loading ? <Loader />
                : (
                    <div>
                        <CardContainer items={onAir.onAir} />
                    </div>
                )}
        </div>
    );
};

export default OnAir;
