"use strict";
var firstName = 'Emmanuel';
var middleName = '';
var lastName = 'Urias';
function stringLength(str) {
    var num = 0;
    for (var i = 0; i < str.length; i++) {
        num++;
    }
    return num;
}
function nameLengthMultiplier(firstName, lastName, middleName) {
    var value = stringLength(firstName);
    var multiplier = stringLength(lastName);
    if (middleName) {
        return 'You have a weird middle name';
    }
    else {
        return "The length of your first name times your last name ".concat(value * multiplier);
    }
}
console.log(nameLengthMultiplier(firstName, lastName, middleName));
