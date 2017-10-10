import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fortune: null
        }
    }

    componentDidMount() {
        console.log ("Getting Fortune");
        fetch('/random-fortune')
            .then(response => response.json()
                .then(node => {
                    const fortune = node['fortune'];
                    console.log("Fortunes!: " + fortune);
                    this.setState({ fortune });
                    console.log("Fortunes state: " + this.state.fortune);
                })
            )
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

export default App;
