const fruits = ["Apple","Mango","Banana"]
// fruits.push("Rabbit")
// fruits.pop()
// fruits.shift()
// fruits.unshift("GlowBerry")
fruits[2]="Kiwi"
delete fruits[1]

document.getElementById("demo").innerHTML = fruits.join("+")

