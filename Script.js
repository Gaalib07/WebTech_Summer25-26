let attempts = 0;
let lockUntil = 0;

function login() {

    let user = document.getElementById("username").value.trim();
    let pass = document.getElementById("password").value.trim();
    let msg = document.getElementById("message");

   
    if (Date.now() < lockUntil) {
        msg.innerHTML = "You are locked for 5 minutes.";
        return false;
    }

   
    if (user === "" || pass === "") {
        alert("Please fill all fields.");
        return false;
    }

    
    if (user === "AIUB" && pass === "$_student") {
        msg.innerHTML = "Successfully Logged In";
        attempts = 0;
        return false;
    }

    
    attempts++;

    if (attempts === 1) {
        msg.innerHTML = "You have 3 attempts left.";
    }
    else if (attempts === 2) {
        msg.innerHTML = "You have 2 attempts left.";
    }
    else {
        msg.innerHTML = "You have 1 attempt left. You are locked for 5 minutes.";
        lockUntil = Date.now() + (5 * 60 * 1000);
        attempts = 0;
    }

    return false;
}