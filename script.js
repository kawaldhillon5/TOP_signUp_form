const password1 = document.getElementById("password_1");
const password2 = document.getElementById("password_2");
const form = document.querySelector("form");
const errorMsg = document.querySelector("span");

let password_1 = "";
let password_2 = "";
password1.addEventListener("input", (e) => {password_1 = e.target.value; console.log(e.target.value);});
password2.addEventListener("input",(e) =>{password_2 = e.target.value; console.log(e.target.value);});
form.addEventListener("submit", (e)=>{
    if(password_1 != password_2){
        errorMsg.classList.add("errr");
        errorMsg.textContent = "Password does not match";
        console.log("does not match")
        e.preventDefault();
    }
});


