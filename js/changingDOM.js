console.info('Start something!');
var CoursesInfo = (function () {
    function CoursesInfo(title, instructor, level, views) {
        this.title = title;
        this.instructor = instructor;
        this.level = level;
        this.views = views;
    }
    CoursesInfo.prototype.updateView = function () {
        return "Views: " + ++this.views;
    };
    return CoursesInfo;
}());
var course = [
    new CoursesInfo('Java Debugging', 'Morton  Bon', 2, 122),
    new CoursesInfo('Java Essentials', 'John Peterson', 1, 454),
    new CoursesInfo('Java Syntax', 'Susan Schneider', 3, 568),
    new CoursesInfo('Java Functions', 'Lee Mints', 3, 7894)
];
console.log(course[0]);
console.log(course[0].views);
course[0].updateView();
console.log(course[0].views);
console.log(course[1]['views']);
//# sourceMappingURL=changingDOM.js.map