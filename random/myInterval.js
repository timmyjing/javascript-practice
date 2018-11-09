// make a setInterval using setTimeout

/*
thoughts: 
setInterval takes a function and a time as arguments. executes this function
eat an interval of the argument time. Should be able to clear interval.

In order to clearInterval, setTimeout returns an ID which can be used to clear.

setTimeout calls the function once after some time.

could do this recursively, setTimeout takes in an anonymous function that 
calls the argument function and returns itself. this will call the function
after a certain time and also return the next tick.

in order to be able to clear the timer, you have to save the timeout id
to a variable.

maybe use a class to do this or maybe not if you can find a way to 
return the id. actually, you can return a function that will clear the 
interval if called.

*/


function myInterval(fn, ms) {
  let timer;

  function tick(fn, ms) {
    timer = setTimeout( function() {
      fn();
      return tick(fn, ms);
    }, ms);
  }

  return function() {
    clearTimeout(timer);
  };
}