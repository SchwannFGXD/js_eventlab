const button = document.getElementById("enter");

button.addEventListener("click", (event) => {
  console.log("The button has been clicked!");
});

//Form
const toDoList = document.querySelector("#textForm")

function removeItem(){
  this.parentNode.remove();
}

const handleToDoListSubmit = (event) => {

    event.preventDefault();
    
    const createdList = document.createElement("li");
    createdList.textContent = event.target.textBox.value; 
    
    const createdButton = document.createElement("button");
    createdButton.setAttribute("class","deleteButton");
    createdButton.appendChild(document.createTextNode("Delete"));
    createdButton.addEventListener("click", removeItem);

    const newItem = document.querySelector("#list");
    newItem.appendChild(createdList);
    createdList.appendChild(createdButton);
  }

 
  toDoList.addEventListener("submit", handleToDoListSubmit);

  
