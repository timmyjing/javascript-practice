// To make sure that groceries can always be delivered, Instacart tries to equally distribute delivery requests throughout the day by including an additional delivery fee during busy periods.

// Each day is divided into several intervals that do not overlap and cover the whole day from 00:00 to 23:59. For each i the delivery fee in the intervals[i] equals fees[i].

// Given the list of delivery requests deliveries, your task is to check whether the delivery fee is directly correlated to the order volume in each interval i.e. the interval_fee / interval_deliveries 
// value is constant for each interval throughout the day.


function deliveryFee(intervals, fees, deliveries) {
    if (intervals.length === 1) return true;
    const count = new Array(intervals.length);
    count.fill(0);
    
    deliveries.forEach( delivery => {
       let time = delivery[0] + (delivery[1] / 60);
       
       for (let i = 0; i < intervals.length; i++) {
           if (i === intervals.length - 1) {
               if (time >= intervals[i]) count[i]++;
           } else {
               if (time >= intervals[i] && time < intervals[i + 1]) count[i]++
           }
       }
        
    });
    
    console.log(count);
    
    for (let i = 1; i < count.length; i++) {
        let prevVal = fees[i - 1] / count[i - 1];
        let currVal = fees[i] / count[i];
        
        if (prevVal !== currVal) return false;
    }
    
    return true;
}


// determine the number of intervals, take the deliveries and see which interval they fall within and count 
// after having the count per interval, divide by the fee and check if all the intervals have the same fee