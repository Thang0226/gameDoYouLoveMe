function yes() {
  alert("I love you too <3");
}

function no() {
  console.log("overed");
  let button = document.getElementById("btnNo");
  button.style.left = Math.random() * parseInt(window.innerWidth) + "px";
  button.style.top = Math.random() * parseInt(window.innerHeight) + "px";
}
