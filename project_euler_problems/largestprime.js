/*

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

 */



/*
//Function that checks for a prime number
function primetest(n)
{
    for(i = 2; i < n; i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}

//List of prime numbers from 2 to n
//Inefficient since at the minimum most can be divided by 2 at some point
//From here go find the largest divisor using the returned list
//Don't really need to use a set honestly since everything should be unique
function primelist(n)
{
    var prime = new Set();
    
    //Will assume no negative numbers
    if(n <= 1)
        prime.add(n);
    else
    {
        for(i = 2; i <= n; i++)
        {
            if(primetest(i))
                prime.add(i);
        }        
    }
    
    return prime;
}
 */


//Determines the largest prime factor in a number
function primetest(x)
{
    if(x < 2)
        return x;

    prime = 2;
    while(x > prime)//checks if the factor is greater than the prime number
        if(x % prime === 0) //if evenly divisble, can shrink it down more since not prime and less calculations
        {
            x = x / prime; //creates a even number since this number is not prime
            prime = 2; //most common divisor
        }
        else
            prime += 1;
    return prime;
}