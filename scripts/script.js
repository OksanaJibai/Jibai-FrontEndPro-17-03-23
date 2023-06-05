"use strict";

(function (){
    const form = document.querySelector('#todoForm');
    const inputs = Array.from(form.querySelectorAll('textarea, input:not([type=reset])'));
    const container = document.getElementById('todoItems');
    const DATA_KEY = 'todoListData';
    const ATTR_KEY = 'data-todo-item-id';
    let currentId = 1;

    form.addEventListener('submit', (event) =>{
        event.preventDefault();
        event.stopPropagation();
        const data = inputs.reduce((acc,{name, value}) => {
            acc[name] = value;
            return acc;
        },{})

        const saveData = saveTodoItem(data);
        renderItem(
            createTemplate(saveData)
        )
        event.target.reset();
    })

    const createTemplate = ({title, description, id}) =>{
        const mainWrp = document.createElement('div');
        mainWrp.classList.add('col-4');
        mainWrp.setAttribute(ATTR_KEY, id);
        mainWrp.innerHTML = `<div class="taskWrapper">
                                <div class="taskHeading">${title}</div>
                                <div class="taskDescription">${description}</div>
                                <button class="mt-3 remove-todo btn btn-danger btn-sm">
                                    <i class="bi bi-trash"></i>
                                        <span>Remove</span>
                                </button>
                            </div>`
        return mainWrp;
    }

    const removeTodoItemFromDOMByID = ({id}) => {
        container.querySelector(`[${ATTR_KEY} = '${id}']`).remove();

    }
    const renderItem = (DOMel) => {
        if(!(DOMel instanceof HTMLElement)) throw new Error('Should be a valid DOM element');
        container.prepend(DOMel);
    }
    const getTodoItems = () => {
        const data = JSON.parse(localStorage.getItem(DATA_KEY));
        if(!data) return [];
        return data;
    }

    const saveTodoItem = (dataToSave) => {
        const data = getTodoItems();
        const dataToSaveClone = structuredClone(dataToSave);
        dataToSaveClone.id = currentId;
        data.push(dataToSaveClone);
        localStorage.setItem(DATA_KEY, JSON.stringify(data));
        currentId += 1;
        return getTodoItems().at(-1);

    }

    const removeTodoItem = (id) => {
        const existingData = getTodoItems();
        const index = existingData.findIndex((item => item.id === id));
        const removeItem = existingData.splice(index,1);
        localStorage.setItem(DATA_KEY, JSON.stringify(existingData));
        return removeItem[0];
    }

    container.addEventListener('click', (event) =>{
        event.stopPropagation();
        if(!event.target.closest('.remove-todo')) return;
        const todoEl = event.target.closest(`[${ATTR_KEY}]`);
        const todoItemID = Number(todoEl.getAttribute(ATTR_KEY));
        const removeEl = removeTodoItem(todoItemID);
        removeTodoItemFromDOMByID(removeEl);
    })

    const loadHandler = () => {
        const data = getTodoItems();
        if(!data.length) return;
        currentId = Number(data.at(-1).id)+ 1;
        data.forEach(item => {
            const template = createTemplate(item);
            renderItem(template);
        })
        document.removeEventListener('DOMContentLoaded', loadHandler);
    }

document.addEventListener('DOMContentLoaded', loadHandler);

})()