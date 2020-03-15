var getInput = document.querySelector('#app input');
var getButton = document.querySelector('#app button');
var list = document.querySelector('#app ul');

// ELEMENTOS DA LISTA
var vecList = JSON.parse(localStorage.getItem('topics')) || [];
var topicList;
var text;
var linkDelete;
var index;

function renderList() {
    list.innerHTML = '';

    for (item of vecList) {
        topicList = document.createElement('li');
        topicList.appendChild(document.createTextNode(item));
        
        linkDelete = document.createElement('a');
        linkDelete.setAttribute('href', '#');
        linkDelete.appendChild(document.createTextNode(' (delete)'));
        
        index = vecList.indexOf(item);
        linkDelete.setAttribute('onclick', 'deleteItem('+ index +')'); // '+' para 'item' nao ser passada como string.

        topicList.appendChild(linkDelete);
        list.appendChild(topicList);
    }

    //console.log(vecList);   
}

function addItem() {
    text = getInput.value;
    getInput.value = '';
    vecList.push(text);
    renderList();
    saveToStorage();
}
getButton.onclick = addItem;

function deleteItem(index) {
    vecList.splice(index, 1);
    renderList();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('topics', JSON.stringify(vecList));
}