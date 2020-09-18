// function frac(arr) {
//   let negative=0;
//   let positive = 0;
//   let zero = 0;

//   for(let i=0;i<arr.length;i++) {
//     if(arr[i] > 0) {
//       positive ++;
//     } 
//     else if(arr[i] < 0) {
//       negative ++;
//     } 
//     else{
//       zero++;
//     }
//   }
//   let ln = arr.length;
//   let pos = positive/ln;
//   let neg = negative/ln;
//   let zer = zero/ln;

//   console.log(pos.toPrecision(6) + "\n" + neg.toPrecision(6) + "\n" + zer.toPrecision(6));

// }

// frac([1,2,3,-1,-2,-3,0,0])

//find the absolute difference of sum of right and left diagonals

let metrix = [
  [2,3,4],
  [6,7,9],
  [5,8,1]
]
function diagonalDifference(arr) {
  let riteDiag =0;
  let leftDiag = 0;
  for(let i=0; i<arr.length;i++) {
    riteDiag += arr[i][i]
    leftDiag += arr[arr.length-1 -i][i];
  }
  return Math.abs(riteDiag - leftDiag);
}

// console.log(diagonalDifference(metrix))

// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

function birthdayCakeCandles(candles) {
  // Write your code here
  let max = candles[0]
  let count = 0;
  for(let i=0; i<candles.length;i++) {
    if(candles[i] > max) {
      max = candles[i]
    }
  }
  for(let i=0; i<candles.length;i++) {
    if(candles[i] === max) {
      count += 1;
    }
  }
  return count;
}

// console.log(birthdayCakeCandles([18, 90, 90, 13, 90, 75, 90, 8, 90, 43,90]))

