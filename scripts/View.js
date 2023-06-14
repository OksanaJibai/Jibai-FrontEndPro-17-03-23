'use strict'

const View = {
    todoItemsBlock: null,

    renderElement(todoItemData) {
        if(!todoItemData) throw new Error('###');
        this.todoItemsBlock.prepend(this.createTodoItemTemplate(todoItemData));
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

    setTodoItemsBlock(domEl) {
        if (!(domEl instanceof HTMLElement)) throw new Error('TodoItemsBlock should be a DOM element');
        this.todoItemsBlock = domEl;
    },

    removeTodoItemFromDOM(id){
        const index = this.todoItemsBlock.querySelector(`[${'data-id'} = '${id}']`);
        if(index) {
            index.remove();
        }
    },

    init(createTodoItemTemplate) {
        if(typeof createTodoItemTemplate !== 'function') return;
        this.createTodoItemTemplate = createTodoItemTemplate;
    }
}