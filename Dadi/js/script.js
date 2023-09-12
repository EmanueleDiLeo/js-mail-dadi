const btnSend = document.getElementById("send");

btnSend.addEventListener("click", function(){
  let randomPc = Math.ceil(Math.random() * 6);
  let randomUser = Math.ceil(Math.random() * 6);
  let message;

  document.getElementById("pc").innerHTML = "Il pc ha fatto: " + randomPc;
  document.getElementById("user").innerHTML = "Tu hai fatto:" + randomUser;

  if(randomPc > randomUser){
    message = "Ha vinto il pc"
  }
  else if(randomPc < randomUser){
    message = "Hai vinto tu"
  }
  else{
    message= "Hai pareggiato"
  }

  document.getElementById("output").innerHTML = message;
});