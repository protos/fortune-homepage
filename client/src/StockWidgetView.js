import React, {Component} from 'react';
import ChartistGraph from 'react-chartist';

class StockWidgetView  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prices: this.props.prices,
            title: this.props.title
        }
    }

    render() {
        let data = {
            "labels": [],
            "series": [[]]
        };

        for (let k = 0, i = 10; k < i; k++) { //this.state.prices.length
            data.labels.push(this.state.prices[k][0]);
            data.series[0].push(this.state.prices[k][1]);
        }

        return(
            <div className="stock-widget">
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">{this.state.title}</h1>
                    </header>
                    <div className="stock-graph">
                        <ChartistGraph data={data} type={'Bar'}/>
                    </div>
                </div>
            </div>);
    }
}

export default StockWidgetView;
