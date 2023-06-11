'use strict';

(function () {
    function createTemplate({title, description, id}) {
        const el = document.createElement('div');
        el.className = 'col-4';
        el.setAttribute('data-id', id);

        el.innerHTML = `<div class="taskWrapper vova-shaitan">
                          <div class="taskHeading"><b>${title}</b></div>
                          <div class="taskDescription"><i>${description}</i></div>
                          <button class="mt-3 remove-todo btn btn-danger btn-sm">
                            <span>Remove</span>
                          </button>
                       </div>`;

        return el;
    }


    Controller.init('#todoForm', '#todoItems');
    View.init(createTemplate)
    Model.init(localStorage, "todo-items")
})()
