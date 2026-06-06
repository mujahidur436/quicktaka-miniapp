let tg = window.Telegram.WebApp;

tg.expand();

if(tg.initDataUnsafe.user){

let user = tg.initDataUnsafe.user;

let username = document.getElementById("username");

if(username){
username.innerHTML =
"👋 Welcome " + user.first_name;
}

}

if(localStorage.getItem("balance") == null){
localStorage.setItem("balance","0");
}

function updateBalance(){

let balance =
localStorage.getItem("balance");

let balanceElement =
document.getElementById("balance");

if(balanceElement){
balanceElement.innerHTML =
"৳" + balance;
}

}

updateBalance();
let taskCount =
localStorage.getItem("tasks") || 0;

let taskElement =
document.getElementById(
"taskCount"
);

if(taskElement){

taskElement.innerHTML =
taskCount;

}
