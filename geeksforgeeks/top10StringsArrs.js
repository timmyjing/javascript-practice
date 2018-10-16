// Reverse an array without affecting special characters
// Given a string, that contains special character together with alphabets (‘a’ to ‘z’ and ‘A’ to ‘Z’), reverse the string in a way that special characters are not affected.

// Examples:

// Input:   str = "a,b$c"
// Output:  str = "c,b$a"
// Note that $ and , are not moved anywhere.  
// Only subsequence "abc" is reversed

// Input:   str = "Ab,c,de!$"
// Output:  str = "ed,c,bA!$"

/*
could use an extra data structure to keep track of the indices which are strings and then just reverse those.
could also iterate through the string left and right and swap them whenever both a string is encountered
*/
