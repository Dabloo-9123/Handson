let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] ;

// Q1
//   studentRecords.map((item)=>{
//       console.log(item.name.toUpperCase())
//   })

//   Q2

// let res =studentRecords.filter((item)=>
// {
     
//       return item.marks>50
    
// })
// console.log(res)

// Q3

// let res =studentRecords.filter((item)=>
// {
     
//       return (item.marks>50 && item.id>120)
// })
// console.log(res)

// Q4

// let sum=studentRecords.reduce((pre_value,cur_value)=>
// {
//       return pre_value+=cur_value.marks;

// },0)
// console.log(sum)


// Q5

// studentRecords.map((item)=>{
//       if(item.marks>50){
//             console.log(item.name)
//       }
// })


// Q6

// var sum=0;
// studentRecords.map((item)=>
// {
//       if(item.id>120)
//       {
//         sum+=item.marks;
//       }
//      console.log(sum)
// })
// Q6
// var sum =0;
// for(var i=0;i<studentRecords.length;i++)
// {
//       if(studentRecords[i].id>120)
//       {
//          sum+=studentRecords[i].marks
//       }
// }
// console.log(sum);


// Q7

// var sum =0;
// for(var i=0;i<studentRecords.length;i++)
// {
//    if(studentRecords[i].marks>50)
//    {
//       sum+=studentRecords[i].marks;
//    }
//    else{
//       sum+=studentRecords[i].marks+15;
//    }
// }
// console.log(sum);

// Q8

// var obj1={
//       name :"Dabloo",
//       class:'v',
//       roll_num:33
// }
// var obj2={
//       name :"Vishal",
//       class:'vi',
//       roll_num:34
// }
// var obj3={
//       name :"Babloo",
//       class:'vii',
//       roll_num:43
// }
// var obj4={
//       name :"Vimal",
//       class:'viii',
//       roll_num:54
// }
// var obj5={
//       name :"Nishant",
//       class:'ix',
//       roll_num:93
// }
// var obj6={
//       name :"Sudhanshu",
//       class:'x',
//       roll_num:31
// }
// var arr=[];


// arr.push(obj1);
// arr.push(obj2);
// arr.push(obj3);
// arr.push(obj4);
// arr.push(obj5);
// arr.push(obj6);
// console.log(arr)