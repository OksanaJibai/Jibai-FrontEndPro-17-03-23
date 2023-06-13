'use strict'

const View = {
    todoItemsBlock: null,

    renderElement(todoItemData) {
        if(!todoItemData) throw new Error('')
        this.todoItemsBlock.prepend(
            this.createTodoItemTemplate(todoItemData)
        )
    },

    createTodoItemTemplate({title, description, id}) {
        const el = document.createElement('div');
        el.className = 'col-4';
        el.setAttribute('data-id', id);
        el.innerHTML = `<div class="taskWrapper">
                            <div class="taskHeading">${title}</div>
                            <div class="taskDescription">${description}</div>
                            <button class="mt-3 remove-todo btn btn-danger btn-sm">
                            <span>Remove</span>
                          </button>
                       </div>`;

        return el;
    },

    //Gave permission to container from DOM
    setTodoItemsBlock(domEl) {
        if (!(domEl instanceof HTMLElement)) throw new Error('TodoItemsBlock should be a DOM element');
        this.todoItemsBlock = domEl
    },

    removeTodoItemFromDOM({id}){
        this.todoItemsBlock.querySelector(`[${'data-id'} = '${id}']`).remove();
    },

    init(createTodoItemTemplate) {
        if(typeof createTodoItemTemplate !== 'function') return;
        this.createTodoItemTemplate = createTodoItemTemplate;
    }
}