import React, {Component} from 'react';

class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: null,
      loading: true
    }
  this.fetchQuote = this.fetchQuote.bind(this);
  }

  componentDidMount() {
    // fetchQuotes
    this.fetchQuote();
  }

  fetchQuote() {
    fetch("https://randomstoicquotesapi.herokuapp.com/api/v1/quotes", {mode: 'no-cors'})
      .then(res => console.log(res)).then(data => console.log(data));
  }

  render() {
    return <div id="quote-box">
      <div id="quote">A quote goes here </div>
      <div id="author">Quoter</div>
      <button onClick={ e => this.fetchQuote(e)}>Fetch Quote</button>
      <button>Tweet Quote</button>
    </div>
  }
}


export default QuoteBox;