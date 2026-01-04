let val = [1, 2, 4.5, "rahul"];
console.log(val);

function linspace(start, end, count) {
    let step = (end - start) / (count - 1);
    return Array.from({ length: count }, (_, i) => start + step * i);
}

let val1 = linspace(10, 20, 11);
console.log(val1);

function arange(start, end, step) {
    let arr = [];
    for (let i = start; i < end; i += step) {
        arr.push(i);
    }
    return arr;
}

let val2 = arange(10, 20, 2);
console.log(val2);

function logspace(start, end, count) {
    let step = (end - start) / (count - 1);
    return Array.from({ length: count }, (_, i) => Math.pow(10, start + step * i));
}

let val3 = logspace(1, 2, 2); // smaller values for safety
console.log(val3);

let val4 = Array(10).fill(1);
console.log(val);

for (let x of val4) {
    process.stdout.write(x + " ");
}


let one = [1, 2, 3, 4, 5];
console.log(one);


let two = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(two);


let three = [
    [
        [1, 2],
        [3, 4]
    ],
    [
        [5, 6],
        [7, 8]
    ]
];

console.log(three);
