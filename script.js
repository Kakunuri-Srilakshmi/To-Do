
let inputField=document.getElementById("userInput");
let button=document.getElementById("AddButton");
let notesList=document.getElementById("notesList");

function addItem ()
{
    let inputvalue = inputField.value.trim();
    if(inputvalue !== "")
    {

        let listItem = document.createElement("li");
        let textNode = document.createTextNode(inputvalue);
        listItem.appendChild(textNode);

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            notesList.removeChild(listItem);
        };
        listItem.appendChild(deleteButton);

        notesList.appendChild(listItem);

        inputField.value = "";

    }
    
}


