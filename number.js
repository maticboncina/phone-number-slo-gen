// Program that generates Slovenian phone numbers based on specific conditions
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  /*
  seg1       xyz        abc
  */
  
  const seg1 = ['068']; // First segment of the phone numer is always one of these options
  
// 068 888 868

  const x = [8];
  const y = [8];
  const z = [8];
  
  const a = [6, 8];1
  const b = [6, 8];
  const c = [6, 8];
  
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