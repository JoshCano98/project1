//question 1:
console.log(`Question 1:`)
let ages = [3, 9, 23, 64, 2, 8, 28, 93]
console.log(ages)
let lastIndex = ages.length - 1;
let result = ages[lastIndex] - ages[0];
console.log("Result:", result);

let newAge = ages.push(30)
console.log(ages)

let newLastIndex = ages.length - 1;
let newResult = ages[newLastIndex] - ages[0];
console.log("newResult:", newResult);

let sum = 0
for (let i = 0; i < ages.length; i++ ){
    sum = sum + ages[i]
}

average = sum / ages.length
console.log(`${average}`)

//question 2:
console.log(`Question 2:`)
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
avg = names.join('').length / names.length
console.log(avg)
console.log(names.join(' '))

//question 3
console.log(`Question 3:`)
console.log(`you can access the last element of an array by console.logging array(array.length - 1)`)

//question 4
console.log(`Question 4:`)
console.log(`you can access the first element of an array by console.logging array(0)`)

//question 5
console.log(`Question 5:`)
let nameLengths = []
for (let i = 0; i < names.length; i++){
    nameLengths.push(names[i].length)
}
console.log(names)
console.log(nameLengths)

//question 6
console.log(`Question 6:`)
let nameLengthsTotal = 0

for (i = 0; i < nameLengths.length; i++){
    nameLengthsTotal += nameLengths[i];
}
console.log(nameLengthsTotal)

//question 7
console.log(`Question 7:`)
func = (word, n) => {
    var concat = ""
    while (n != 0){
        concat += word
        n--
    }
    return concat
}
console.log(func("Hello", 3))

//question 8
console.log(`Question 8:`)
var fullName = (firstName, lastName) => {
    return(firstName + " " + lastName)
}
console.log(fullName('Josh', 'Cano'));

//question 9
console.log(`Question 9:`)

let arrayNumbersTotal1 = [30, 5, 62, 7, 91, 9, 12, 3]
