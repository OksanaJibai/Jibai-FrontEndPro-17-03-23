class PhoneBook {
    #callBtnAttr = 'data-call';
    #removeBtnAttr = 'data-remove';
    #userIdAttr = 'data-user-id';
    #contacts = [];
    #searchedContacts = [];
    list = document.querySelector('.contacts__list .list-group');
    searchInput = document.querySelector('#contacts-search');


    constructor(users) {
        this.#fillContacts(users);
        this.setEvents();
    }

    get contacts(){
        return this.#contacts;
    }

    #fillContacts(users) {
        users.forEach(userData => {
            // Change to addContact method
            this.addContact(userData);
        })
    }

    addContact(data) {
        // will add contact only if it's a User instance
        const userModel = User.dataModel();
        for(const key in userModel) {
            if( typeof data[key] !== userModel[key] ) {
                console.warn(`User ${data.name} cannot be added to contacts`);
                return;
            }
        }
        this.contacts.push(new User(data));

        this.list.append(this.renderUsers(this.contacts.at(-1)));
        return this.contacts.at(-1);
    }

    #removeContact(id) {
        // will remove contact

        const removeContact = this.contacts.splice(
            this.contacts.findIndex(contact => Number(contact.id) === +id) ,1);

           this.list.querySelector(`[${this.#userIdAttr} = "${id}"]`).remove();
           return removeContact;
    }

    #searchContacts = (e) => {
        // will search contacts by name on each input evt
        // Use #searchedContacts field

        const searchQuery = e.target.value.toLowerCase();
        this.contacts.forEach(contact => {
            let findName = contact.name.toLowerCase();
            if (findName.includes(searchQuery)) {
                this.#searchedContacts.push(findName);
            }
        })
        if(this.#searchedContacts === []) {
            const error = document.createElement('div');
            error.textContent = 'Sorry, no items found';
            this.list.append(error);
        }
        this.renderUsers(this.#searchedContacts);
    }

    #call(userId) {
        // will search user in #contacts field by id
        // callController.startCall(phone)
        const { phone } = this.contacts.find(({id}) => Number(userId) === +id);

        Call.onStateChange((state) => {
            const btn = document.querySelectorAll('.call-btn');
            if(state === Call.callStates.inProgress || state === Call.callStates.connect){
                btn.forEach(btn => {
                    btn.setAttribute('disabled', '');
                });
            }else if(state === Call.callStates.reject || state === Call.callStates.disconnect) {
                btn.forEach(btn => btn.removeAttribute('disabled'));
            }
        })
        callController.startCall(phone);
    }
    renderUsers = ({id, name}) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'list-group-item d-flex justify-content-between align-items-center data-user-id =`${user.id}`';
        wrapper.setAttribute(this.#userIdAttr, id);

        wrapper.innerHTML = ` <span class="contacts__contact">${name}</span>
              <div>
                <button type="button" ${this.#callBtnAttr} class="btn btn-success call-btn">
                  <i class="bi bi-telephone"></i>
                </button>

                <button type="button" ${this.#removeBtnAttr} class="btn btn-danger remove-btn">
                  <i class="bi bi-trash"></i>
                </button>
              </div>`;

        return wrapper;
    }
    static #getAttrValue(el, attrName) {
        return el.closest(`[${attrName}]`).getAttribute(attrName);
    }

    setEvents() {
        // will set event to html elements for call and remove user
        this.list.addEventListener('click', this.clickHandler);
        this.searchInput.addEventListener('input', this.#searchContacts);
    }
    clickHandler = (event) =>{
        event.stopPropagation();
        const {target : el} = event;
        const id = PhoneBook.#getAttrValue(el, this.#userIdAttr);

        if(el.closest(`[${this.#callBtnAttr}]`)){
            this.#call(id);
        }
        if(el.closest(`[${this.#removeBtnAttr}]`)){
            this.#removeContact(id);
        }
    }
}

const phoneBook = new PhoneBook(users);
console.log(phoneBook);