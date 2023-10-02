const inputBox = document.getElementById("input-box"); //Get input ID from HTML
const listContainer = document.getElementById("list-container"); //get container ID from HTML
const taskBtn = document.getElementById("task-btn"); //get task-btn id from HTML


//~~~~~~~~~~~~~~~~~~~~ Function when taskBtn is clicked

function addTask() {
    if(inputBox.value === '') {
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

taskBtn.addEventListener('click', addTask);

listContainer.addEventListener("click" , e =>{
    if (e.target.tagName === "LI") {
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

});

//saving Data in the browser storage
const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML);
}

//showing saved Data in the browser storage
const showTask = () => {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();


// console.dir(listContainer);