document.getElementById('myform').addEventListener('submit', checkForm);

let date = new Date();
//date.setHours(23)
console.log(date.getHours())

function btnClick() {
    alert("Hello my little friend!");
}
function btnClick2() {
    alert("You clicked twice!");
    
}

function userInput(el) {
if (el.value == 'size')
    el.style.fontSize = "30px";
else if (el.value == 'color')
    el.style.color = "#901";
else if (el.value == 'background')
    el.style.backgroundColor = "#999"; 
}

setInterval(function() {
    let date = new Date();

let block = document.getElementById("time");
block.innerHTML = 'Date:' + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + date.getMonth() + "." + date.getDay();
block.style.color = '#87CEFA' ;
block.style.backgroundColor = '#123';

}, 1000)

function checkForm() {
    let el = document.getElementById('myform');

  let username =  el.username.value;
  let email =  el.email.value;
  let password =  el.password.value;
  let gender =  el.gender.value;

  let error = '';
  if(username.length < 2)
   error = "Name is too short";
   else if (email.length < 2)
   error = "email is too short";
   else if (!email.includes('@'))
   error = "Email doesn't have @";
   else if (password.length < 2)
   error = "Password is too short";
   else if (gender == null || gender == '')
   error = "No gender selected";

if (error !=""){
    document.getElementById('error').innerText = error;
    return false;
}

document.getElementById('error').innerText = "";
window.location = 'https://github.com/'

    return false;
}