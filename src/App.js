import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      author: ""
    }
    this.generateRandomQuote = this.generateRandomQuote.bind(this);
  }

  componentDidMount() {
    this.generateRandomQuote();
  }

  generateRandomQuote() {
    let stext, sauthor = "";

    fetch('https://api.quotable.io/random')
      .then((Response) => Response.json())
      .then((data) => {
        stext = data.content;
        sauthor = data.author;
        this.setState({
          text: stext,
          author: sauthor
        })
      }).catch((err) => console.log('Error is ' + err))
  }

  render() {
    return (
      <div className="App">
        <div id="quote-box" className="border">
          <div id="quote-text" className="text-sm-center">
            <i className="fa fa-quote-left"> </i><span>{this.state.text}</span>
          </div>
          <div id="quote-author" className="text-sm-right">- {this.state.author}</div>
          <button id="new-quote" className="btn btn-primary" onClick={this.generateRandomQuote}>New Quote</button>
        </div>
      </div>
    );
  }
}

export default App;
