// ClassWork
// 1-
// let arr = [1, 2, 3, 4]; 

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i] * arr[i];
// }

// console.log("Kvadratlar yig'indisi:", sum);

// 2-
// let people = [
//     { name: "ahmad", age: 12 },
//     { name: "ahror", age: 80 } 

// ];

// for (let i = 0; i < people.length; i++) {
//     console.log("Salom " + people[i].name);
// }

// 3-
// let people = [
//     { name: "ahmad", age: 12 },
//     { name: "ahror", age: 65 }, 
//     { name: "ahror", age: 20 }, 
//     { name: "ahror", age: 90 }
    
// ];

// let kids = 0;
// let middle = 0;
// let old = 0;

// for (let i = 0; i < people.length; i++) {
//     let age = people[i].age;

//     if (age < 18) kids++;
//     else if (age <= 60) middle++;
//     else old++;
// }

// console.log("Voyaga yetmaganlar:", kids);
// console.log("O'rta yosh:", middle);
// console.log("Qarilar:", old);


// Array
// 1-
// let n = Number(prompt("Array1: Nechta toq son olishni xohlaysiz?"));
// let arr1 = [];

// for (let i = 0; i < n; i++) {
//     arr1.push(2 * i + 1);
// }

// alert("Dastlabki " + n + " ta toq son: " + arr1.join(", "));

// 2-
// let n2 = Number(prompt("Array2: Nechta daraja hosil qilinsin?"));
// let arr2 = [];

// for (let i = 0; i <= n2; i++) {
//     arr2.push(2 ** i);
// }

// alert("2 sonining dastlabki " + n2 + " ta darajasi: " + arr2.join(", "));

// 3-
// let n3 = Number(prompt("Array3: Nechta had kerak?"));
// let A = Number(prompt("Arifmetik progressiyaning birinchi hadi A ni kiriting:"));
// let D = Number(prompt("Ayirma D ni kiriting:"));

// let arr3 = [];

// for (let i = 0; i < n3; i++) {
//     arr3.push(A + i * D);
// }

// alert("Arifmetik progressiya hadlari: " + arr3.join(", "));

// 4-
// let n = Number(prompt("Array18: nechta element?"));
// let arr = [];

// for (let i = 0; i < n; i++) {
//     arr.push(Number(prompt(i + "-elementni kiriting:")));
// }

// let last = arr[n - 1];
// let ans = 0;

// for (let i = 0; i < n; i++) {
//     if (arr[i] < last) {
//         ans = arr[i];
//         break;
//     }
// }

// alert("Natija: " + ans);

// 5-
// let n = Number(prompt("Array19: nechta element?"));
// let arr = [];

// for (let i = 0; i < n; i++) {
//     arr.push(Number(prompt(i + "-elementni kiriting:")));
// }

// let first = arr[0];
// let last = arr[n - 1];
// let index = 0;

// for (let i = n - 1; i >= 0; i--) {
//     if (arr[i] > first && arr[i] < last) {
//         index = i;
//         break;
//     }
// }

// alert("Natija (indeks): " + index);

// 6-
// let n = Number(prompt("Array20: nechta element?"));
// let arr = [];

// for (let i = 0; i < n; i++) {
//     arr.push(Number(prompt(i + "-elementni kiriting:")));
// }

// let K = Number(prompt("K ni kiriting:"));
// let L = Number(prompt("L ni kiriting:"));

// let sum = 0;

// for (let i = K; i <= L; i++) {
//     sum += arr[i];
// }

// alert("Yig'indi: " + sum);

// 7-
// let n = Number(prompt("Array21: nechta element?"));
// let arr = [];

// for (let i = 0; i < n; i++) {
//     arr.push(Number(prompt(i + "-elementni kiriting:")));
// }

// let K = Number(prompt("K:"));
// let L = Number(prompt("L:"));

// let sum = 0;

// for (let i = K; i <= L; i++) {
//     sum += arr[i];
// }

// let avg = sum / (L - K + 1);

