var list = document.getElementById("list")

function addTodo() {
    var todoitem = document.getElementById("todo");

    var li = document.createElement('li');
    var litext = document.createTextNode(todoitem.value)
    li.appendChild(litext)


    var deltbtn = document.createElement("button")
    var delText = document.createTextNode("DELET");
    deltbtn.setAttribute("class", "btn");
    deltbtn.setAttribute("onclick", "deletItem(this)")
    deltbtn.appendChild(delText)


    var editbtn = document.createElement("button");
    var editText = document.createTextNode("EDIT")
    editbtn.appendChild(editText)
    editbtn.setAttribute("class", "btn");
    editbtn.setAttribute("onclick", "editItem(this)")
    


    li.appendChild(deltbtn);
    li.appendChild(editbtn);


    list.appendChild(li);

    todoitem.value = ""

}

function deletItem(e) {
    e.parentNode.remove()
}

function deletAll() {
    list.innerHTML = " ";
}

function editItem(a){
    var val = prompt("Enter a update value", a.parentNode.firstChild.nodeValue);
    a.parentNode.firstChild.nodeValue = val;

}