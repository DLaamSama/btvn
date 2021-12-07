const str1 = "tranduong";
const str2 = "hitclubhiuhiu";
const str3 = "aabb";

const newStr = (str) => {
    let newCheck = {}
    for(num of str) newCheck[num] = newCheck.hasOwnProperty(num) ? ++newCheck[num] : 1;
    for (const index in newCheck) {
        if(newCheck[index]===1) return str.indexOf(index);
    }
    return -1;
}

console.log(newStr(str1));
console.log(newStr(str2));
console.log(newStr(str3));