console.log("This is my JS file...")
function madLib(name, subject) {
    return name + "'s favorite subject in school is " + subject
}
console.log(madLib("Jane", "art"))
function tipAmount(bill, level) {
    let qual = {"good" : .2, "fair" : .15, "bad" : .1}
    return bill * qual[level]
}
console.log(tipAmount(10, "good"))

function totalAmount(bill, level) {
    let total = (bill + tipAmount(bill, level))
    return total
}
console.log(totalAmount(10, "good"))

function printNumbers(start, end) {
    for (i=start; i <= end ; ++i) {
        console.log(i)
    }
}
printNumbers(3, 6)
function printNumbers2(start, end) {
    let i = start;
    while (i < (end + 1)) {
        console.log(i)
        i++
    }
}
printNumbers2(3, 6)

function printSquare(num) {
    var stars = "*" 
    var row =""
    for (i =1; i <= num; ++i){
        row += stars
    }
    j=1 
    while (j <= num){
        console.log(row)
        ++j
    }
}
printSquare(4)

function printBox(width, height) {
    var row = ""
    var dash = "-"
    var column = ""
    for (i =1; i <= width; ++i){
        row += dash
    }
    console.log(row)
    for (i = 0; i < height - 2; ++i){
        var blank_space=" "
        column = "|" + ("    ") + "|"
        console.log(column)
    }
    console.log(row)
}
printBox(5, 5)

