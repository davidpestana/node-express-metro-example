module.exports = class Store {
    _data = [];
    _model = {};
    _nextId = 1;

    constructor(model) {
        this.register(model);
    }

    async create(value) {
        let model = {...value, id:this._nextId++}
        this._data.push(model);
        return model; 
    }

    async update(id, data) {
        let instance = {...await this.find(id), ...data, id: parseInt(id)};
        this._data[id-1]=instance;
        return instance;
    }

    async get() {
        return this._data;
    }

    async find(id) {
        return this._data[id-1] || false;
    }

    async count() {
        return this._data.length;
    }

    register(model) {
        this._model = model;
    }
}