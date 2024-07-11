// THUC HANH 3 [Thực hành] Tìm giá trị nhỏ nhất của mảng

// arr1: [3, 5, 1, 8, -3, 7, 8]
// arr2: [7, 12, 6, 9, 20, 56, 89]
// arr3: []
// arr4: [0, 0, 0, 0, 0, 0]

// function minArray(arr) {
//   if (arr.length == 0) {
//     return -1;
//   }
//   let min = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   return min;
// }
// console.log(minArray([3, 5, 1, 8, -3, 7, 8]));
// console.log(minArray([7, 12, 6, 9, 20, 56, 89]));
// console.log(minArray([]));
// console.log(minArray([0, 0, 0, 0, 0, 0]));

// ===============================================================
// THUC HANH 4 [Thực hành] HÀM KIỂM TRA ĐỐI XỨNG
// Cho người dùng nhập vào chuỗi kí tự và viết hàm kiểm tra xem đó có phải chuỗi kí tự đối xứng không
// let str = prompt("moi nhap vao chuoi bat ki");
// function Palindrome(input) {
//   // Chuyển chuỗi về dạng chữ thường và loại bỏ khoảng trắng và dấu câu
//   str = str.toLowerCase();
//   let reverse = str.split("").reverse().join("");
//   if (reverse === str) {
//     console.log(`${str} la chuoi doi xung`);
//   } else {
//     console.log(`${str} la khong chuoi doi xung`);
//   }
// }

// Palindrome();
// ===============================================================

// THUC HANH 5

// ===============================================================

// THUC HANH 6

// ===============================================================

// THUC HANH 7

// ============================================================================================================
// BAI 1
// Bài 1: Tạo hàm alertMessage() hiển thị hộp thoại chứa chuỗi "Xin chao". Gọi hàm từ trong phần <body> của trang web.

// function alertMessage() {
//   let greet = "Xin chao";
//   return greet;
// }
// alert(alertMessage());
// ===============================================================

// Bài 2: Tạo hàm nhận vào một đối số dạng số, tăng giá trị đối số đó lên 1 và trả lại giá trị cho lời gọi hàm. Gọi hàm từ trong phần <body> của trang web và hiển thị kết quả lên màn hình.

// function add(num) {
//   let n = +prompt("moi ban nhap vao 1 so");
//   while (Number.isNaN(n)) {
//     n = +prompt(" gia tri khong hop le moi ban nhap lai");
//   }
//   n++;
//   return n;
// }
// console.log(add());
// ===============================================================

// Bài 3: Tạo hàm nhận vào hai tham số. Nếu giá trị của tham số thứ nhất lớn hơn tham số thứ hai, hiển thị hộp thoại thông báo cho người dùng. Nếu giá trị của tham số thứ nhất nhỏ hơn hoặc bằng tham số thứ hai, trả về tổng của hai tham số.
// function compare(num1, num2) {
//   let a = +prompt("moi ban nhap vao so thu 1");
//   let b = +prompt("moi ban nhap vao so thu 2");
//   if (a < b) {
//     alert(`${a} < ${b}`);
//   } else {
//     return a + b;
//   }
// }
// compare();
// console.log(compare());
// ===============================================================

// Bài 4: Thêm các hàm alert() vào những vị trí thích hợp trong đoạn mã sau để bạn có thể nhìn thấy giá trị của biến result trước và sau lời gọi hàm. Đoạn mã có dạng như sau:
// function addNumbers() {
//   firstNum = 4;
//   secondNum = 8;
//   result = firstNum + secondNum;
//   return result;
// }
// result = 0;
// alert(result);
// result = addNumbers();
// alert(result);

// ============================================================================================================
// BAI 2
// Bài 1: Viết hàm tính bình phương của một số bất kỳ được đưa vào. Gọi hàm vừa xây dựng được.
// function square() {
//   let a = +prompt("moi ban nhap vao so ngau nhien ");
//   while (Number.isNaN(a)) {
//     a = +prompt("gia tri khong hop le moi ban nhap lai");
//     console.log(Number.isNaN(a));
//   }
//   return a ** 2;
// }
// console.log(square());
// ===============================================================

