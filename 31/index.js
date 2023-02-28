"use strict";
const arr = ['admin', "ali", "sana", "jia", "saba", "jia"];
if (arr.length === 0) {
    console.log('We need to find some users!');
}
else {
    arr.splice(0);
    console.log('All usernames have been removed.');
}
