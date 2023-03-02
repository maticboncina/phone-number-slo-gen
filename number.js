// Program that generates Slovenian phone numbers based on specific conditions
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  /*
  seg1       xyz        abc
  */
  
  const seg1 = ['041']; // First segment of the phone numer is always one of these options
  
// 041 360 XXX

const x = [3, 6, 9];
const y = [3, 6, 9];
const z = [3, 6, 9];
  
  const a = [3];
  const b = [3];
  const c = [3];
  
  readline.question('How many phone numbers do you wish to generate: ', num => {
    for(let i = 0; i < num; i++) {
      console.log(`${grf(seg1)} ${grf(x) + grf(y) + grf(z)} ${grf(a) + grf(b) + grf(c)}`);
    }
    readline.close();
  });
  
  // Get random element from array
  // grf = get rand from
  function grf(arr) {
    return arr[Math.floor(Math.random() * arr.length)].toString();
  }