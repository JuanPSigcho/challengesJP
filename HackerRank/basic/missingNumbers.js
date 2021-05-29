function frecuencyArr(arr) {
  let counter = 1;
  let arrFrec = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      arrFrec.push([arr[i], counter]);
      counter = 1;
    } else {
      counter++;
    }
  }
  return arrFrec;
}

function missingNumbers(arrOne, arrTwo) {
  // Write your code here
  arrOne.sort();
  arrTwo.sort();
  let arrOneF = frecuencyArr(arrOne);
  let arrTwoF = frecuencyArr(arrTwo);
  let missingArr = [];
  for (let i = 0; i < arrTwoF.length; i++) {
    for (let j = 0; j < arrOneF.length; j++) {
      if (arrTwoF[i][0] == arrOneF[j][0]) {
        if (arrTwoF[i][1] - arrOneF[j][1] > 0) {
          missingArr.push(arrTwoF[i][0]);
        }
        j = arrOneF.length;
      } else if (j == arrOneF.length - 1) {
        missingArr.push(arrTwoF[i][0]);
      }
    }
  }

  console.log(
    'missingArr',
    missingArr.sort(function (a, b) {
      return a - b;
    })
  );
}

let arrFrec = [203, 204, 205, 206, 207, 208, 203, 204, 205, 206];
let arrTwo = [
  203, 204, 205, 206, 207, 208, 203, 204, 205, 206, 204, 205, 206, 203, 210,
];

missingNumbers(arrFrec, arrTwo);

arrFrec = [11, 4, 11, 7, 13, 4, 12, 11, 10, 14];
arrTwo = [11, 4, 11, 7, 3, 7, 10, 13, 4, 8, 12, 11, 10, 14, 12];
missingNumbers(arrFrec, arrTwo);
