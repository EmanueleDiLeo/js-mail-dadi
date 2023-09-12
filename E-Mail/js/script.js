const emailList = ['pippo@gmail.com','rocco@gmail.com','luca@gmail.com'];
const btnSend = document.getElementById("send");

btnSend.addEventListener("click",function(){
  const email = document.getElementById("email").value;
  let check = false;

  for(let i = 0; i < emailList.length; i++){
    if(emailList[i] === email){
      check = true;
    }
  }

  if(check){
    document.getElementById("output").innerHTML = "Sei presente nella lista";
  }
  else{
    document.getElementById("output").innerHTML = "Non sei presente nella lista";
  }

});
