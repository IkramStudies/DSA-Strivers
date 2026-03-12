/*
  Input: array[] = {10,5,10,15,10,5}
  Output: 10 15
  Explanation: The frequency of 10 is 3, i.e. the highest and the frequency of 15 is 1 i.e. the lowest.
  let arr = [10,5,10,15,10,5]
  let freq = {}
  let min = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++)
  { 
    if (!freq[arr[i]]) freq[arr[i]] = 1;
    else freq[arr[i]] += 1;
  }
  for (let i = 0; i < arr.length; i++)
  {
    if (freq[arr[i]] > max) max = freq[arr[i]];
    // if (freq[arr[0]] > 10 ) , false
    if (freq[arr[i]] < min) min = freq[arr[i]];
    // if (freq[arr[0]] < 10 ), false
    i = 1;
    if (freq[arr[1]] > 10) max = freq[arr[]]
    if (freq[5] > 10) max = freq[arr[]]
  } 
*/
// [1, 2, 1, 3, 2]
const frequency = (arr) => {
  let minFreq = +Infinity;
  let maxFreq = 0;
  let freq = {};
  for (let i = 0; i < arr.length; i++) {
    // for (let i = 0; i < 5, true)
    if (!freq[arr[i]]) freq[arr[i]] = 1;
    // if (!freq[arr[i]])
    // if (!freq[arr[0]])
    // if (!freq[1]) freq[1] = 1;
    // i = 1, 1 < 5, true
    // if (!freq[arr[1]])
    // if (!freq[2]) , true, freq[2] = 1;
    // i = 2, 2 < 5, true
    // if (!freq[arr[2]])
    // if (!freq[1])
    // if (!true)
    // i = 3; 3 < 5, true
    // if (!freq[arr[3]])
    // if (!freq[3])
    // if (!false) freq[3] = 1;
    // i = 4, 4 < 5, true
    // if (!freq[arr[4]])
    // if (!freq[2]), false
    else freq[arr[i]] += 1;
    // freq[arr[2]] += 1;
    // freq[1] += 1
    // freq[1] = 1 + 1 = 2;
    // freq[2] += 1
    // freq[2] = 1 + 1;
    // freq[2] = 2;
  }
  console.log(freq);
  for (let j = 0; j < arr.length; j++) {
    // j = 0; j < 5, true
    // j = 1; 1 < 5, true
    // j = 2; 2 < 5, true
    if (freq[arr[j]] > maxFreq) {
      maxFreq = arr[j];
    }
    // if (freq[arr[0]] > 0) max = arr[j];
    // if (freq[1] > 0) max = arr[j]
    // if (2 > 0) , true , max = arr[0];
    // if (freq[arr[2]] > max) max = arr[2];
    // if (freq[1] > max)
    // if (2 > )
    if (freq[arr[j]] < min) min = arr[j];
    // if (freq[arr[0]] < +Infinity)
    // if (freq[1] < +Infinity)
    // if (2 < +Infinity), true
    // min = arr[0]
    // min = 1
    // if (freq[arr[1]] < min)
    // if (freq[2] < min)
    // if (2 < 1), false
  }
  let newArr = [];
  newArr.push(max);
  newArr.push(min);
  return newArr;
};
console.log(frequency([1, 2, 1, 3, 2]));
