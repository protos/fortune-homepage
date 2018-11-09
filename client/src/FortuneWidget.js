import React, {Component} from 'react';
import FortuneWidgetView from "./FortuneWidgetView";

class FortuneWidget  extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fortune: null,
            translations: null

        };
    }


    componentDidMount() {
        fetch('/random-fortune')
            .then(response => response.json()
                .then(node => {
                    this.setState({fortune:node['fortune']});
                })
            );
    }


    render() {
        if (this.state.fortune) {
            return <FortuneWidgetView fortune={this.state.fortune} />;
        } else {
            return null;
        }
    }
}

export default FortuneWidget;
