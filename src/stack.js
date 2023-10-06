class Stack {

    _items = [];

    isEmpty() {
        return this.size() === 0;
    }
    push(data) {
        this._items.push(data);
    }
    pop() {
        const lastValue = this._items.splice(this.size() - 1);
        return lastValue[0];
    }
    clear() {
        this._items = [];
    }
    size() {
        return this._items.length;
    }
    contains(data) {
        return this._items.find((item) => {
            return item === data;
        }) !== undefined;
    }
};

module.exports = Stack;