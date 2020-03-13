var list = document.querySelector('#appList ul');            // pegar o espaco da lista
var inputText = document.querySelector('#appList input');    // pegar o input
var button = document.querySelector('#appList button');      // pegar o botao

var todos = [];      // vetor que armazena os ToDos

function renderTodo() {
    var item = inputText.value;
    var todoElement = document.createElement('li');            // criar um topico da lista
    todoElement.appendChild(document.createTextNode(item));    // por o texto nesse topico
    
    var linkDelete = document.createElement('a');
    linkDelete.setAttribute('href', '#');
    linkDelete.appendChild(document.createTextNode(' (delete)'));
    todoElement.appendChild(linkDelete);

    list.appendChild(todoElement);                           // injetar na lista no html

    addTodo(item);
    inputText.value = "";

    linkDelete.onclick = function () {
        list.removeChild(todoElement);
        var position;

        for (topic of todos) {
            position = todos.indexOf(item);
            todos.splice(position, 1);
        }
    }
}
button.onclick = renderTodo;

function addTodo(text) {        // adicionar item ao vetor
    todos.push(text);
}
