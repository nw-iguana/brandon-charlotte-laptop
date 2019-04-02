import React from 'react';

function Option (props) {
    return (
        <li className="feature__item">
            <div className={props.featureClass}
                onClick={() => props.updateFeature(props.feature, props.item)}>
                { props.itemName }
                ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(props.itemCost) })
            </div>
        </li>
    )
}

export default Option;