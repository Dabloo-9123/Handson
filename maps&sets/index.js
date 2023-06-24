// Q1
// var string="abcadeecfb";
// var set1= new Set();

// for (var i=0;i<string.length;i++)
// {
//       if(set1.has(string[i]))
//       {
//             continue;
//       }
//       else{
//             set1.add(string[i])
//       }
// }

// console.log(set1)



// Q2



function countCharacter(str) {
      const Count1 = new Map();
    
      for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (Count1.has(char)) {
          Count1.set(char, Count1.get(char) + 1);
        } else {
          Count1.set(char, 1);
        }
      }
    
      for (let [alphabet, count] of Count1) {
        console.log(`${alphabet}=${count}`);
      }
    }
    
    
    const str="abcadeecfb";
    countCharacter(str);