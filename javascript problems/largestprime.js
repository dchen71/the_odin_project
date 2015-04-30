/*

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

 */

var prime = new Set();
var highest = 1;
var number = 1000;


if(number >= 1)
    prime.add(1);
if(number >= 2)
    prime.add(2);
if(number >= 3)
    prime.add(3);
if(number >=5)
    prime.add(5);

for(i=5; i<= number;i++)
{
    var test = Math.sqrt(29);
    if(number % i !==0) 
    {
        for(j=2; j <= i; j++)
        {
            if(i % j === 0)
                break;
            else //should do a loop to check through the prime numbers so it can filter %5 %3 correctly
                prime.add(i);                
        }

    }    
}



prime.forEach(function(value) {
  console.log(value);
  highest = Math.max(value);
});

console.log(highest);


