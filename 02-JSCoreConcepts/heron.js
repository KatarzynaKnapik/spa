// boki trójkąta
// a = 3;
// b = 4;
// c = 5;
// h = 7

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

// let a = () => "aaaa";
// console.log( a() );

const countHeron = (a,b,c) => {
    let p = (a+b+c)/2;
    let heron = p*Math.sqrt((p-a)*(p-b)*(p-c));
   console.log(`Pole trókąta o bokach ${a}, ${b} oraz ${c} wynosi ${heron}`);
}

countHeron(3,4,5);