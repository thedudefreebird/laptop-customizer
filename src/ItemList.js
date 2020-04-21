import React, { Component } from "react";
import slugify from "slugify";
import Item from "./Item";

class ItemList extends Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
          const featureHash = feature + '-' + idx;
          const options = this.props.features[feature].map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return (
              <Item
                itemHash={itemHash}
                key={itemHash}
                name={slugify(feature)}
                onchange={e => this.props.updateFeature(feature, item)}
                item={item}
                USCurrencyFormat={this.props.USCurrencyFormat}
                /> 
            );
          });
    
          return (
            <fieldset className="feature" key={featureHash}>
              <legend className="feature__name">
                <h3>{feature}</h3>
              </legend>
              {options}
            </fieldset>
          );
        });
        return features;
    }
}

export default ItemList;