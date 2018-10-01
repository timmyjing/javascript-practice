// After recently joining Instacart's beta testing developer group, you decide to experiment with their new API. You know that the API returns item-specific display-ready strings like 10.0% higher than in-store or 5.0% lower than in-store that inform users when the price of an item is different from the one in-store. But you want to extend this functionality by giving people a better sense of how much more they will be paying for their entire shopping cart.

// Your app lets a user decide the total amount x they are willing to pay via Instacart over in-store prices. This you call their price sensitivity.

// Your job is to determine whether a given customer will be willing to pay for the given items in their cart based on their stated price sensitivity x.


function isAdmissibleOverpayment(prices, notes, x) {
  
  const percentDiff = mapDiff(notes);
  
  const priceDiff = prices.map( (price, i) => {
      return (price - (price / percentDiff[i] ));
  })
  
  return (Math.round(priceDiff.reduce( (a, c) => a + c , 0) * 10000) / 10000) <= x ;
}


function mapDiff(notes) {
    
    return notes.map( note => {
       const percent = note.match(/\d+\.\d+/g);
       
        if (note.indexOf('higher') !== -1) return 1 + (percent / 100);
        if (note.indexOf('lower') !== -1) return (100 - percent) / 100;
        if (note.indexOf('Same') !== -1) return 1;
    });

}


// overpayment is the total of the extra cost minus the lower cost
// get price - (price * diff)