// alert("O'rta arifmetik: " + avg);

// 8-
// let n = Number(prompt("Array22: nechta element?"));
// let arr = [];

// for (let i = 0; i < n; i++) {
//     arr.push(Number(prompt(i + "-elementni kiriting:")));
// }

// let K = Number(prompt("K:"));
// let L = Number(prompt("L:"));

// let sum = 0;

// for (let i = 0; i < n; i++) {
//     if (i < K || i > L) sum += arr[i];
// }

// alert("Yig'indi: " + sum);

// 9-
// let n = Number(prompt("Array23: nechta element?"));
// let arr = [];

// for (let i = 0; i < n; i++) {
//     arr.push(Number(prompt(i + "-elementni kiriting:")));
// }

// let K = Number(prompt("K:"));
// let L = Number(prompt("L:"));

// let sum = 0;
// let count = 0;

// for (let i = 0; i < n; i++) {
//     if (i < K || i > L) {
//         sum += arr[i];
//         count++;
//     }
// }

// let avg = sum / count;

// alert("O'rta arifmetik: " + avg);

// 10-
// let n = Number(prompt("Array24: nechta element?"));
// let arr = [];

// for (let i = 0; i < n; i++) {
//     arr.push(Number(prompt(i + "-elementni kiriting:")));
// }

// let D = arr[1] - arr[0];
// let ok = true;

// for (let i = 2; i < n; i++) {
//     if (arr[i] - arr[i - 1] !== D) {
//         ok = false;
//         break;
//     }
// }

// alert("Natija: " + (ok ? D : 0));

// 11-
// let n = Number(prompt("Array25: nechta element?"));
// let arr = [];

// for (let i = 0; i < n; i++) {
//     arr.push(Number(prompt(i + "-elementni kiriting:")));
// }

// let q = arr[1] / arr[0];
// let ok = true;

// for (let i = 2; i < n; i++) {
//     if (arr[i] / arr[i - 1] !== q) {
//         ok = false;
//         break;
//     }
// }

// alert("Natija: " + (ok ? q : 0));

// 12-
// let n = Number(prompt("Array66: nechta element?"));
// let arr = [];

// for (let i = 0; i < n; i++) {
//     arr.push(Number(prompt(i + "-elementni kiriting:")));
// }

// let firstEven = null;
// for (let i = 0; i < n; i++) {
//     if (arr[i] % 2 === 0) {
//         firstEven = arr[i];
//         break;
//     }
// }

// if (firstEven !== null) {
//     for (let i = 0; i < n; i++) {
//         if (arr[i] % 2 === 0) {
//             arr[i] += firstEven;
//         }
//     }
// }

// alert("Natija: " + arr.join(", "));

// 13-
// let n = Number(prompt("Array67: nechta element?"));
// let arr = [];

// for (let i = 0; i < n; i++) {
//     arr.push(Number(prompt(i + "-elementni kiriting:")));
// }

// let lastOdd = null;
// for (let i = n - 1; i >= 0; i--) {
//     if (arr[i] % 2 !== 0) {
//         lastOdd = arr[i];
//         break;
//     }
// }

// if (lastOdd !== null) {
//     for (let i = 0; i < n; i++) {
//         if (arr[i] % 2 !== 0) {
//             arr[i] += lastOdd;
//         }
//     }
// }

// alert("Natija: " + arr.join(", "));

// 14-
// let n = Number(prompt("Array68: nechta element?"));
// let arr = [];

// for (let i = 0; i < n; i++) {
//     arr.push(Number(prompt(i + "-elementni kiriting:")));
// }

// let minIndex = 0;
// let maxIndex = 0;

// for (let i = 1; i < n; i++) {
//     if (arr[i] < arr[minIndex]) minIndex = i;
//     if (arr[i] > arr[maxIndex]) maxIndex = i;
// }

// let temp = arr[minIndex];
// arr[minIndex] = arr[maxIndex];
// arr[maxIndex] = temp;

// alert("Natija: " + arr.join(", "));
