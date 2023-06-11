'use strict'

const View = {
    todoItemsBlock: null,

    renderElement(todoItemData) {
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
                       </div>`;

        return el;
    },

    setTodoItemsBlock(domEl) {
        if (!(domEl instanceof HTMLElement)) throw new Error('TodoItemsBlock should be a DOM element');
        this.todoItemsBlock = domEl
    },

    init(createTodoItemTemplate) {
        if(typeof createTodoItemTemplate !== 'function') return;
        this.createTodoItemTemplate = createTodoItemTemplate;
    }
}