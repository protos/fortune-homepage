import React, {Component} from 'react';
import FortuneView from './FortuneView';

class FortuneData  extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fortune: null
        };

        fetch('/random-fortune')
            .then(response => response.json()
            .then(node => {
                this.setState({fortune:node['fortune']});
            })
        );
    }

    render() {
        if (this.state.fortune) {
            return <FortuneView fortune={this.state.fortune} />;
        }
        return <div>Loading...</div>;
    }
}

export default FortuneData;
