let buttons=document.querySelectorAll("button");
let res=document.querySelector("div.res")
let mode=document.querySelector("div.mode-container");
let backcolor="bright";
let body=document.querySelector("body");
let exp=""
let evaluated = false; 

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let val = button.textContent;
    console.log(val);

    if (val === "=") {
      if (!evaluated && exp !== "") {
        try {
          let result = math.evaluate(exp).toString();
          res.innerHTML = result;
          exp = result;
          evaluated = true;
        } catch {
          res.innerHTML = "expression error";
          exp = "";
          evaluated = false;
        }
      }
    }
    else if (val === "C") {
      exp = exp.slice(0, exp.length - 1);
      res.innerHTML = exp;
      evaluated = false;
    }
    else if (val === "AC") {
      res.innerHTML = "";
      exp = "";
      evaluated = false;
    }
    else {
      if (evaluated) {
        exp = ""; 
        evaluated = false;
      }
      exp += val;
      res.innerHTML = exp;
    }
  });
});
mode.addEventListener("click",()=>{
    if(backcolor=="bright"){
        backcolor="black";
        body.classList.add("backgroundChange");
    }
    else{
       backcolor="bright";
       body.classList.remove("backgroundChange");
    }


})
