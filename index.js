




var randomnumber1 = Math.random();
randomnumber1  =Math.floor(randomnumber1*6) + 1;
var name1= "dice" + randomnumber1 +".png";
var rname1= "images/" + name1;

 var image1=document.querySelectorAll("img")[0];
 image1.setAttribute("src",rname1);

var randomnumber2 = Math.random();
randomnumber2  =Math.floor(randomnumber2*6) + 1;
var name2= "dice" + randomnumber2 +".png";
var rname2 = "images/" + name2;
 var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",rname2);

if(randomnumber1<randomnumber2)
{
     document.querySelector("h1").innerHTML="PLAYER 2 WINS";
}else if(randomnumber1>randomnumber2)
{
     document.querySelector("h1").innerHTML="PLAYER 1 WINS";
}else
{
   document.querySelector("h1").innerHTML="DRAW";
}
