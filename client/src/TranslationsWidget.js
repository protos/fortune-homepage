import React, {Component} from 'react';
import TextView from "./TextView";

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
                    this.setState({ dutchWord: node[0].nld, englishWord: node[0].eng });
                })
            );
    }

    render() {
        if (this.state.dutchWord) {
            const text = this.state.dutchWord  + ' : ' + this.state.englishWord;
            return <TextView title="Todays Translation" text={text} />;
        } else {
            return null;
        }
    }
}

export default TranslationsWidget;
