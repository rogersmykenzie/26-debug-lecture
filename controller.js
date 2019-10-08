function makeEvensArray() {
    let myEvensArr = [];
    while(myEvensArr.length <= 10) {
        let myNum = getRandomNumber();
        if(checkIfEven(myNum)) {
            myEvensArr.push(myNum);
            return myEvensArr;
        }
    }
}

function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

function checkIfEven(num) {
    if(num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function getEvensArray(req, res) {
    debugger;
    let myArr = makeEvensArray();
    res.status(200).json(myArr);
} 

module.exports = {
    getEvensArray
}