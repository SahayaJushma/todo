let addtaskbutton = document.getElementById('addtask');
let todocontainer = document.getElementById('todocontainer');
let inputField = document.getElementById('inputField');

addtaskbutton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    todocontainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
    paragraph.style.textDecoration = "line-through";
})
paragraph.addEventListener('dblclick',function(){
    todocontainer.remove(paragraph);
})
})