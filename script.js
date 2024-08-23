// select msg container
let msgContainer=document.querySelector(".msg-container")

// select msg
let msg=document.querySelector("#msg")

// select percent
let percent=document.querySelector("#percent")

// select button
let calculate = document.querySelector("#calculate");
calculate.addEventListener("click", () => {
  // select your name
  let yourName = document.querySelector("#your-name").value;

  // select your crush's name
  let crushName = document.querySelector("#crush-name").value;
  console.log(yourName, crushName);
  
  if(yourName != "" && crushName != ""){
    // generate random number
  let randomNumber=Math.floor(Math.random()*100 + 1)
  console.log(randomNumber)
  msg.innerHTML=` ${yourName} and ${crushName} chance of love`
  percent.innerHTML=`${randomNumber} %`
  yourName.value=""
  crushName.value=""
  }
  else{
    msg.innerHTML="Please pass the value in both field"
    msg.style.color="red"
  }

});
