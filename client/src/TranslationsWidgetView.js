import React, {Component} from 'react';

class TranslationsWidgetView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dutchWord: this.props.dutchWord,
            englishWord: this.props.englishWord

        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Todays Dutch Translation:</h1>
                </header>
                <div class="fortune-text">
                    {this.state.englishWord} :  {this.state.dutchWord}
                </div>
            </div>
        );
    }
}

export default TranslationsWidgetView;
