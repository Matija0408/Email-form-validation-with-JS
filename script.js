function validate() {
  let mail = document.getElementById("email").value;

  let pattern = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

  if (pattern.test(mail)) {
    let emailNote = (document.getElementById("emailNote").innerHTML =
      "Email valid");
    return true;
  } else {
    let emailNote = (document.getElementById("emailNote").innerHTML =
      "Please enter valid email address");
    return false;
  }
}

// Practice with the test() method and learn the difference between literal and regular expressions
