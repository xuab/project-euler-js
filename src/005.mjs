// 2520 is the smallest number that can be divided by each of the numbers from 1
// to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the
// numbers from 1 to 20?

const range = (start, end) => [...Array(Math.ceil(end - start)).keys()].map((i) => i + start)

const divisors = range(11, 21)

export default () => {
  let n = 2520
  while (divisors.some((d) => n % d > 0)) n += 2520
  return n
}