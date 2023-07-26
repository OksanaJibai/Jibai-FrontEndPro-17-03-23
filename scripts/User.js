class User {
    #id = null;
    name = null;
    phone = null;
    website = null;
    email = null;
    constructor({id, name, phone, website, email}) {
        // move data from args to inner class fields
        this.#id = id;
        this.name = name;
        this.phone = phone;
        this.website = website;
        this.email = email;
    }

    static isUser(obj) {
        // will check if obj is User class instance
        return obj instanceof User;
    }

    get id() {
        return this.#id
    }

    static dataModel(){
        //for validation
        const model = {
            id : 'number',
            name : 'string',
            phone : 'string',
            website : 'string',
            email : 'string',
        }
        return Object.freeze(model);
    }
}



const user = new User(users[0])