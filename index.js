document.querySelector('button').addEventListener('click', greet)
let welcome = document.getElementById("Result")



function greet(){
    let name = document.querySelector("input").value
    
    welcome.innerHTML = `Welcome ${name}, how are you doing today?`

    console.log();
    
  }

  