const main = (params) => {

  const primeFiltred =  primeNumbers(params);
  const sum = primeFiltred.reduce(function(soma, current) {
    return soma + current;
  },0);
  
  return sum;
    
};

function primeNumbers(num) {
  let numbers = new Array();
  for (let i = 0; i <= num; i++) {
    if (isPrime(i)){
      numbers.push(i);
    }
  }
  return numbers;
};

function isPrime(num) {
  for(let i = 2; i <num; i++)
    if(num % i === 0) {
      return false
    };
  return num > 1;
};

console.log(main(1000));

  