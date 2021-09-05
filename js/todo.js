const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
let toDoContent = toDoForm.querySelector("input")

const TODOS_KEY = "todos";
let toDos = [];
let listNum = 1;

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
function deleteToDo () {
    const li = event.target.parentElement;
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id))
    saveToDos()
    li.remove();
}
function paintToDo (newToDoObj) {
    const li = document.createElement("li");
    li.id = newToDoObj.id;
    const span = document.createElement("span");
    span.innerText = newToDoObj.text;
    const btn = document.createElement("button");
    btn.innerText = "❌";
    btn.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);
}

function toDoSubmit() {
    event.preventDefault();
    const toDoContentValue = toDoContent.value;
    console.log(toDoContentValue);
    toDoContent.value = "";
    const newToDoObj = {
        text: toDoContentValue,
        id:Date.now()
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos()
}

toDoForm.addEventListener("submit", toDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null){
    const parsedToDoS = JSON.parse(savedToDos);
    toDos = parsedToDoS;
    parsedToDoS.forEach(paintToDo);
}