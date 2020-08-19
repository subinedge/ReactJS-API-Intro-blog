import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    advice: "",
  };

  fetchQuote = () => {
    axios.get("https://api.adviceslip.com/advice").then((response) => {
      this.setState({ advice: response.data.slip.advice });
    });
  };

  componentDidMount() {
    this.fetchQuote();
  }

  render() {
    return (
      <div className="App">
        <h1>Random Quote Generator</h1>
        <button onClick={this.fetchQuote}>
          <span>Fetch Quote</span>
        </button>
        <h3>{this.state.advice}</h3>
      </div>
    );
  }
}

export default App;
