import React, {Component} from 'react';

class FortuneWidgetView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fortune: this.props.fortune
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Todays Fortune.</h1>
                </header>
                <div className="fortune-text">
                    {this.state.fortune}
                </div>
            </div>
        );
    }
}

export default FortuneWidgetView;
