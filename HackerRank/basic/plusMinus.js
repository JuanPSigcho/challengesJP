//Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
//Print the decimal value of each fraction on a new line with  places after the decimal.

function plusMinus(arr) {
  let lengArr = arr.length;
  let posItem = 0;
  let negItem = 0;
  let zeroItem = 0;

  arr.map((integ) => {
    console.log(integ);
    if (integ === 0) {
      zeroItem++;
    } else if (integ > 0) {
      posItem++;
    } else {
      negItem++;
    }
  });
  posItem = (posItem / arr.length).toFixed(6);
  negItem = (negItem / arr.length).toFixed(6);
  zeroItem = (zeroItem / arr.length).toFixed(6);

  console.log(posItem, negItem, zeroItem);
}

const arrNumbers = [2, 0, 4, -2, 0, 4, -1, -9];

plusMinus(arrNumbers);
