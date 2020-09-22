import React from 'react';
import './style.css';

const Pagination = (props) => {
    const {
        page,
        loadPage,
        totalPages,
    } = props;

    return (
        <div className="center">
            <div className="pagination">
                { page > 1 ? <button onClick={() => loadPage(1)} type="button">&laquo;</button> : ''}
                { page > 1 ? <button onClick={() => loadPage(page - 1)} type="button">{page - 1}</button> : ''}
                <button type="button" className="active">{page}</button>
                { page < totalPages ? <button onClick={() => loadPage(page + 1)} type="button">{page + 1}</button> : ''}
                { page < totalPages ? <button onClick={() => loadPage(totalPages)} type="button">&raquo;</button> : ''}
            </div>
        </div>
    );
};

export default Pagination;
