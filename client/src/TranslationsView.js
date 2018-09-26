import React, {Component} from 'react';
import './FortuneView.css';

class TranslationsView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            translations: this.props.worldList
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Todays Dutch Wordlist:</h1>
                </header>
                <div class="fortune-text">
                    {this.state.translations}
                </div>
            </div>
        );
    }
}

export default TranslationsView;
