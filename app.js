//bài 1
// function sum(a,b){
//     var c = a + b;
//     return c;
// }
// let d = parseInt(prompt('nhập số a'));
// let e = parseInt(prompt('nhập số b'));
// let sum1 = sum(d,e);
// alert(sum1);

// bài 2
// let arr = [1,2,3,4,5,6];
// function sum(arr){
//     var sum1 = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 1){
//             sum1 =sum1+arr[i];
//         }
//     }
//     return sum1;
// }
// alert(sum(arr));

// bài1
// let a = Number(prompt('nhập số bất kì'));
// function bphuong(a){
//     return a**2;
// }
// alert(bphuong(a));

//bài 2
// let r1 = Number(prompt('nhập bán kính đường tròn'));
// function sc(r){
//     //diện tích
//     var s = (r**2)*3.14;
//     alert(`diện tích hình tròn là : ${s}`)
//     //chu vi
//     var c = 2*r*3.24;
//     alert(`chu vi hình tròn là : ${c}`)
// }
// sc(r1);

// bài 3
// let n = Number(prompt('nhập 1 số'))
// function giaithua(a){
//     if(a===0){
//         return 1;
//     }
//     return a * giaithua(a-1);
// }
// alert(giaithua(n))

// bài 4
// let a = Number(prompt('nhập 1 kí tự'));
// function number1(b){
//     return (Number.isInteger(b));
// }
// console.log(number1(a));

// bài 5
// let a = Number(prompt('nhập vào số nguyên a bất kì'));
// let b = Number(prompt('nhập vào số nguyên b bất kì'));
// let c = Number(prompt('nhập vào số nguyên c bất kì'));
// function min(d,e,f){
//     if(d<e&&d<f){
//         alert(`${a} là số bé nhất`);
//     }else if(e<d&&e<f){
//         alert(`${b} là số bé nhất`);
//     }else if(f<d&&f<e){
//         alert(`${c} là số bé nhất`);
//     }
//     return;
// }
// min(a,b,c);

// bài 6
// let a = Number(prompt('nhập 1 kí tự'));
// function number1(b){
//     return (Number.isInteger(b)&&b>0);    
// }
// console.log(number1(a));

// bài 7
// let a = Number(prompt('nhập vào số nguyên a'));
// let b = Number(prompt('nhập vào số nguyên b'));
// function number1(c){
//     return (Number.isInteger(c)&&c>0);    
// }
// let arr=[];
// function doicho(a,b){
//     let j = a;
//     a = b;
//     b = j;
//     arr.push(a);
//     arr.push(b)
// }

// if (number1(a,b)) {
//     doicho(a,b)
//     console.log(`số a khi đổi là ${arr[0]}`);
//     console.log(`số b khi đổi là ${arr[1]}`);
// }else{
//     console.log('ko phải số nguyên dương');
// }

// bài 8
// let arr = prompt('nhập mảng số bất kì').split('');
// function arr1(arr){
//     var arr2 = [];
//     for(let i = 0; i < arr.length; i++){
//         arr2.unshift(arr[i]);
//     }
//     return arr2;
// }
// console.log(arr1(arr));

// bài 9
// let arre = prompt('nhập 1 chuỗi bất kì').split('');
// let arrf = prompt('nhập 1 kí tự bất kì');
// function diem(a,b) {
//     let sum = 0;
//     for(let i = 0; i < a.length; i++){
//         if(a[i]==b){
//             sum = sum + 1;
//         }
//     }
//     if(sum > 0) {
//         console.log(`kí tự "${b}" xuất hiện ${sum} lần trong mảng`);
//     } else{
//         console.log(`kí tự "${b}" ko xuất hiện`);
//     }
// }
// diem(arre,arrf);