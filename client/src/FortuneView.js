import React, {Component} from 'react';
import './FortuneView.css';

class FortuneView extends Component {
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
                <div class="fortune-text">
                    {this.state.fortune}
                </div>
            </div>
        );
    }
}

export default FortuneView;
