"use strict";
let friends = ["Niraj", "Ranit", "Shatadal", "Sumit"];
friends[3] = "Om";
console.log(friends);
console.log(friends[1]);
console.log(friends[3]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[3]);
// let rname = prompt("Yo");
console.log(typeof friends);
let a = [1, 2, 3, 4, 5];
let b = a.toString();
b;
let c = a.join("-");
c;
a.pop();
a;
a.shift();
a;
a.unshift();
a;
a.push(23, 34);
a;
console.log(a.length);
a;
delete a[2];
a;
console.log(a.length);
let a1 = [1, 2, 3, 4], a2 = [5, 6, 7, 8], a3 = [9, 0];
console.log(a1.concat(a2, a3));
let b1 = a1.concat(a2, a3);
let c1 = b1.reverse();
c1;
let d1 = c1;
console.log(d1);
let num = [61, 2, 3, 4, 5, 6, 7, 8, 9, 0];
num.sort((w, e) => w - e);
console.log(num);
let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 698, 12];
let newNum = num1.splice(5, 3, 69, 67, 68);
console.log(num1);
// let newNum = num1
console.log(newNum);
let newNum1 = [5, 67, 64, 43, 54, 31, 56, 60, 345];
console.log(newNum1);
let newNum2 = newNum1.slice(7, 9);
console.log(newNum2);
let str = "Hello World";
let newStr = Array.from(str);
console.log(newStr);
let newNum3i = [45, 65, 32, 90, 64, 34];
for (let i of newNum3i) /* keys : objects <- 0:45, 1:65, 2:32, etc.*/ {
    console.log(i);
}
for (let f in newNum3i) /* -> keys : object 0,1,2,3,4,5*/ {
    console.log(f);
}
let numPie = [2, 1];
numPie.forEach((element) => {
    console.log(element * element);
});
