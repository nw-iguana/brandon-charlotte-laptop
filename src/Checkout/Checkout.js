import React from 'react';
import './Checkout.css';
import Summary from './Summary/Summary';

function Checkout (props) {
    const summary = Object.keys(props.selected).map(key =>
        <Summary
            key={key}
            optionKey={key}
            optionValue={props.selected[key].name}
            optionCost={props.selected[key].cost} />)

    const total = Object.keys(props.selected)
        .reduce((acc, curr) => acc + props.selected[curr].cost, 0);

    return(
        <section className="main__summary">
            <h3>NEW GREENLEAF 2018</h3>
                {summary}
            <div className="summary__total">
                <div className="summary__total__label">Your Price: </div>
                <div className="summary__total__value">
                    { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(total) }
                </div>
            </div>
        </section>
    )
}

export default Checkout;