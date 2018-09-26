import React, {Component} from 'react';
import FortuneView from './FortuneView';
import TranslationsView from './TranslationsView';

class FortuneData  extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fortune: null,
            translations: null

        };

        fetch('/random-fortune')
            .then(response => response.json()
            .then(node => {
                this.setState({fortune:node['fortune']});
            })
        );

        fetch('/random-translations')
            .then(response => response.json()
            .then(node => {
                this.setState({translations:node});
            })
        );
    }

    render() {
        if (this.state.fortune) {
            return <FortuneView fortune={this.state.fortune} />;
        }
        if (this.state.translations) {
            return <TranslationsView worldList={this.state.translations} />;
        }

        return <div>Loading...</div>;
    }
}

export default FortuneData;
