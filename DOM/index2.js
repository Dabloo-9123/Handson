let random_number=parseInt(Math.random()*100+1);
console.log(random_number);
let guess_number=document.getElementsByTagName("input");
let comment = document.getElementsByClassName('comment')
var span= document.getElementsByTagName("span")
var rand=document.getElementsByClassName("random_number")
var count=100;
var body=document.getElementsByTagName("body");
function check(){
 body[0].style.backgroundColor="brown";
  
    
    if(random_number > guess_number[0].value)
    {
     comment[0].innerHTML="Your guess is low"
      count--;
      span[0].innerHTML=count;
    }
    else if(random_number < guess_number[0].value){
      comment[0].innerHTML="Your guess is high"
      count--;
      span[0].innerHTML=count;
    }
    else if(random_number==guess_number[0].value)
    {
      comment[0].innerHTML="🤩🤩 Hurray You Won 🤩🤩"
      count--;
      span[0].innerHTML=count;
      span[1].innerHTML=count;
      rand[0].innerHTML=random_number;
      body[0].style.backgroundColor="green";
    }

    if(count===0)
    {
      comment[0].innerHTML="Game Over 🙂🙂 your score is 0"
      
    }
}
