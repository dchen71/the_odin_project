#The prime factors of 13195 are 5, 7, 13 and 29.
#What is the largest prime factor of the number 600851475143 ?

#Determines the largest prime factor in a number

def primetest(x)
    if(x < 2)
        return x
    end

    prime = 2
    loop do
        if(x % prime == 0)
            x = x / prime
            prime = 2
        else
            prime += 1
        end
        break if x <= prime
    end

    return prime
end


puts primetest(366)