// Q1.Create a function that takes two numbers as arguments and returns their sum.//
function sum(a,b)
    {return a+b}
console.log(3+4);

// Q2.Write a function that takes an integer minutes and converts it to seconds.
function min(a)
{return a*60}
console.log(min(5));

// Q3.Create a function that takes a number as an argument, increments the number by +1 and returns the result.
function increments(a)
{return a+1 }
console.log(increments(5));

//Q4.Create a function that takes the age in years and returns the age in days.//
function age(years)
{return years*365}
console.log(age(7));

//Q5. Create a function that takes voltage and current and returns the calculated power.//
function power(a,b)
{
    return a*b
}
console.log(power(10,6));



//Q6. Write a function that returns the string "something" joined with a space " " and the given argument a.
function str(a)
{
    return "naga "  + a;
}
console.log(str("gopi"));


// Q7. Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.//
function int(a,b)
{
    return a===10 || b===10 || a+b===10
}
console.log(int(2,8));
console.log(int(10,0));
console.log(int(2,3));

//Q8. Create a function that takes two strings as arguments and returns either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.//
function str(a,b)
{
    return a.length === b.length;
}
console.log(str("hello","chinni"));



