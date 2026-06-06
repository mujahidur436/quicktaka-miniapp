let tg = window.Telegram.WebApp;

tg.expand();

console.log(tg);

if(tg.initDataUnsafe.user){

let user = tg.initDataUnsafe.user;

alert(
"ID: " + user.id +
"\nName: " + user.first_name
);

document.getElementById("username").innerHTML =
"👋 Welcome " + user.first_name;

}
else{

alert("User Data Not Found");

}
