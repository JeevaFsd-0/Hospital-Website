let email = document.getElementById("email");
let emailValid = document.getElementById("emailValid");
let password = document.getElementById("password");
let btn = document.getElementById("btn");


email.addEventListener("keyup", () => {

    if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {

        emailValid.innerHTML = "Please enter a valid email";
        emailValid.style.color = "#fff";
        emailValid.style.width = "200px";
        emailValid.style.fontSize = "15px";
        emailValid.style.fontWeight = "500";
        emailValid.style.textAlign = "center";
        emailValid.style.backgroundColor = "#FE0000";

        return false;
    } 

    emailValid.innerHTML = "";
    return true;

});

btn.addEventListener("click", () => {

    if (!email.value || !password.value) {
        alert("Enter the Input Field");
    }

    if (email.value && password.value) {
    alert("Login Successful");

    email.value = "";
    password.value = "";

    }
});