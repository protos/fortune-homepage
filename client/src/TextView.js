import React, {Component} from 'react';

class TextView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.title,
            text: this.props.text
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">{this.state.title}</h1>
                </header>
                <div className="dynamic-text">
                    {this.state.text}
                </div>
            </div>
        );
    }
}

export default TextView;