// Bài 2: Viết hàm tính diện tích, hàm tính chu vi hình tròn. Gọi hàm vừa xây dựng được.
// let r = +prompt("moi ban nhap vao ban kinh hinh tron ");
// while (Number.isNaN(r)) {
//   r = +prompt("gia tri khong hop le moi ban nhap lai");
// }

// function s() {
//   return Math.PI.toFixed(2) * r ** 2;
// }
// function perimetter() {
//   let p = Math.PI * 2 * r;
//   return p.toFixed(2);
// }
// console.log(`Dien tich hinh tron la ${s()}`);
// console.log(`Chu vi hinh tron ${perimetter()}`);

// ===============================================================

// Bài 3: Viết hàm tính giai thừa của một số nguyên bất kỳ được đưa vào. Gọi hàm vừa xây dựng được.
// let n = +prompt("moi ban nhap vao so n");
// while (Number.isInteger(n) || n < 0) {
//   n = +prompt("gia tri khong hop le moi ban nhap lai");
// }
// let n = +prompt("moi ban nhap vao so n");
// while (!Number.isInteger(n) || n < 0) {
//   n = +prompt("gia tri khong hop le moi ban nhap lai");
// }
// function gt(n) {
//   if (n == 1) {
//     return 1;
//   } else {
//     return n * gt(n - 1);
//   }
// }
// console.log(gt(n));
// ===============================================================

// Bài 4: Viết hàm kiểm tra xem ký tự nhập vào có phải là ký tự số không. Nếu là ký tự số hàm trả về true, ngược lại trả về false.

// function checkNum() {
//   let n = +prompt("moi ban nhap vao so n");
//   if (Number.isNaN(n)) {
//     return false;
//   } else {
//     return true;
//   }
// }
// console.log(checkNum());
// ===============================================================

// Bài 5: Viết hàm nhận vào 3 số nguyên bất kỳ, trả về số nguyên có giá trị nhỏ nhất.

// function checkMin() {
//   let a = prompt(`Moi ban nhap vao 3 so nguyen cach nhau bang dau ","`);
//   let arr = a.split(",");
//   let min = arr[0];
//   for (let i = 0; i < arr.length - 2; i++) {
//     if (arr[i] > arr[i + 1]) {
//       min = arr[i + 1];
//     }
//     return min;
//   }
// }
// console.log(checkMin());
// ===============================================================

// Bài 6: Viết hàm nhận vào một số, kiểm tra xem nếu số đưa vào có phải là nguyên dương không. Nếu là nguyên dương trả về true, ngược lại trả về false.
// function checkNum() {
//   let n = +prompt("moi ban nhap vao so n");
//   if (Number.isInteger(n) && n > 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(checkNum());
// ===============================================================

// Bài 7: Viết hàm truyền vào 2 số nguyên bất kì, thực hiện đổi chỗ hai số nguyên đó.
// function switch1() {
//   let a = +prompt(`Moi ban nhap vao so nguyen a`);
//   while (!Number.isInteger(a)) {
//     a = +prompt("! gia tri k hop le moi ban nhap lai");
//   }
//   let b = +prompt(`Moi ban nhap vao so nguyen b`);
//   while (!Number.isInteger(b)) {
//     b = +prompt("! gia tri k hop le moi ban nhap lai");
//   }
//   let arr = [a, b];
//   // return [b, a];
//   return arr.reverse();
// }
// console.log(switch1());
// ===============================================================

// Bài 8: Viết hàm truyền vào mảng số nguyên bất kỳ, sau đó đảo ngược mảng số nguyên đó.

// function revs() {
//   let arr = [];
//   let n = parseInt(prompt("moi ban nhap vao so phan tu cua mang"));
//   while (!Number.isInteger(n)) {
//     n = parseInt(prompt("gia tri k hop le moi ban nhap lai"));
//   }
//   for (let i = 0; i < n; i++) {
//     let element = parseInt(prompt(`Moi ban nhap vao phan tu thu ${i}`));
//     while (!Number.isInteger(element)) {
//       element = parseInt(prompt("gia tri k hop le moi ban nhap lai"));
//     }
//     arr.push(element);
//   }
//   return arr.reverse();
// }
// console.log(revs());
// ===============================================================

