import React, { Component } from 'react';
import FeatureItem from './FeatureItem';

class FeatureList extends Component{
    render(){
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;

        return(
            <FeatureItem 
                featureHash={featureHash}
                feature={feature}
                featureOption={this.props.features[feature]}
                selectedFeature={this.props.selected[feature]}
                updateFeature={(feature, newValue) => this.props.updateFeature(feature, newValue)}
                USCurrencyFormat={this.props.USCurrencyFormat}
            />
        )
    })

    return(
        <forn className="main__form">
            <h2>Customize your laptop</h2>
            {features}
        </forn>
    )

}

}

export default FeatureList;