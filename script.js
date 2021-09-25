/*login success*/
  function yeslog()
  {
     const loginform = document.getElementById("Login-form");
     
      const un = loginform.uname.value;
      const pw = loginform.pass.value;
      if (un === "abc" && pw === "qwert") {
        window.open("taskm.html");
      }
      else{
         alert("Incorrect username or password")
       }
     }
 
     /*register success*/
