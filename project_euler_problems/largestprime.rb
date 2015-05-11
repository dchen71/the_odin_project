#The prime factors of 13195 are 5, 7, 13 and 29.
#What is the largest prime factor of the number 600851475143 ?

#Determines the largest prime factor in a number

def primetest(x)
    if(x < 2)
        return x
    end

    prime = 2
    loop do
        if(x % prime == 0) #if evenly divisble, can shrink it down more since not prime and less calculations
            x = x / prime #creates a even number since this number is not prime
            prime = 2 #most common divisor
        else
            prime += 1
        end
        break if x <= prime #checks if the factor is greater than the prime number
    end

    return prime
end


puts primetest(366)