function myFunction() {
    let person = prompt("Please enter your name", "");
    if (person != null) {
      document.getElementById("demo").innerHTML =
      "Hello Mr/Mrs " + person ;
    }
  }
  myFunction()

  