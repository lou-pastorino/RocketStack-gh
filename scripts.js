const firstName = document.getElementById("firstName");
const btn1 = document.getElementById("btn1");
const output1 = document.getElementById("output");

function fun1() {
  output1.innerHTML = firstName.value;
  console.log("Function ran successfully");
}

btn1.addEventListener("click", fun1);
