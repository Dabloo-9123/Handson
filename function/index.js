// Q1
function printAge()
{
      console.log("23");
}


printAge();

console.log("******************************");

// Q2
const Sum = (a,b) =>{
    let res = a+b;
    console.log(res);
}
      


Sum(3,4);

// function sum (a,b)
// {
//       let res=a+b;
//       console.log(res);
// }

// sum(3,4)
console.log("******************************");

// Q3
const sub = (x,y)=>{
      console.log(x-y)
}

sub(7,5);

console.log("******************************");

// Q4


var x4 = 21;
var girl = function () {
    console.log(x4);
    var x4 = 20;
};
girl ();
console.log("******************************");

// Q5
var x = 21;
      girl ();
      console.log(x)
      function girl() {
          console.log(x);
          var x = 20;
      };

      console.log("******************************");

// Q6
var x6 = 21;
a();
b();

  function a() {
    
   x6 = 20;
  console.log(x6);
};
 function b() {
    
    x6 = 40;
   console.log(x6);
};

console.log("******************************");

function factorial(n)
{
   if(n===0)
   {
      console.loh("1")
   }
   else{
      var fact=1;
for(var i=n;i>0;i--)
{
    fact=fact*i
}
console.log(fact)
   }
}

factorial(5)
console.log("***************************#**");


function FindSum(a, b){
    return a + b;
}

function DisplayData(data, batch){
    console.log(`i am from ${data} and My batch is EA${batch}`)
}

DisplayData("PrepBytes", FindSum(10, 9));

console.log("***************************#**");

// Abc();
// const Abc = function(){
//     let value = 20;
//     console.log(value);
// }

console.log("***************************#**");

var a23 = 10;
(function (){
    console.log(a23);
    var a23 = 20;
})();
console.log("***************************#**");


const greet =  function(name){
    return function(m){
    
        console.log(`Hi!! ${name}, ${m}`);
    }
}
  
const greet_message = greet('EA19');
greet_message("Welcome To PrepBytes");


