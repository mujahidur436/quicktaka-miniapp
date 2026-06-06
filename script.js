let tg = window.Telegram.WebApp;

tg.expand();

if(tg.initDataUnsafe.user){

    let user = tg.initDataUnsafe.user;

    console.log("User ID:", user.id);
    console.log("Name:", user.first_name);

}
if(tg.initDataUnsafe.user){

    document.getElementById("username").innerHTML =
    "👋 Welcome " + tg.initDataUnsafe.user.first_name;

}
