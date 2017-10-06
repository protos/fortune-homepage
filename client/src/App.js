import React, {Component} from 'react';
import './App.css';

class App extends Component {
    state = {fortunes:[]};

    componentDidMount() {
        console.log ("Getting Fortunes");
        fetch('/random-fortune')
            .then(res => res.json().then(fortunes => {
                console.log ("Fortunes!: " + fortunes);
                this.setState({ fortunes }); }))
    }


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Todays Fortune.</h1>
                </header>
                <div>
                    Here: {this.state.fortunes.map(fortune => {fortune})}
                </div>
            </div>
        );
    }
}

export default App;
