import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import popularActions from '../actions/popular';
import CardContainer from '../components/CardContainer/CardContainer';
import Loader from '../components/Loader/Loader';
import Pagination from '../components/Pagination/Pagination';
import { getQueryPayload } from '../helpers/api';

const Popular = () => {
    const url = `${process.env.REACT_APP_API_URL}/tv/popular`;
    const apiKey = process.env.REACT_APP_API_KEY;
    const language = 'EN_US';
    const dispatch = useDispatch();
    const popular = useSelector((state) => state.popular);
    let page = 1;
    const fetchPopularBegin = () => dispatch(popularActions.fetchPopularBegin());
    const fetchPopularSuccess = (response) => dispatch(popularActions.fetchPopularSuccess(response));
    const fetchPopularError = (error) => dispatch(popularActions.fetchPopularError(error));

    const getPopular = () => {
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
        getQueryPayload(url, params, fetchPopularBegin, fetchPopularSuccess, fetchPopularError);
    };

    const loadPage = (newPage) => {
        page = newPage;
        getPopular();
    };

    useEffect(() => {
        getPopular();
    // eslint-disable-next-line
    }, []);

    return (
        <div>
            <Pagination page={popular.page} totalPages={popular.total_pages} loadPage={loadPage} />
            {popular.loading ? <Loader />
                : (
                    <div>
                        <CardContainer items={popular.popular} />
                    </div>
                )}
        </div>
    );
};

export default Popular;
