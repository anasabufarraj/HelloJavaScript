function returnAnything(any) {
    console.log(any);
    return any;
}
returnAnything('Hello');
returnAnything(65);
returnAnything(true);
returnAnything(Math.pow(2, 8));
function clone(any) {
    var serialized = JSON.stringify(any);
    return JSON.parse(serialized);
}
var log = clone({
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "noImplicitAny": true,
        "removeComments": true,
        "preserveConstEnums": true,
        "sourceMap": false
    },
    "exclude": [
        "node_modules"
    ]
});
console.log(log);
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
console.log(list1, list2);
var dateStamp = new Date(Date.now());
console.log(dateStamp);
//# sourceMappingURL=helloTypeScript.js.map