import React, {Component} from 'react';
import StockWidgetView from "./StockWidgetView";

class StockWidget  extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dailyPrices: null
        };

        fetch('/ebay-price')
            .then(response => response.json()
                .then(node => {
                    this.setState({dailyPrices: node['Time Series (Daily)']});
                })
            );
    }

    render() {
        console.log ("Test: " + this.state.dailyPrices);
        return <StockWidgetView/>;
    }
}

export default StockWidget;
