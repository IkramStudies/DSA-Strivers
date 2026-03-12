/*
let arr = [10,5,10,15,10,5];
let freq = {};
for (let i = 0; i < arr.length; i++)
{
  // i = 0; 0 < 6
  // i = 1; 1 < 6
  if (!freq[arr[i]]) freq[[arr[i]]] = 1;
// if (!freq[arr[0]]) 
// if (!freq[10]) true, freq[[arr[0]] = 1
  else freq[arr[i]] += 1;
// if (!freq[arr[1]]) 
  if (!freq[5]), true
      freq[5] = 1
      i++;
  // i = 2, 2 < 6
  if (!freq[10])
  if (!1), if (false)
  else freq[arr[2]] += 1;
  // freq[10] += 1
  // freq[10] = 1 + 1;
  // freq[10] = 2;
  // i++;
  // i = 3, 3 < 6
  if (!freq[arr[i]]) freq[arr[i]] = 1;
  if (!freq[arr[3]]) freq[arr[3]] = 1;
  if (!freq[15]), freq[15] = 1
  i++;
  i = 4, 4 < 6,
  if (!freq[arr[4]])
  if (!freq[10]), false
  else freq[10] += 1;
  else freq[10] = 3 + 1; 
  else freq[10] = 4; 
  i++;
  i = 5, 5 < 6
  if (!freq[arr[5]])
  if (!freq[5]) , false
  else freq[5] += 1
  else freq[5] = 1 + 1;
  freq[5] = 2;
  i = 6, 6 < 6 , false
}
Example 1:
Input: arr = [10,5,10,15,10,5];
Output: 10  3
	      5  2
        15  1
*/
const countFreq = (arr) => {
  let freq = {};
  for (let i = 0; i < arr.length; i++) {
    if (!freq[arr[i]]) freq[arr[i]] = 1;
    else freq[arr[i]] += 1;
  }
  return freq;
};
console.log(countFreq([10, 5, 10, 15, 10, 5]));
