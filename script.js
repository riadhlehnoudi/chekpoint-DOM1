/* var incrementbutton =document.getElementsByClassName('inc');
var decrementbutton =document.getElementsByClassName('des');
for(var i=0;i<incrementbutton.length;i++){
    var button =incrementbutton[i];
    button.addEventListener('click,function(event'){
var buttonclicked =Event.AT_TARGET;
var input =buttonclicked.parentElement.children[2];
var inputvalue =input.value;
for(let i=0;i<incrementbutton;i++)
input.value=newvalue;


    }
} */

//plus button
var plus=document.getElementsByClassName("plus-btn");

for(let i=0; i<plus.length; i++){
    let btnplus=plus[i];
    btnplus.addEventListener("click", function(){
        btnplus.previousElementSibling.value++;
        total();
    })
}

//moins button
var moins=document.getElementsByClassName("minus-btn");

for(let i=0; i<moins.length; i++){
    let moinsbtn=moins[i];
    moinsbtn.addEventListener("click", function(){
        moinsbtn.nextElementSibling.value--;
        total();
        
    })
}

var det = document.getElementsByClassName("delete");

for(let  i = 0;   i<det.length;  i++){
    let button =det[i];
    button.addEventListener('click', function(event) {
        var buttonclicked = event.target
        buttonclicked.parentElement.remove();
        total();
 
    })
}

var likes =document.getElementsByClassName("like")

for(let  i = 0;   i<likes.length;  i++){
let button =likes[i];
button.addEventListener('click', function() {
  if( button.firstElementChild.style.color=="black"){
    button.firstElementChild.style.color="red"
  }
  else{
    button.firstElementChild.style.color="black";
}})
}






//total
var btnfinal = document.getElementById("finalPrice");
var items = document.getElementsByClassName("Item");
function total() {
  let s = 0;
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    s =
      s +
      item.querySelector(".price").innerText *
        item.querySelector(".Quant").value;
  }
  return (btnfinal.value = s);
}

