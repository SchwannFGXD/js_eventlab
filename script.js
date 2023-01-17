const button = document.getElementById("#enter");

button.addEventListener("click", (event) => {
  console.log("The button has been clicked!");

  //handleToDoListSubmit();
});

//Form
const toDoList = document.querySelector("#textForm")

const handleToDoListSubmit = (event) => {

    event.preventDefault();
    
    const createdList = document.createElement("li");
    
    createdList.textContent = event.target.textBox.value; 
    
    const newItem = document.querySelector("#list");
    
    newItem.appendChild(createdList);
  }

  toDoList.addEventListener("submit", handletoDoListFormSubmit);

  
