var a = document.getElementById("Text")
a.innerText="Prepbytes is the best online platform to learn coding from scrach.";
a.style.backgroundColor="teal"
console.log(a)

var b = document.getElementsByTagName("h1");
console.log(b[0].innerText);
b[0].innerText="Element acceced by using tagname.";
b[0].style.backgroundColor="teal"
console.log(b[0].innerText);



var c=document.getElementsByClassName("box");
console.log(c);
c[0].innerText="Updated box1";
c[1].innerText="Updated box2";
c[2].innerText="Updated box3";
c[0].style.backgroundColor="teal"
c[1].style.backgroundColor="teal"
c[2].style.backgroundColor="teal"
console.log(c[0].innerText,c[1].innerText,c[2].innerText)

var change_heading= document.getElementsByClassName("change_heading");
console.log(change_heading[0].innerText);


function changetext ()
{
      change_heading[0].innerText="Hello World"
      change_heading[0].style.backgroundColor="green"
}


let replacetext= document.getElementsByClassName("replacetext");
console.log(replacetext)

function replacetext1()
{
      replacetext[0].innerText="Welcome to elevation academy";
      replacetext[0].style.backgroundColor="green";
}

// setTimeout (()=>{
// console.log("1")
// setTimeout(()=>{
// console.log("2");
// setTimeout(()=>{
//       console.log("3");
// },3000);
// },2000);
// },1000);


change_heading[0].addEventListener('click',()=>
{
change_heading[0].innerText="Hello duniya using event listner"
})

var chnageOfRed = document.getElementById('heading');
chnageOfRed.addEventListener('click',()=>{
      chnageOfRed.style.color='red';
      chnageOfRed.innerText='Updated heading color is red using dom'
})


let main_card=document.getElementsByClassName("main_card");
console.log(main_card)
function cart_vertical()
{
if(main_card[0].style.display="flex")
{
      main_card[0].style.display="block"  ;
}

}
function ondoubleclick(){
      if(main_card[0].style.display="block")
{
      main_card[0].style.display="flex";
}
}

let display=document.querySelectorAll('.clock');
console.log(display[0]);

display[0].addEventListener('click',()=>{
     function startClock()
     {
      let time = new Date()
      let hrs = time.getHours();
      let min = time.getMinutes();
      let secs = time.getSeconds();
      
      // console.log(`Time:${hrs}:${min}:${secs}`);
      display[1].innerText=`Time:${hrs}:${min}:${secs}`;
     }
     
     setInterval(() => {
      startClock()
     }, 1000);
})







