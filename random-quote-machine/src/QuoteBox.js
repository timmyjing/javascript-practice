import React, {Component} from 'react';

class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: null,
      loading: true
    }
  this.fetchQuotes = this.fetchQuotes.bind(this);
  }

  componentDidMount() {
    // fetchQuotes
  }

  fetchQuotes() {

  }

  render() {
    return <div id="quote-box">
      <div id="quote">A quote goes here </div>
      <div id="author">Quoter</div>
      <button>Fetch Quote</button>
      <button>Tweet Quote</button>
    </div>
  }
}


export default QuoteBox;