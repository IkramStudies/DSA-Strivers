/*
*   //i = 0
**  //i
***
****
*****
str += '*';
for (let i = 0; i < num; i++)
{
  str += '*';                         // *
  for (let j = i; i < i + 1; i++)     // \n
  {                                   // **
    str += '*';                      
  }
  str += '/n';                        // str = 
}

for (let i = 0; i < num; i++)
{
  str += '*';
  str += '\n';
}
*/
const rightTriangle = (num) => {
  let str = "";
  for (let i = 0; i < num; i++) {
    // i = 0; 0 < 5;
    // i = 1; 1 < 5
    str += "*"; // str += '*'
    // str = '*' + '*';
    // str = '**'
    // str = '\n';
    // str += "\n"; // str += '*';
    console.log(`${str}`);
  }
  // return str;
};
rightTriangle(5);
