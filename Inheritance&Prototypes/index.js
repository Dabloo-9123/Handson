// Q1
// var parent ={
//       display : function()
//       {
//             console.log(`${this.name} and the age is ${this.age}`)
//       }
// }

// const child1 = Object.create(parent)
// child1.name="Dabloo";
// child1.age="22";
// child1.display();

// const child2 =Object.create(parent);
// child2.name="prepbytes"
// child2.age=12;
// child2.display();

// Q2

var grandfather={
      food:function()
      {
            console.log(`Favrouite food is Gajar ka halwa`)
      }
}

const father=Object.create(grandfather);
father.color= function()
{
      console.log("Asian")
}
father.food();

const me = Object.create(father);
me.color()
me.food()

const myson=Object.create(me);
myson.color()


// Q3

Array.prototype.calculateSum=function(){
   var sum=0;
   for(var i=0;i<this.length;i++)
   {
      sum=sum+this[i]
   }
  return sum;
}


var arr=[1,3,2,4,5];
console.log(arr.calculateSum())