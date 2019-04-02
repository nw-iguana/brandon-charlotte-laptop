import React from 'react';

function Summary(props) {
    return (
        <div className="summary__option">
            <div className="summary__option__label">{props.optionKey}</div>
            <div className="summary__option__value">{props.optionValue}</div>
            <div className="summary__option__cost">
                { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(props.optionCost) }
            </div>
        </div>
    )
}

export default Summary;