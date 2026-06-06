const SUPABASE_URL =
"https://gwrplydmjbdkheecnoqv.supabase.co";

const SUPABASE_KEY =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd3cnBseWRtamJka2hlZWNub3F2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA3NjA5MTcsImV4cCI6MjA5NjMzNjkxN30.dDFnqTHSDpt1pXSM-BU504jaB-OjLQAMmlMGsKnZVzo";

const supabaseClient =
supabase.createClient(
SUPABASE_URL,
SUPABASE_KEY
);

let tg = window.Telegram.WebApp;

tg.expand();

async function loadUser(){

if(!tg.initDataUnsafe.user){
return;
}

const user =
tg.initDataUnsafe.user;

const userId = user.id;

const username =
document.getElementById("username");

if(username){
username.innerHTML =
"👋 Welcome " + user.first_name;
}

let { data } =
await supabaseClient
.from("users")
.select("*")
.eq("id", userId)
.single();

if(!data){

await supabaseClient
.from("users")
.insert({
id: userId,
first_name: user.first_name
});

data = {
balance: 0
};

}

const balanceElement =
document.getElementById("balance");

if(balanceElement){

balanceElement.innerHTML =
"৳" + Number(data.balance).toFixed(2);

}

}

loadUser();
