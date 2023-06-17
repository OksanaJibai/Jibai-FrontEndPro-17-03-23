'use strict'

const Controller = {
    form: null,
    todoItemsBlock: null,

    initListeners() {
        this.form.addEventListener('submit', this.formHandler.bind(this));
        this.todoItemsBlock.addEventListener('click', this.deleteTodo.bind(this));
        window.addEventListener('DOMContentLoaded', this.prerenderTodos.bind(this));
    },

    formHandler(e) {
        e.preventDefault();
        e.stopPropagation();

        const data = {};
        this.form.querySelectorAll('input, textarea, select')
            .forEach(({name, value}) => {
                data[name] = value;
            })

        const savedData = Model.postData(data);
        View.renderElement(savedData);
    },

    prerenderTodos() {
        const data = Model.getData();
        if(!data.length) return;

        data.forEach(item => {
            View.renderElement(item);
        })
        document.removeEventListener('DOMContentLoaded', this.prerenderTodos);
    },

    deleteTodo(event){
        if(!event.target.closest('.remove-todo'))return;
        const todoItem = Number(event.target.closest(`[${'data-id'}]`).getAttribute('data-id'));
        Model.removeItem(todoItem);
        View.removeTodoItemFromDOM(todoItem);
    },

    init(formSelector, blockSelector) {
        if(typeof formSelector !== 'string' || typeof blockSelector !== 'string') {
            throw new Error('formSelector, blockSelector should be a string')
        }

        const form = document.querySelector(formSelector)
        if(!form) throw new Error('You should pass form element')


        const block = document.querySelector(blockSelector)
        if(!block) throw new Error('You should pass block element')


        this.form = form;
        this.todoItemsBlock = block;
        View.setTodoItemsBlock(block);


        this.initListeners();
    }
}