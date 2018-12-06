import React, {Component} from 'react';
import StockWidgetView from "./StockWidgetView";

class StockWidget  extends Component {
    constructor(props) {
        super(props);

        this.state = {
            prices: null
        };
    }


    componentDidMount() {
        fetch('/ebay-price')
            .then(response => response.json()
                .then(node => {
                    let adjustedPrices = [];
                    for (let i = 0; i < Object.keys(node['Time Series (Daily)']).length; i++) {
                        adjustedPrices.push([Object.keys(node['Time Series (Daily)'])[i], node['Time Series (Daily)'][Object.keys(node['Time Series (Daily)'])[i]]["5. adjusted close"]]);
                    }
                    this.setState({prices: adjustedPrices});
                })
            );
    }


    render() {
        if (this.state.prices) {
            return <StockWidgetView title="eBay Daily Stock Prices" prices={this.state.prices} />;
        } else {
            return null;
        }
    }
}

export default StockWidget;
