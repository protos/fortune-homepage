import React, {Component} from 'react';
import TranslationsWidgetView from "./TranslationsWidgetView";

class TranslationsWidget  extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dutchWord: null,
            englishWord: null
        };

    }


    componentDidMount() {
        fetch('/random-translations')
            .then(response => response.json()
                .then(node => {
                    console.log ('returned!: ' + node);
                    this.setState({ dutchWord: node[0].nld, englishWord: node[0].eng });

                })
            );
    }

    render() {
        console.log ('Dutch: ' + this.state.dutchWord);
        if (this.state.dutchWord) {
            return <TranslationsWidgetView dutchWord={this.state.dutchWord} englishWord={this.state.englishWord} />;
        } else {
            return null;
        }
    }
}

export default TranslationsWidget;
