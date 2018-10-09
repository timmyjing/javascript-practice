/* 
17.1 Write a function to swap a number in place (that is, without temporary variables).


set a to be the diff of a - b. then set b to be b + a. after set a to be b - a

*/

const swap = (a,b) => {
  a = a - b;
  b = b + a;
  a = b - a;
}

/*
17.2 Design an algorithm to figure out if someone has won a game oftic-tac-toe.
  

*/