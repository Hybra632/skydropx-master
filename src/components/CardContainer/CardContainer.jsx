import React from 'react';
import CardItem from '../CardItem/CardItem';
import './style.css';

const CardContainer = (props) => {
    const {
        items,
    } = props;

    return (
        <main className="section container">
            <div className="container-items">
                {items.map((item) => {
                    return <CardItem item={item} />;
                })}
            </div>
        </main>
    );
};

export default CardContainer;
