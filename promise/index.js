function areaOfQuad(length,breadth)
{
      return length*breadth
}
// console.log(areaOfQuad(3,4)); 
function Display(figure,area)
{
 console.log(`${figure} have area of ${area}`);
}

Display("rectangle",areaOfQuad(3,5));



// Q2
// setTimeout(() => {
//      console.log("1");
//      setTimeout(() => {
//       console.log("2");
//       setTimeout(() => {
//             console.log("3");
//             setTimeout(() => {
//                   console.log("4");
//                   setTimeout(() => {
//                         console.log("5");
//                         setTimeout(() => {
//                               console.log("6");
//                               setTimeout(() => {
//                                     console.log("7");
//                               }, 7000);
//                         }, 6000);
//                   }, 5000);
//             }, 4000);
//       }, 3000);
//      }, 2000); 
// }, 1000);


// var target=true;
// var promise =new Promise(function(res,rej)
// {
//       if(target)
//       {
//         res("Promise resolved succesfully!!!!")    
//       }
//       else{
//             rej("Promise rejected!!")
//       }
// })
// Q3
// promise.then(function(result){
//       console.log(result);
// },function(err){
//       console.log(err)
// })

// Q3
// function printnumber()
// {
// return new Promise((res,rej)=>{
//       res(setTimeout(() => {
//             console.log("1");
//             setTimeout(() => {
//                   console.log("2");
//                   setTimeout(() => {
//                         console.log("3");
//                         setTimeout(() => {
//                               console.log("4");
//                               setTimeout(() => {
//                                     console.log("5");
//                                     setTimeout(() => {
//                                           console.log("6");
//                                           setTimeout(() => {
//                                                 console.log("7");
//                                           }, 7000);
//                                     }, 6000);
//                               }, 5000);
//                         }, 4000);
//                   }, 3000);
//             }, 2000);
//       }, 1000));
// })
// } 
// printnumber().then((result)=>console.log(result)).catch((err)=>console.log(err))

// Q4
var target=true;
function promiseFunction()
{
 return new Promise(function(res,rej)
 {
       if(target)
       {
         res("Promise resolved succesfully!!!!")    
       }
       else{
             rej("Promise rejected!!")
       }
 })
}
 
 promiseFunction(target).then(function(result){
       console.log(result);
 },function(err){
       console.log(err)
 })

// Q5
 function totalAge(parentage,childage)
 {
      return parentage+childage
 }


 function Member(year,totalage){
      console.log(`the age of father and son is ${totalage} in the year of ${year}`);
 }

 Member(2022,totalAge(66,48))


//  Q6.

setTimeout(() => {
      console.log("task executed in 1 second");
      setTimeout(() => {
            console.log("task executed after 1 second on execution of previous one it means time interval is 1 sec");
            setTimeout(() => {
                  console.log("task executed after 1 second on execution of previous one it means time interval is 1 sec");
                  setTimeout(() => {
                        console.log("task executed after 1 second on execution of previous one it means time interval is 1 sec");
                        setTimeout(() => {
                              console.log("task executed after 1 second on execution of previous one it means time interval is 1 sec");
                              setTimeout(() => {
                                    console.log("task executed after 1 second on execution of previous one it means time interval is 1 sec")
                              }, 1000);
                        }, 1000);
                  }, 1000);
            }, 1000);
      }, 1000);
}, 1000);
//  Q7.
// var number=17;
// let promise_Q7 = new Promise((res,rej)=>{
//       if(number>10)
//       {
//             res(`${number} :is greater than 10`)
//       }
//       rej(`${number} : is not greater than 10`)
// })

// //  Q7.
// promise_Q7.then((result)=>console.log(result)).catch((err)=>console.log(err));

function promisefunc(number)
{
      return  new Promise((res,rej)=>{
            if(number>10)
            {
                  res(`${number} :is greater than 10`)
            }
            rej(`${number} : is not greater than 10`)
      })
}
var number=17;
promisefunc(number).then((result)=>console.log(result),function(err){
      console.log(err)
})




// Q9

let promise1=new Promise((res,rej)=>
{
      setTimeout(() => {
            res("promise 1 is done.")
      }, 1000);
})
let promise2=new Promise((res,rej)=>
{
      setTimeout(()=>{
            res("promise 2 is done.")
      },2000)
})
let promise3=new Promise ((res,rej)=>
{
      setTimeout(()=>{
            res("promise 3 is done")
      },3000)
})
let promise4 = new Promise((res,rej)=>{
      res("promise 4 is done")
},40000)


Promise.all([promise1,promise2,promise3]).then((result)=>{
      console.log(`All promise is done ${result}`);
})

async function fetchdata(){
      const response=await fetch('https://api.github.com/users');
  
      const data= await response.json;
      console.log(response)
       }
      fetchdata()
     