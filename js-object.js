function User(name, department) {
    var _departmemnt = department;
    var _name = name;
    Object.defineProperty(this, 'name', {
        value: _name,
        writable: true,
        enumerable: true,
        configurable: false
    });
    Object.defineProperty(this, 'department', {
        get: function () {
            console.log('Retrieving department');
            return _departmemnt;
        },
        set: function (newValue) {
            console.log('Updating departmen value to "' + newValue + '"');
            _departmemnt = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(this, 'greeting', {
        value: function () {
            console.log('Hi, I\'m ' + _name + '.');
        },
        enumerable: false,
        configurable: false
    });
}