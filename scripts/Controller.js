'use strict'

const Controller = {
    form: null,
    todoItemsBlock: null,

    initListeners() {
        this.form.addEventListener('submit', this.formHandler.bind(this))
        window.addEventListener('DOMContentLoaded', this.prerenderTodos.bind(this))
    },

    formHandler(e) {
        e.preventDefault();
        e.stopPropagation();

        const data = {};
        this.form.querySelectorAll('input, textarea, select')
            .forEach(({name, value}) => {
                data[name] = value
            })

        const savedData = Model.postData(data);
        View.renderElement(savedData);

        e.target.reset();
    },

    prerenderTodos() {
        const data = Model.getData();
        if(!data.length) return;

        data.forEach(item => {
            View.renderElement(item)
        })
    },



    init(formSelector, blockSelector) {
        if(typeof formSelector !== 'string' || typeof blockSelector !== 'string') {
            throw new Error('formSelector, blockSelector should be a string')
        }

        const form = document.querySelector(formSelector)
        if(!form) throw new Error('You should pass form element')


        const block = document.querySelector(blockSelector)
        if(!block) throw new Error('You should pass block element')

        console.log('#1 - Elements validated')
        this.form = form;
        this.todoItemsBlock = block;
        View.setTodoItemsBlock(block)

        console.log('#2 - Adding listeners')
        this.initListeners()
    }
}