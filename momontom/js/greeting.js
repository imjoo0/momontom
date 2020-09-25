const nameContainer = document.querySelector(".js-name");
function paintName(name){
    nameContainer.innerHTML = " ";
    const title = document.createElement("span");
    title.className = "name__text";
    title.innerHTML = `Hello ${name}`;
    nameContainer.appendChild(title);
}
function handleSubmit(event){
    event.preventDefault();
    const form = event.target;
    const input = form.querySelector("input");
    const value = input.value;
    localStorage.setItem("username",value);
    inputC.value = "";
}
function paintInput(){
    const input = document.createElement("input");
    input.className = "name__input";
    input.type = "text";
    input.placeholder = " Type your name here ";
    const form = document.createElement("form");
    form.addEventListener("submit",handleSubmit);
    form.appendChild(input);
    nameContainer.appendChild(form);
}

function loadName(){
    const name = localStorage.getItem("username");
    if(name === null){
      paintInput();
    }else{
       paintName(name);
    }
}
function init(){
    loadName();
}
init();