// Bài 9: Viết hàm truyền vào một mảng ký tự, và một ký tự bất kỳ, kiểm tra xem ký tự bất kỳ đó có nằm trong mảng không. Nếu có trả về số lần xuất hiện của ký tự đó, nếu không trả về -1.
// function check() {
//   let a = prompt(`moi ban nhap vao mang co ki tu cach nhau bang dau ","`);
//   let arr = a.split(",");
//   let n = prompt("moi ban nhap vao ki tu bat ki");
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (n == arr[i]) {
//       count++;
//     }
//   }
//   if (count !== 0) {
//     return count;
//   } else {
//     return -1;
//   }
// }
// console.log(check());
// ============================================================================================================
// BAI 3

// Bài 1: Viết chương trình tạo hàm tính tổng 2 số
// function sum() {
//   let a = +prompt(`Moi ban nhap vao so a`);
//   while (Number.isNaN(a)) {
//     a = +prompt("! gia tri k hop le moi ban nhap lai");
//   }
//   let b = +prompt(`Moi ban nhap vao so b`);
//   while (Number.isNaN(b)) {
//     b = +prompt("! gia tri k hop le moi ban nhap lai");
//   }
//   return a + b;
// }
// console.log(sum());
// ===============================================================

// Bài 2: Viết chương trình tạo hàm tính diện tích và chu vi hình tròn
// let r = +prompt("moi ban nhap vao ban kinh hinh tron ");
// while (Number.isNaN(r)) {
//   r = +prompt("gia tri khong hop le moi ban nhap lai");
// }

// function s() {
//   return Math.PI.toFixed(2) * r ** 2;
// }
// function perimetter() {
//   let p = Math.PI * 2 * r;
//   return p.toFixed(2);
// }
// console.log(`Dien tich hinh tron la ${s()}`);
// console.log(`Chu vi hinh tron ${perimetter()}`);

// ===============================================================

// Bài 3: Viết chương trình tạo hàm kiểm tra xem ký tự nhập vào có phải ký tự số hay không?
// function checkNum() {
//   let n = +prompt("moi ban nhap vao so n");
//   if (Number.isNaN(n)) {
//     return false;
//   } else {
//     return true;
//   }
// }
// console.log(checkNum());

// ===============================================================

// Bài 4: Viết chương trình cho người dùng nhập vào một số, kiểm tra xem số đưa vào có phải nguyên dương không? Nếu đung trả vè true, sai trả về false
// function checkNum() {
//   let n = +prompt("moi ban nhap vao so n");
//   if (Number.isInteger(n) && n > 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(checkNum());
// ===============================================================

// Bài 5: Viết hàm truyền vào 2 số nguyên bất kì, thực hiện đổi chỗ 2 số nguyên đó
//   let a = +prompt(`Moi ban nhap vao so nguyen a`);
//   while (!Number.isInteger(a)) {
//     a = +prompt("! gia tri k hop le moi ban nhap lai");
//   }
//   let b = +prompt(`Moi ban nhap vao so nguyen b`);
//   while (!Number.isInteger(b)) {
//     b = +prompt("! gia tri k hop le moi ban nhap lai");
//   }
//   let arr = [a, b];
//   // return [b, a];
//   return arr.reverse();
// }
// console.log(switch1());
// ============================================================================================================
// BAI 4
// Bài 1: Viết chương trình cho người dùng nhập vào 3 số, viết hàm kiểm tra để tìm ra số bé nhất và in ra số đó
// function checkMin() {
//   let a = prompt(`Moi ban nhap vao 3 so nguyen cach nhau bang dau ","`);
//   let arr = a.split(",");
//   let min = arr[0];
//   for (let i = 0; i < arr.length - 2; i++) {
//     if (arr[i] > arr[i + 1]) {
//       min = arr[i + 1];
//     }
//     return min;
//   }
// }
// console.log(checkMin());
// ===============================================================

// Bài 2: Viết hàm kiểm tra xem số người dùng nhập vào có phải là số nguyên tố hay không?
// (số nguyên tố là số nguyên dương chỉ có 2 ước là 1 và chính nó)
// function checkPrime() {
//   let n = prompt("moi ban nhap vao so bat ki");
//   let check = true;
//   for (let i = 2; i < +n; i++) {
//     if (+n % i == 0) check = false;
//     break;
//   }
//   if (+n > 0 && check == true) {
//     return `${n} la so nguyen to`;
//   } else {
//     return `${n} kkk la so nguyen to`;
//   }
// }
// console.log(checkPrime());
// ===============================================================

// Bài 3: Cho mảng sau:
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = [];
// // Copy
// // Viết hàm trả về tất cả các cặp số có tổng bằng 10
// function sum10() {
//   for (let i = 0; i < arr.length; i++) {
//     let j = arr.indexOf(10 - arr[i]);
//     if (j !== -1) {
//       let temp = [arr[i], arr[j]];
//       result.push(temp);
//     }
//   }
//   return result;
// }
// console.log(sum10());

// CHUA LOAI DUOC CAC PHAN TU TRUNG NHAU
// CACH ANH QUANG SUA
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = [];
// function sum10() {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length - 1; j++) {
//       let temp = [];
//       if (arr[i] + arr[j] == 10) {
//         temp.push(arr[i], arr[j]);
//         result.push(temp.join());
//       }
//     }
//   }
//   return result;
// }
// console.log(sum10(arr));

// ===============================================================

// Bài 4: Cho người dùng nhập vào chuỗi kí tự. Viết hàm kiểm tra xem tần suất xuất hiện của mỗi ký tự và in ra chúng

// Input: “Hello World”
// let a = "Hello World";
// let arr = a.split("");
// function repeatTime(n) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (n == arr[i]) {
//       count++;
//     }
//   }
//   return count;
// }
// for (let j = 0; j < arr.length; j++) {
//   console.log(`${arr[j]}  lap lai ${repeatTime(arr[j])}`);
// }
//
// ===============================================================

// Bài 5: Viết hàm tính giai thừa của một số nguyên bất kỳ được đưa vào. Thực thi hàm vừa khởi tạo
// let n = +prompt(" moi ban nhap vao so nguyen n");
// while (!Number.isInteger(n) || n < 1) {
//   n = +prompt(" gia tri khong hop le, moi ban nhap lai");
// }
// function prime(n) {
//   if (n == 1) {
//     return 1;
//   } else {
//     return n * prime(n - 1);
//   }
// }
// console.log(prime(n));

// ===============================================================
// Bài 6: Cho người dùng nhập vào chuỗi số bất kì. Viết hàm sắp xếp chuỗi số đó từ bé đến lớn

// let a = prompt(`moi ban nhap vao chuoi so bat ki cach nhau bang dau ","`);
// let arr = a.split(",");
// let sum;
// for (let k = 0; k <= arr.length; k++) {
//   sum += arr[k];
// }
// while (Number.isNaN(sum)) {
//   a = +prompt(" gia tri khong hop le, moi ban nhap lai");
// }
// function sort() {
//   for (let j = 0; j <= arr.length; j++) {
//     for (let i = 0; i <= arr.length; i++) {
//       if (+arr[i] > +arr[i + 1]) {
//         let x = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = x;
//       }
//     }
//   }
//   return arr;
// }
// console.log(sort());

// ===============================================================
// Bài 7: Viết chương trình tạo hàm để kiểm tra xem năm người dùng nhập vào có phải năm nhuận không
// function checkYear() {
//   let n = +prompt("moi ban nhap vao 1 nam bat ki");

//   if ((n % 4 == 0 && n % 100 !== 0) || n % 400 == 0) {
//     return `nam ${n} la nam nhuan`;
//   } else {
//     return `nam ${n} la nam thuong`;
//   }
// }
// console.log(checkYear());
// ============================================================================================================
