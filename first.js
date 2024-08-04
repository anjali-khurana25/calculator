let screen=document.querySelector("#answer");
let boxes=document.querySelectorAll(".box");
let clearButton=document.querySelector("#clearScreen");


function appendToScreen(value){
  screen.innerText += value;
}

function calculate(){
  let expression = screen.innerText;

  try {
  let result = eval(expression); // Evaluating the expression
  screen.innerText = result; // Displaying the result on the screen
   } catch (error) {
  screen.innerText = "Error"; // Handling errors during evaluation
  }
}
function clear(){
  screen.innerText="";
  screen.style.backgroundColor="green";
}
clearButton.addEventListener("click",()=>{
 clear();
})


boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    let value=box.innerText;
     if(value==="="){
      calculate();
    }
    else{
      appendToScreen(value);
    }
  });
});