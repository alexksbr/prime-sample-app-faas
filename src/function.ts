export const handler = async (event) => {
  const index = +event.index;
  const result = getNthPrime(index);
  return { prime: { index, result: result } };
};

function getNthPrime(index: number) {
  const primes = [2];
  let isPrime = true;

  for (let candidate = 3; primes.length < index; candidate++) {
    isPrime = true;
    for (let divisor = 2; divisor < candidate; divisor++) {
      if (candidate % divisor === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime === true) {
      primes.push(candidate);
    }
  }
  return primes[primes.length - 1];
}
