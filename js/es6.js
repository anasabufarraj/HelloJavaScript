var attendance = {
    _list: [],
    set addName(name) {
        this._list.push(name);
    },
    get list() {
        return this._list.join(', ');
    }
};
attendance.addName = 'John';
console.log(attendance.list);
console.log(attendance._list);
//# sourceMappingURL=es6.js.map