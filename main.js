console.log("JADE");
const inputbox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputbox.value ===" "){
        alert("You must enter a task name!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
}

listContainer.addEventListener("click", function(e){if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
}
else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
}
}, false);

function saveData() { 
    localStorage.setItem("data", listContainer.innerHTML_)
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask