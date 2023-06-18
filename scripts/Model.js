'use strict'

const Model = {
    storage: null,
    dataKey: 'data-key',
    currentId: 1,

    // Will get data from storage
    getData() {
        return JSON.parse(this.storage.getItem(this.dataKey)) || [];
    },

    // Will get data from storage by id
    getDataByID(id) {
        const data = this.getData();
        return data.find(item => Number(item.id) === Number(id));
    },

    // Will save data to storage
    postData(todoItem) {
        const data = this.getData();
        const dataToSave = {...todoItem, id: this.currentId};
        data.push(dataToSave);
        this.storage.setItem(this.dataKey, JSON.stringify(data));
        const savedElement = this.getDataByID(this.currentId);
        this.currentId += 1;
        return savedElement;
    },

    removeItem(id) {
        const data = this.getData();
        const index = data.findIndex(item => Number(item.id) === Number(id));
        if (index !== -1) {
            data.splice(index, 1);
            this.storage.setItem(this.dataKey, JSON.stringify(data));
            return true;
        }
        return false;
    },

    init(storage = sessionStorage, storageKey) {
        if (typeof storageKey === 'string') this.dataKey = storageKey;
        this.storage = storage;

        const savedData = this.getData();
        if (!savedData.length) return;
        this.currentId = Number(savedData.at(-1).id) + 1;
    },
}
