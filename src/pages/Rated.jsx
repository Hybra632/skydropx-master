import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ratedActions from '../actions/rated';
import CardContainer from '../components/CardContainer/CardContainer';
import Loader from '../components/Loader/Loader';
import Pagination from '../components/Pagination/Pagination';
import { getQueryPayload } from '../helpers/api';

const Rated = () => {
    const url = `${process.env.REACT_APP_API_URL}/tv/top_rated`;
    const apiKey = process.env.REACT_APP_API_KEY;
    const language = 'EN_US';
    const dispatch = useDispatch();
    const rated = useSelector((state) => state.rated);
    let page = 1;
    const fetchRatedBegin = () => dispatch(ratedActions.fetchRatedBegin());
    const fetchRatedSuccess = (response) => dispatch(ratedActions.fetchRatedSuccess(response));
    const fetchRatedError = (error) => dispatch(ratedActions.fetchRatedError(error));

    const getRated = () => {
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
        getQueryPayload(url, params, fetchRatedBegin, fetchRatedSuccess, fetchRatedError);
    };

    const loadPage = (newPage) => {
        page = newPage;
        getRated();
    };

    useEffect(() => {
        getRated();
    // eslint-disable-next-line
    }, []);

    return (
        <div>
            <Pagination page={rated.page} totalPages={rated.total_pages} loadPage={loadPage} />
            {rated.loading ? <Loader />
                : (
                    <div>
                        <CardContainer items={rated.rated} />
                    </div>
                )}
        </div>
    );
};

export default Rated;
