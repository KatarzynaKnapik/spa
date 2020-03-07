const createRandomNum = (min, max) => Math.floor(Math.random() *(max-min)+min); 

const createArray = (n, min, max) => {
    let arr = new Array(n);
    for(let i = 0; i< n;i++){
        arr[i] = createRandomNum(min, max);
    }
    return arr;
}

console.log(createArray(10, 5, 20));