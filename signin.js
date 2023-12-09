let name = document.getElementById("name");
let email = document.getElementById("signEmail");
let pwd = document.getElementById("signPassword");
let confirmPwd = document.getElementById("confirmPassword");
let signinButton = document.getElementById("signinBtn");
let emailValid = document.getElementById("emailValid");
let pwdType = document.getElementById("passType")
let pwdValid = document.getElementById("passValid");


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

pwd.addEventListener("input", () => {

            if (pwd.value.length > 0){
                pwdType.innerHTML = "Password should be at least 8 characters";
                pwdType.style.color = "#fff";
                pwdType.style.fontSize = "15px";
                pwdType.style.fontWeight = "500";
                pwdType.style.width = "100%";
                pwdType.style.display = "block";
                pwdType.style.backgroundColor = "#FE0000";
                pwdType.style.textAlign = "center";

            } else {
                pwdType.style.display = "none";
            }

            if (pwd.value.length > 2 && pwd.value.length <= 4) {
                pwdType.innerHTML = "Week password";
                pwdType.style.width = "160px";
                pwdType.style.color = "#fff";
                pwdType.style.fontSize = "15px";
                pwdType.style.fontWeight = "500";
                pwdType.style.backgroundColor = "#FE0000";
                pwdType.style.textAlign = "center";

            } else if (pwd.value.length > 4 && pwd.value.length <= 7 ) {
                pwdType.innerHTML = "Medium password";
                pwdType.style.width = "160px";
                pwdType.style.color = "#fff";
                pwdType.style.fontSize = "15px";
                pwdType.style.fontWeight = "500";
                pwdType.style.backgroundColor = "#F4CE14";
                pwdType.style.textAlign = "center";
            } else if (pwd.value.length > 7) {
                pwdType.innerHTML = "Strong password";
                pwdType.style.width = "160px";
                pwdType.style.color = "#fff";
                pwdType.style.fontSize = "15px";
                pwdType.style.fontWeight = "500";
                pwdType.style.backgroundColor = "#3EC70B";
                pwdType.style.textAlign = "center";
            }
});

confirmPwd.addEventListener("input", () => {

    
    if(pwd.value === confirmPwd.value){
        pwdValid.innerHTML = "Password match";
        pwdValid.style.color = "#fff";
        pwdValid.style.backgroundColor = "#3EC70B";
        pwdValid.style.width = "130px";
        pwdValid.style.fontSize = "15px";
        pwdValid.style.fontWeight = "500";
        pwdValid.style.textAlign = "center";
        pwdValid.style.display = "block";
    } 
    else if (pwd.value !== confirmPwd.value) {
        pwdValid.innerHTML = "Password does not match";
        pwdValid.style.color = "#fff";
        pwdValid.style.backgroundColor = "#FE0000";
        pwdValid.style.width = "190px";
        pwdValid.style.fontSize = "15px";
        pwdValid.style.fontWeight = "500";
        pwdValid.style.textAlign = "center";
    }

});

signinButton.addEventListener("click", (e) => {
    
    e.preventDefault();
    if(!name.value || !email.value || !pwd.value || !confirmPwd.value){
        alert("Please Enter All Details");
        return;
    }

    setTimeout(() => {
        if(pwdValid.innerHTML == "Password match"){

            alert("SignUp Successfull");

            name.value = "";
            email.value = "";
            emailValid.value = "";
            pwd.value = "";
            pwdType.innerHTML = "";
            confirmPwd.value = "";
            pwdValid.innerHTML = "";

        }
    },500);

});
