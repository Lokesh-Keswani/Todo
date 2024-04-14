const todoList = ['todo1', 'todo6', 'todo4'];
const input = document.querySelector('#ITEM');
const add = document.querySelector('#add');
add.addEventListener('click', add1);
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        add1();
    }
})
function add1() {
    todoList.push(input.value);

    let list = document.querySelector('#List');

    let li = document.createElement('li');
    li.innerText = todoList[todoList.length - 1];
    list.appendChild(li);

    let li1 = document.querySelectorAll('li');
    for (let li of li1) {

        let closeButton = document.createElement('span');
        closeButton.className = 'closeButton';
        closeButton.textContent = '\u00D7';
        li.appendChild(closeButton);
        closeButton.addEventListener('click', () => {
            list.removeChild(li);
        })
        // li.addEventListener('click', () => {

        //     li.classList.toggle('checked');
        // })
        let editButton = document.createElement('span');
        editButton.className = 'editButton';
        editButton.textContent = '\u270E';
        li.appendChild(editButton);
        editButton.addEventListener('click', editButton1)
    }

    input.value = '';

}


function editButton1(e) {
    e.stopPropagation();

    const listItem = e.target.parentElement;
    const originalText = listItem.textContent.trim();
    const inputElement = document.createElement('input');
    inputElement.id = 'edit2';
    inputElement.type = "text";
    inputElement.value = originalText;
    //save button
    const saveButton = document.createElement('span');
    saveButton.className = 'saveButton';
    saveButton.textContent = 'Save';
    saveButton.addEventListener('click', (e) => {
        e.stopPropagation();
        const newText = inputElement.value.trim();
        if (newText !== '') {
            listItem.textContent = newText;
        } else {
            listItem.textContent = originalText;
        }
        inputElement.remove();
        saveButton.remove();
        cancelButton.remove();

        const close = document.createElement('span');
        close.className = 'close';
        close.textContent = '\u00D7';
        listItem.appendChild(close);
        close.addEventListener('click', () => {
            listItem.parentElement.removeChild(listItem);
        });
        const edit = document.createElement('span');
        edit.className = "edit";
        edit.textContent = '\u270E';
        listItem.appendChild(edit);
        edit.addEventListener('click', editButton1);
    });

    //cancel button
    const cancelButton = document.createElement('span');
    cancelButton.className = 'cancelButton';
    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener('click', (e) => {
        e.stopPropagation();
        listItem.textContent = originalText;
        inputElement.remove();
        saveButton.remove();
        cancelButton.remove();

        const close = document.createElement('span');
        close.className = 'close';
        close.textContent = '\u00D7';
        listItem.appendChild(close);
        close.addEventListener('click', () => {
            listItem.parentElement.removeChild(listItem);
        });
        const edit = document.createElement('span');
        edit.className = "edit";
        edit.textContent = '\u270E';
        listItem.appendChild(edit);
        edit.addEventListener('click', editButton1);
    });

    listItem.textContent = '';
    listItem.appendChild(inputElement);
    listItem.appendChild(saveButton);
    listItem.appendChild(cancelButton);
}
let list = document.querySelector('#List');
for (i = 0; i < todoList.length; i++) {
    let li = document.createElement('li');
    li.innerText = todoList[i];
    list.appendChild(li);

    let closeButton = document.createElement('span');
    closeButton.className = 'closeButton';
    closeButton.textContent = '\u00D7';
    li.appendChild(closeButton);
    closeButton.addEventListener('click', () => {
        list.removeChild(li);
    })

    let editButton = document.createElement('span');
    editButton.className = 'editButton';
    editButton.textContent = '\u270E';
    li.appendChild(editButton);
    editButton.addEventListener('click', editButton1);
}

list.addEventListener('click', (e) => {

    e.target.classList.toggle('checked');
})
