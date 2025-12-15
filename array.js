// 1-
// let vazn = Number(prompt("Vazningizni kiriting (kg):"));

// if (vazn > 90) {
//     console.log("Dieta qiling");
// } else if (vazn < 70) {
//     console.log("Ko‘proq ovqat yeng");
// } else {
//     console.log("Yaxshi");
// }

// 2-
// let n = Number(prompt("n sonini kiriting:"));
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//     if (i % 2 === 0) {
//         sum += i;
//     }
// }

// console.log("Juft sonlar yig'indisi =", sum);

// 3-
let n = Number(prompt("n sonini kiriting:"));
let arr = [];

for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
        arr.push(i * i);
    }
}

for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

