import React from 'react';
import './Features.css';
import Option from './Option/Option';

function Features(props) {
    const features = Object.keys(props.features)
        .map(key => {
        const options = props.features[key].map((item, index) => {
            const selectedClass = item.name === props.selected[key].name ? 'feature__selected' : '';
            const featureClass = 'feature__option ' + selectedClass;
            return (
                <Option
                    key={index}
                    feature={key}
                    item={item}
                    itemName={item.name}
                    itemCost={item.cost}
                    featureClass={featureClass}
                    updateFeature={(key, item) => props.updateFeature(key, item)} />
            )
        });

        return (
            <div className="feature" key={key}>
                <div className="feature__name">{key}</div>
                <ul className="feature__list">
                { options }
                </ul>
            </div>
        )
    });
    return (
        <section className="main__form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
                { features }
        </section>
    )
}

export default Features;
