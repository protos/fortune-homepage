import React, {Component} from 'react';
import TextView from "./TextView";

class FortuneWidget  extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fortune: null,
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
            return <TextView title="Todays Fortune" text={this.state.fortune} />;
        } else {
            return null;
        }
    }
}

export default FortuneWidget;
