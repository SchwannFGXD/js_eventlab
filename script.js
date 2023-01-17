const button = document.getElementById("enter");

button.addEventListener("click", (event) => {
  console.log("The button has been clicked!");
});

//Form
const toDoList = document.querySelector("#textForm")

const handleToDoListSubmit = (event) => {

    event.preventDefault();
    
    const createdList = document.createElement("li");
    createdList.textContent = event.target.textBox.value; 
    
    const createdButton = document.createElement("button");
    createdButton.appendChild(document.createTextNode("Delete"));

    const newItem = document.querySelector("#list");
    newItem.appendChild(createdList);
    newItem.appendChild(createdButton);
  }

  toDoList.addEventListener("submit", handleToDoListSubmit);

  
