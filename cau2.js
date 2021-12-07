const a = [1,2,3];
const b = [0];
const c = [9];

const newNumber = arr => {
    arr =  arr.join("");
    arr = Number(arr);
    arr++;
    return arr.toString().split("").map(
        user => Number(user)
    )
}
console.log(newNumber(a));
console.log(newNumber(b));
console.log(newNumber(c));