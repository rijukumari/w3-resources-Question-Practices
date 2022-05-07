// // 1. Write a javaScript program to display the current day and time in the following format.

// var today = new Date();
// var day = today.getDay();
// var array = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// console.log("Today the day is:" + array[day]);
// var hour = today.getHours();
// var min = today.getMinutes();
// var sec = today.getSeconds();

// if (hour < 12) {
//     console.log("The time now is:" + hour + "AM:" + min + ":" + sec);
// } else {
//     var pmhour = hour - 12;
//     console.log("The time now is:" + pmhour + "PM:" + min + ":" + sec);
// }
// console.log(sec);

// // 2. Write a javaScript program to print the contents of the current window.

// function clickme() {
//     window.print();
// }

// // 3. Write a JavaScript program to get the current date.

// var date = new Date();
// var month = date.getMonth();
// var day = date.getDate();
// var year = date.getFullYear();

// month++;
// console.log("The date is :" + month + "/" + day + "/" + year);

// // 4. Write a JavaScript program to find the area of a triangle where lengths of
// // the three of its sides are 5, 6, 7.

// var a = 5;
// var b = 6;
// var c = 7;
// var d = (a + b + c);
// var math = Math.sqrt(d * ((d - a) * (d - b) * (d - c)));
// console.log(math);

// // 5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically
// // removing one letter from the end of the String and attaching it to the Front.


// var myStr = 'w3resource';
// var myArr = Array.from(myStr);
// var newArr = [];

// for (let i = 0; i < myStr.length;) {
//     newArr.push(myArr.pop());
//     i++;
// }
// var newStr = newArr.join("");
// console.log(newStr);

// // 6. Write a JavaScript program to determine whether a given year is a leap yearin the Gregorian calender.

// function leapyear(year) {
//     if (year % 4 != 0) {
//         console.log("not leap");
//     } else if (year % 4 == 0 && year % 100 != 0) {
//         console.log("leap year");
//     } else if (year % 4 == 0 && year % 100 == 0 && year % 400 != 0) {
//         console.log("not leap year");
//     } else {
//         console.log("leap year");
//     }

// }
// leapyear(2016);
// leapyear(2000);
// leapyear(1700);
// leapyear(1800);
// leapyear(100);

// // 7. Write a JavaScript program to find 1 st January is being a Sunday between 2014 and 2050.

// for (let year = 2014; year <= 2050; year++) {
//     const d = new Date(year, 0, 1);
//     if (d.getDay() === 0) {
//         console.log("1st January is being a Sunday" + year);
//     }
// }

// // 8. Weite a JavaScript program where the program takes a random(test between 1 to 10, the user is then prompted to input a guess number.if the user input matches with
// // guess number, the program will display a message "Not matched".

// var randomNum = Math.floor(Math.random() * 10 + 1);
// var guessNum = 5;
// if (guessNum === randomNum) {
//     console.log('Good Work');
// } else {
//     console.log('Not Matched');
// }
// // 9. Write a JavaScript program to calculate days left until next Christmas.
// today = new Date();
// var cmas = new Date(today.getFullYear(), 11, 25);
// if (today.getMonth() == 11 && today.getDate() > 25) {
//     cmas.getFullYear(cmas.getFullYear() + 1);
// }
// var one_day = 1000 * 60 * 60 * 24;
// console.log(Math.ceil(cmas.getTime() - today.getTime() / (one_day)) + "days left until Christmas!")

// // 10. Write a JavaScript program to calculate multiplication and division of two number(input form user)
// // 1 st number = 12;
// // 2 nd number = 10;

// function multiplyBy() {
//     num1 = document.getElementById('firstNum').value;
//     num2 = document.getElementById('secondNum').value;
//     document.getElementById("result").innerHTML = num1 * num2;
// }

// function dividedBy() {
//     num1 = document.getElementById('firstNum').value;
//     num2 = document.getElementById('secondNum').value;
//     document.getElementById("result").innerHTML = num1 / num2;
// }

// // 11..Write a JavaScript program to get the website URL(loading page).

// document.querySelector(".get-url").innerHTML = window.location.href;
// document.getElementById("url2").innerHTML = document.URL;

// // 12. Write a JavaScript exercise to creat a variable using a user - defind name.

// const my_name = 'abcd';
// const num = 120;
// this[my_name] = num;
// console.log(this[my_name]);

// // 13. Write a JavaScript exercise to get the extension of a filename.

// filename = "abc.php";
// console.log(filename.split('.').pop());
// filename = "mein.js";
// console.log(filename.split('.').pop());

// // 14..Write a JavaScript program to get the difference between a given number and 13,if number is greater than 13
// // return double the absolute difference.

// function diff(num) {
//     if (num > 13) {
//         console.log(Math.abs(num - 13) * 2);
//     } else {
//         console.log(Math.abs(num - 13));
//     }
// }
// diff(23);

// // 15..Write a JavaScript program to compute the sum of the two given(test.if the two value are same, then returns triple their sum.

// function Sumtriple(x, y) {
//     if (x == y) {
//         return 3 * (x + y);
//     } else {
//         return (x + y);
//     }
// }
// console.log(Sumtriple(10, 20));
// console.log(Sumtriple(10, 10));

// // 16..Write a JavaScript program to compute the absolute difference between a specified
// // number and 19. Returns triple their absolute difference if the specified number is greater than 19.

// function diff_num(n) {
//     if (n <= 19) {
//         return (19 - n);
//     } else {
//         return (n - 19) * 3;
//     }
// }
// console.log(diff_num(12));
// console.log(diff_num(19));
// console.log(diff_num(22));

// // 17..Write a JavaScript program to check two given numbers and return true if one of the number is 50 or
// // if their sum is 50.

// function test50(x, y) {
//     return ((x == 50 || y == 50) || (x + y == 50));
// }
// console.log(test50(50, 50));
// console.log(test50(20, 50));
// console.log(test50(20, 20));
// console.log(test50(20, 30));

// // 18..Write a JavaScript program to check whether a given(test is within 20 of 100 or 400.

// function testhundred(x) {
//     return ((Math.abs(100 - x) <= 20) ||
//         (Math.abs(400 - x) <= 20));
// }
// console.log(testhundred(10));
// console.log(testhundred(90));
// console.log(testhundred(99));
// console.log(testhundred(199));
// console.log(testhundred(200));

// // 19..Write a JavaScript program to check from two given integers, whether one is positive
// // and another one is negative.

// function positive_negative(x, y) {
//     if ((x < 0 && y > 0) || x > 0 && y < 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(positive_negative(2, 2));
// console.log(positive_negative(-2, 2));
// console.log(positive_negative(2, -2));
// console.log(positive_negative(-2, -2));

// // 20..Write a JavaScript program to create a new string adding "PY" in front of a given string
// // if the given string begins with "PY" then original string.

// function string_check(str1) {
//     if (str1 === null || str1 === undefined || str1.substring(0, 2) === 'Py') {
//         return str1;
//     }
//     return "Py" + str1;
// }
// console.log(string_check("Python"));
// console.log(string_check("thon"));

// // 21..Write a JavaScript program to remove a character at the specified position of a given
// // String and return the new String.

// function remove(string, index) {
//     return string.replace(string.charAt(index), );
// }
// console.log(remove("Python", 0));
// console.log(remove("Python", 3));
// console.log(remove("Python", 4));

// // 22..Write a JavaScript program to create a new string from a given string changing the position
// // of first and last characters.The string length must be greater than or equal to 1.

// function first_last(str1) {
//     if (str1.length <= 1) {
//         return str1;
//     } {
//         mid_char = str1.substring(1, str1.length - 1);
//         return (str1.charAt(str1.length - 1)) + mid_char + str1.charAt(0);
//     }
// }
// console.log(first_last("a"));
// console.log(first_last("ab"));
// console.log(first_last("abc"));
// console.log(first_last("abcd"));

// // 23..Write a JavaScript program to create a new string from a given string with the first character
// // of the given String added at the front and back.

// function front_back(str) {
//     first = str.substring(0, 1);
//     return first + str + first;
// }
// console.log(front_back("a"));
// console.log(front_back("ab"));
// console.log(front_back("abc"));
// console.log(front_back("abcd"));
// console.log(front_back("abce"));

// // 24..Write a JavaScript program to check whether a given position number is a multiple of 3 or a multiple of 7.

// function position_num(x) {
//     if (x % 3 == 0 || x % 7 == 0) {
//         return true;
//     } {
//         return false;
//     }
// }
// console.log(position_num(20));
// console.log(position_num(30));
// console.log(position_num(10));
// console.log(position_num(15));


// // 25..Write a JavaScript program to create a new string from a given string string taking
// // the last 3 characteras and added at both the front and back.The String length must be 3 or
// // more.
// function front_back3(str) {
//     if (str.length >= 3) {
//         str_len = 3;
//         back = str.substring(str.length - 3);
//         return back + str + back;
//     } else {
//         return false;
//     }
// }
// console.log(front_back3("abc"));
// console.log(front_back3("ab"));
// console.log(front_back3("abcd"));
// console.log(front_back3("abc"));

// // 26..Write a JavaScript program to check whether a string starts with 'Java'and false otherwise.

// function start_spac_str(str) {
//     if (str.length < 4) {
//         return false;
//     }
//     front = str.substring(0, 4);
//     if (front == 'Java') {
//         return true;
//     } else {
//         return false;

//     }
// }
// console.log(start_spac_str("JavaScript"));
// console.log(start_spac_str("Java"));
// console.log(start_spac_str("Python"));

// // 27..Write a JavaScript program to check whether two given(test values are in the range
// // 50.99(inclusive).Return true if either of them are in the said range.

// function numbers(x, y) {
//     if (x >= 50 && x <= 99 || y >= 50 || y <= 99) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(numbers(12, 15));
// console.log(numbers(42, 55));
// console.log(numbers(222, 315));
// console.log(numbers(322, 415));


// // 28..Write a JavaScript program to check whether two given(test values are in the range
// // 50.99(inclusive).Return true if one or more of them are in the said range.

// function check(a, b) {
//     for (var i = 50; i < 100; i++) {
//         if (a == i || b == i) {
//             return true;
//         } else {
//             return false
//         }
//     }
// }
// console.log(check(1, 50));
// console.log(check(10, 50));
// console.log(check(150, 250));
// console.log(check(200, 350));
// console.log(check(100, 450));

// // 29..Write a JavaScript program to check whether a string "Script"presents at 5 th(index4)
// // position in a given String, if "Script"present in the String return the String without "Script"otherwise
// // return the original one.

// function checkString(str) {
//     var x = str.indexOf("script");
//     if (x === 4) {
//         return str.indexOf("Script");
//     } else {
//         return str;
//     }
// }
// console.log(checkString("JavaScript"));
// console.log(checkString("CoffeeScript"));

// // 30..Write a JavaScript program to find the largest of three given integers.

// function largest(a, b, c) {
//     if (a > b && a > c) {
//         return a;
//     } else if (b > a && b > c) {
//         return b;
//     } else {
//         return c;
//     }
// }
// console.log(largest(1000, 510, 440));
// console.log(largest(0, -10, -20));
// console.log(largest(1, 0, 1));

// // 31. Write a JavaScript program to find a value which is nearest to 100 from two diffrent
// // given(test values.

// function value_nearest(sum1, sum2) {
//     var x = 100 - sum1;
//     var y = 100 - sum2;
//     if (x < y) {
//         return sum1;
//     } else {
//         return sum2;
//     }

// }
// console.log(value_nearest(90, 89));
// console.log(value_nearest(90, 90));
// console.log(value_nearest(-99, -89));

// // 32..Write a JavaScript program to check whether two numbers are in range 40. .60 or in the
// // range 70. .100 inclusive.

// function number_range(x, y) {
//     if ((x >= 40 && x <= 60 && y >= 40 && y <= 60) ||
//         (x >= 70 && x <= 100 && y >= 70 && y <= 100)) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(number_range(44, 56));
// console.log(number_range(70, 95));
// console.log(number_range(50, 89));

// // 33..Write a JavaScript program to find the larger number from the two given positive intergers,
// // the two numbers are in the large 40. .60 inculsive.

// function large_number(x, y) {
//     if (x >= 40 && x <= 60 && y >= 40 && y <= 60 && x > y) {
//         return x;
//     } else if (x >= 40 && x <= 60 && y >= 40 && y <= 60 && x < y) {
//         return y;
//     } else {
//         return "Number don't fit in range";
//     }
// }
// console.log(large_number(45, 60));
// console.log(large_number(25, 60));
// console.log(large_number(45, 80));

// // 34..Write a JavaScript program to check whether a specified character exists within
// // the 2 nd to 4 th position in a given String.

// function check_str(str, chr) {
//     let st = str.substr(1, 3);
//     return st.includes(chr);
// }
// console.log(check_str("Python", "y"));
// console.log(check_str("JavaScript", "a"));
// console.log(check_str("Console", "o"));
// console.log(check_str("Console", "C"));
// console.log(check_str("Console", "e"));
// console.log(check_str("JavaScript", "S"));


// // 35..Write a JavaScript program to check whether the last digit of the three given position
// // integers is same.f

// function digit(x, y, z) {
//     if (x > 0 && y > 0 && z > 0) {
//         return (x == y && y == z && x == z);
//     } else {
//         return false;
//     }
// }
// console.log(digit(10, 10, 10));
// console.log(digit(10, 10, 21));

// // 36..Write a JavaScript program to create new string with first 3 characters are in lower
// // case from a given String.If the string length is less than 3 convert all the character in upper
// // case .

// function upper_lower(str) {
//     if (str.length < 3) {
//         return str.toUpperCase();
//     } {
//         front_part = (str.substring(0, 3)).toLowerCase();
//         back_part = str.substring(3, str.length);
//         return front_part + back_part;
//     }
// }
// console.log(upper_lower("Python"));
// console.log(upper_lower("Py"));
// console.log(upper_lower("JavaScript"));

// // 37..Write a JavaScript program to check the total marks of a student in various examination
// // the student will get A + grade if the total marks are in the range 89. .100 inclusive,
// // if the examinaion is "Final-exam." the student will get A + grade and total marks must be greater
// // than or equal to 90. Return true if the student get A + grade or false otherwise.

// function exam_status(tomarks, is_exam) {
//     if (is_exam) {
//         return tomarks >= 90;
//     } else {
//         return (tomarks >= 89 && tomarks <= 100);
//     }
// }
// console.log(exam_status("78", ""));
// console.log(exam_status("88", "true"));
// console.log(exam_status("99", "true"));

// // 38..Write a JavaScript program to compute the sum of the two given integers,
// // if the sum is in the range 50.80 return 65 other wise return 80.

// function sort_sum(x, y) {
//     const sum_num = x + y;
//     if (sum_num >= 50 && sum_num <= 80) {
//         return 65;
//     } else {
//         return 80;
//     }
// }
// console.log(sort_sum(30, 20));
// console.log(sort_sum(90, 80));

// // 39..Write a JavaScript program to check from two given integers whether one of them is 8 or
// // their sum or differnce is 8.

// function sum(x, y) {
//     if (x == 8 || y == 8 || x + y == 8) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(sum(7, 8));
// console.log(sum(16, 8));
// console.log(sum(24, 32));
// console.log(sum(17, 18));
// console.log(sum(20, 25));
// console.log(sum(34, 56));

// // 40. Write a JavaScript program to check three given number if the three numbers are same
// // return 30 otherwise return 20 and if two numbers are same return 40.

// function three_number(x, y, z) {
//     if (x === y && x === z && y === z) {
//         return 30;
//     } else if (x === y || x === z || y === z) {
//         return 20;
//     } else {
//         return 40;
//     }
// }
// console.log(three_number(8, 8, 8));
// console.log(three_number(9, 12, 15));
// console.log(three_number(20, 30, 40));

// // 41. Write a JavaScript program to check whether three given numbers are increasing in stric
// // mode or in soft mode.
// function strick_soft(x, y, z) {
//     if (y > x && z > y) {
//         return "strick mode"
//     } else if (z > y) {
//         return "soft mode"
//     } else {
//         return undefined;
//     }
// }
// console.log(strick_soft(10, 15, 31));
// console.log(strick_soft(24, 22, 31));
// console.log(strick_soft(50, 21, 15));

// // 42. Write a JavaScript program to check from three given numbers(non negative integers)
// // that two or all of them have the same rightmost digit.

// function negative_integer(x, y, z) {
//     return (x % 10 === y % 10) ||
//         (x % 10 === z % 10) ||
//         (y % 10 === z % 10);

// }
// console.log(negative_integer(22, 32, 42));
// console.log(negative_integer(102, 362, ));
// console.log(negative_integer(20, 22, 45));

// // 43. Write a JavaScript program to check from three given integers that whether number is
// // greater than or equal to 20 and less than one of the others.

// function greater_than(x, y, z) {
//     return (x >= 20 && x < y || x < z) ||
//         (y >= 20 && (y < x || y < z)) ||
//         (z >= 20 && (z < y || z < x));
// }
// console.log(greater_than(23, 45, 10));
// console.log(greater_than(23, 23, 10));
// console.log(greater_than(21, 66, 75));

// // 44. Write a JavaScript program to check from three given(test values and return true
// // if one of the number is 15 or if their sum or differnce is 15.

// function sum(a, b) {
//     let sum = a + b;
//     let diff = a - b;
//     return ((a == 15 || b == 15) || (sum == 15 || diff == 15))
// }

// console.log(sum(7, 8));
// console.log(sum(25, 10));
// console.log(sum(100, 10));
// console.log(sum(25, 10));
// console.log(sum(20, 10));
// console.log(sum(9, 25));

// // 45. Write a JavaScript program to check from two given non - negative integers that whether
// // one of the number(not both) is multiple of 7 or 11.

// function negative_int(p, q) {
//     if (p % 7 == 0 || q % 7 == 0) {
//         return true;
//     } else if (q % 11 == 0 || q % 11 == 0) {
//         return true;
//     } else {
//         return false;
//     }

// }
// console.log(negative_int(14, 21));
// console.log(negative_int(14, 20));
// console.log(negative_int(16, 20));

// // 46. Write a JavaScript program to check whether given number is presents in the
// // range 40. .10000.

// function test_digit(x, y, n) {
//     if (n < 40 || n > 10000) {
//         return true;
//     } else if (n >= x && n <= y) {
//         return false;
//     } else {
//         return false;
//     }
// }
// console.log(test_digit(40, 4000, 45));
// console.log(test_digit(80, 230, 79));
// console.log(test_digit(89, 4000, 30));

// // 47. Write a JavaScript program to reverse a given string.
// function string_reverse(str) {
//     return str.split("").reverse().join("");
// }
// console.log(string_reverse("welcome"));
// console.log(string_reverse("www"));
// console.log(string_reverse("JavaScript"));

// // 48. Write a JavaScript program to repalce every character in a given string with the character
// // following it in the alphabete.

// function repalce(str) {
//     let newStr = "";
//     for (let i = 0; i < str.length; i++) {
//         let code = str.charCodeAt(i);
//         let letter = String.fromCharCode(code + 1);
//         newStr += letter;
//     }
//     return newStr;
// }
// console.log(repalce("Python"));
// console.log(repalce("W3R"));
// console.log(repalce("php"));
// console.log(repalce("HTML"));

// // 49. Write a JavaScript program to convert a given number to hours and minutes.
// function time_convert(num) {
//     var hours = Math.floor(num / 60);
//     var minutes = num % 60;
//     return hours + ":" + minutes;
// }
// console.log(time_convert(71));
// console.log(time_convert(451));
// console.log(time_convert(1441));


// // 50. Write a JavaScript program to capitalize the first letter of each word of a given string.
// function first_cap(str) {
//     var cap = str.substring(0, 1).toUpperCase();
//     var rest = str.substring(1, str.length).toLowerCase();
//     return cap + rest;
// }
// console.log(first_cap("Write a JavaScript Program to capitalize the first letter of each word"))

// // 51. Write a JavaScript program to convert the letters of a given string in alphabetical order.
// function alphavetical(str) {
//     return str.split("").sort().join("");
// }
// console.log(alphavetical("Phython"));
// console.log(alphavetical("Java"));

// // 52. Write a JavaScript program to check whether the characters a and b are separated by exactly
// // 3 place anywhere(at least once) in a given String.
// function obj(str) {
//     var a = str.split("").indexOf('a');
//     var b = str.split("").indexOf('b');

//     return ((b - a) == 4);
// }
// console.log(obj("chainsbrak"));
// console.log(obj("pain borrowed"));
// console.log(obj("abCheck"));

// // 53. Write a JavaScript program to count the number of vowels in a given string.

// function vowels(str) {
//     let arr = ['a', 'e', 'i', 'o', 'u'],
//         num = 0;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] === str[j].toLowerCase()) {
//                 num += 1
//             }
//         }
//     }
//     return `The amount of vowels is '${num}'`;
// }
// console.log(vowels("Python"));
// console.log(vowels("w3resource.com"));

// // 54. Write a JavaScript program to check from whether a given string contains equal number
// // of p 's and t' s.

// function check(str) {
//     var tCount = 0;
//     var pCount = 0;
//     for (i = 0; i < str.length; i++) {
//         if (str.charAt(i) == "t") {
//             tCount++;
//         } else if (str.charAt(i) == "p") {
//             pCount++;
//         }
//     }
//     if (tCount == pCount) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(check("paatpss"));
// console.log(check("paatps"));

// // 55. Write a JavaScript program to divide two positive numbers and return a string with
// // properly formatted commas.

// function divide_str(n1, n2) {
//     var div = Math.round(n1 / n2).toString();
//     result_array = div.split("");
//     if (n1 > 0 && n2 > 0) {
//         return result_array;
//     } else {
//         return " type a positive value";
//     }

// }
// console.log(divide_str(80, 6));

// // 56. Write a JavaScript program to create a new string of specified copies(positive number)
// // of a given String.
// function string_copies(str, n) {
//     if (n < 0) {
//         return false;
//     } else {
//         return str.repeat(n);
//     }
// }
// console.log(string_copies("abc", ));
// console.log(string_copies("abc", 0));
// console.log(string_copies("abc", -2));

// // 57. Write a JavaScript program to create a new string of 4 copies of the last 3 character
// // of a given original string.The length of the given string must be 3 and above.

// function new_string(str) {
//     if (str.length >= 3) {
//         result_str = str.substring(str.length - 3);
//         return result_str + result_str + result_str + result_str;
//     } else {
//         return false;
//     }
// }
// console.log(new_string("Python 3.0"));
// console.log(new_string("Js"));
// console.log(new_string("JavaScript"));

// // 58. Write a JavaScript program to extract the first half of a string of even length.
// function first_half(str) {
//     if (str.length % 2 == 0) {
//         return str.slice(0, str.length / 2);
//     } else {
//         return str;
//     }
// }
// console.log(first_half("python"));
// console.log(first_half("Html"));
// console.log(first_half("java"));

// // 59. Write a JavaScript program to create a new string without the first and last character
// // of a given string.
// function without_first(str) {
//     return str.substring(1, str.length - 1);
// }
// console.log(without_first("java"));
// console.log(without_first("python"));
// console.log(without_first("php"));

// // 60. Write a JavaScript program to concatenate two strings except their first character.

// function constructor(str1, str2) {
//     str1 = str1.substring(1, str1.length);
//     str2 = str2.substring(1, str2.length);
//     return str1 + str2;
// }
// console.log(constructor("java", "php"));
// console.log(constructor("Html", "Css"));

// // 61. Write a JavaScript program to move last three character to the start of a given string
// // the string length must be greater or equal to three.
// function right_three(str) {
//     if (str.length > 1) {
//         return str.slice(-3) + str.slice(0, -3);
//     } else {
//         return str;
//     }
// }
// console.log(right_three("python"));
// console.log(right_three("welcome"));
// console.log(right_three("java"));


// // 62. Write a JavaScript program to create a string using the middle three character of a
// // given string of odd length.The string length must be greater or equal to three.

// function middle_three(str) {
//     if (str.length % 2 != 0) {
//         mid = (str.length + 1) / 2; {
//             return str.slice(mid - 2, mid + 1);

//         }
//     } else {
//         return str;
//     }
// }
// console.log(middle_three("abcdef"));
// console.log(middle_three("javaScript"));
// console.log(middle_three("python"));

// // 63. Write a JavaScript program to concatenate two string and return the result.If the length
// // of the strings are not same then remove the characters from the longer string.
// function str_con_cat(str1, str2) {
//     const m = Math.min(str1.length, str2.length);
//     return str1.substring(str1.length - m) + str2.substring(str2.length - m);

// }
// console.log(str_con_cat("Python", "js"));
// console.log(str_con_cat("abcs", "scdf"));

// // 64. Write a JavaScript program to test wherther a string end with "Script".The string length
// // must be greater or equal to 6.

// function end_script(str) {
//     if (str.substring(str.length - 6, str.length) == 'Script') {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(end_script("javaScript"));
// console.log(end_script("java Script"));
// console.log(end_script("java Scripts"));

// // 65. Write a JavaScript program to display the city name if the string begins with "Los"
// // or "New" otherwise return blank.

// function city_name(str) {
//     if (str.length >= 3 && ((str.substring(0, 3) == 'Los') || (str.substring(0, 3) == 'New'))) {
//         return str;
//     } else {
//         return "";
//     }
// }
// console.log(city_name('New Yark'));
// console.log(city_name('Los Angles'));
// console.log(city_name('London'));

// // 66. Write a JavaScript program to create a new string from a given string, removing the
// // first and last characters of the string if the first or last character are "P".Return
// // the original string if the condition is not satified.

// function new_string(str) {
//     let start_pos = 0;
//     let end_pos = str.length;
//     if (str.length > 0 && str.charAt(0) == 'p') {
//         start_pos = 1;
//     }
//     if (str.length > 1 && str.charAt(str.length - 1) == 'p') {
//         end_pos--;
//     }
//     return str.substring(start_pos, end_pos);
// }
// console.log(new_string('PythonP'));
// console.log(new_string('Python'));
// console.log(new_string('javaScript'));

// // 67. Write a JavaScript program to create a new string without the first and last n characters
// // from a given string.The string length must be greater or equal to n.

// function two_string(str, n) {
//     first_part = str.substring(0, n);
//     last_part = str.substring(str.length - n);
//     return first_part + last_part;
// }
// console.log(two_string('python', 2));
// console.log(two_string('javaScript', 4));

// // 68. Write a JavaScript program to compute the sum of three elements of a given array of
// // integers of length 3.

// function array(nums) {
//     return nums[0] + nums[1] + nums[2];

// }
// console.log(array([10, 32, 20]));
// console.log(array([30, 32, 54]));
// console.log(array([3, 6, 9]));


// // 69. Write a JavaScript program to rotate the elements left of a given array of integers of length 3.

// function rotate_left(array) {
//     return [array[1], array[2], array[0]];
// }
// console.log(rotate_left([3, 4, ]));
// console.log(rotate_left([4, , 6]));
// console.log(rotate_left([2, , 7]));

// // 70. Write a JavaScript program to check whether 1 appears in first or last position of a given
// // array of integers.The array length must be greater or equal to 1.

// function last_1(nums) {
//     var end_pos = nums.length - 1;
//     return nums[0] == 1 || nums[end_pos] == 1;
// }
// console.log(last_1([1, 3, ]));
// console.log(last_1([1, 3, , 1]));
// console.log(last_1([2, 4, 6]));

// // 71..Write a JavaScript program to check whether the first and last elements are equal of
// // a given array of integers length 3.

// function first_last_same(nums) {
//     var end = nums.length - 1;
//     if (nums.length >= 1) {
//         return nums[0] == nums[end];
//     } else {
//         return false;
//     }
// }
// console.log(first_last_same([10, 20, 30]));
// console.log(first_last_same([10, 20, 30, 10]));
// console.log(first_last_same([20, 20, 20]));

// // 72..Write a JavaScript program to reverse the element of a given array of integers length3.
// function reverse3(array) {
//     if (array.length >= 3) {
//         return array.reverse();
//     } else {
//         return false;
//     }
// }
// console.log(reverse3([4, 3, ]));
// console.log(reverse3([6, 34, 35]));
// console.log(reverse3([7, 9, ]));

// // 73..Write a JavaScript program to find the large value between the first or last and
// // set all the other elements with that value.Display the new array.
// function test1(arr) {
//     return arr.fill(Math.max(...arr));
// }
// console.log(test1([20, 30, 40]));
// console.log(test1([-7, -9, 0]));
// console.log(test1([12, 10, 3]));

// // 74..Write a JavaScript program to create a new array taking the middle elements
// // of the two arrays of(test and each length 3.

// function middle_element(a, b) {
//     var new_arr = [];
//     new_arr.push(a[1], b[1]);
//     return new_arr;
// }
// console.log(middle_element([1, 3, 4], [4, 8, 6]));
// console.log(middle_element([4, 3, ], [5, 6, 7]));
// console.log(middle_element([6, , 4], [9, 8, 45]));

// // 75..Write a JavaScript program to create a new array taking the first and last elements from
// // a given array of integers and length must be greater or equal to 1.

// function started(nums) {
//     var new_arr = [];
//     new_arr.push(nums[0], nums[nums.length - 1]);
//     return new_arr;
// }
// console.log(started([3, 4, ]));
// console.log(started([10, 40, 50]));
// console.log(started([20, 40, 49]));

// // 76..Write a JavaScript program to test whether an array of integers of length 2 contain
// // 1 or a 3.

// function contain13(nums) {
//     if (nums.indexOf(1) != -1 || nums.indexOf(3) != -1) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(contain13([1, ]));
// console.log(contain13([2, 3]));
// console.log(contain13([7, ]));

// // 77..Write a JavaScript program to test whether an array of integers of length 2 does not
// // contain 1 or a 3.

// function is13(nums) {
//     if (nums.indexOf(1) == -1 && nums.indexOf(3) == -1) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(is13([7, 8]));
// console.log(is13([3, 2]));
// console.log(is13([0, 1]));

// // 78..Write a JavaScript program to test whether a given array of integers contain 30 and 40
// // twice.The array length should be 0, 1, or 2.

// function twice30(array1) {
//     let a = array1[0];
//     let b = array1[1];
//     return (a == 30 && b === 30) || (a === 40 && b === 40);
// }
// console.log(twice30([30, 30]));
// console.log(twice30([40, 40]));
// console.log(twice30([20, 20]));
// console.log(twice30([30]));

// // 79..Write a JavaScript program to swap the first last elements of a given array of integers
// // The array length should be at least 1.

// function swap(arra) {
//     [arra[0], arra[arra.length - 1]] = [arra[arra.length - 1], arra[0]];
//     return arra;
// }
// console.log(swap([1, 2, 3, 4]));
// console.log(swap([0, 2, 1]));
// console.log(swap([3]));

// // 80..Write a JavaScript program to add two digits of a given positive(test of length two.

// function add_two_digit(n) {
//     return n % 10 + Math.floor(n / 10);

// }
// console.log(add_two_digit(25));
// console.log(add_two_digit(22));
// console.log(add_two_digit(35));

// // 81..Write a JavaScript program to add two positive integers without carry.
// function positive_int(a, b) {
//     return (a + b) % 1000;
// }
// console.log(positive_int(222, 911));
// console.log(positive_int(200, 900));

// // 82..Write a JavaScript program to find the longest string from a given array of strings.
// function longest_int(str_ara) {
//     var max = str_ara[0].length;
//     str_ara.map(v => max = Math.max(max, v.length));
//     result = str_ara.filter(v => v.length == max);
//     return result;
// }
// console.log(longest_int(['a', 'aa', 'aaa', 'aaaaa', 'aaaa']));

// // 83..Write a JavaScript program to replace each character of a given string by the next
// // one in the English alphabet.
// function repalce(str) {
//     const all_chars = str.split("");
//     for (let i = 0; i < all_chars.length; i++) {
//         let n = all_chars[i].charCodeAt() - 'a'.charCodeAt();
//         n = (n + 1) % 26;
//         all_chars[i] = String.fromCharCode(n + 'a'.charCodeAt());
//     }
//     return all_chars.join("");
// }
// console.log(repalce("abcdsfa"));

// // 84..Write a JavaScript code to divide a given array of position integers into two parts.
// // Fist element gose to first part, second element goes to second part, and third element goes to
// // first part so on.Now compute the sum of two parts and store into an array of size two.

// function alternate(arr) {
//     var result = [0, 0];
//     for (i = 0; i < arr.length; i++) {
//         if (i % 2) result[1] += arr[i];
//         else result[0] += arr[i];
//     }
//     return result;
// }
// console.log(alternate([1, 2, 3, 4, , 6, 7]));

// // 85..Write a JavaScript program to find the type of a given angle.
// function type_of_angle(angle) {
//     if (angle < 90) {
//         return "Acute angle.";
//     }
//     if (angle === 90) {
//         return "Right angle";
//     }
//     if (angle < 180) {
//         return "Obtuse angle";
//     }
//     return "Straight angle";
// }
// console.log(type_of_angle(47));
// console.log(type_of_angle(90));
// console.log(type_of_angle(145));
// console.log(type_of_angle(180));

// // 86..Write a JavaScript program to check whether two arrays of integers of same length are
// // similar if one array can be obtained from another array by swapping at most one pair of
// // elements.

// function swap(arr1, arr2) {
//     var len = arr1.length - 1;
//     for (var i = 0; i <= len; i++) {
//         if (arr1[i] !== arr2[i]) {
//             return false;
//         }
//         return true;
//     }
// }
// console.log(swap([10, 20, 30], [10, 20, 30]));
// console.log(swap([10, 20, 30], [30, 20, 10]));
// console.log(swap([10, 20, 30, 40], [10, 30, 20, 40]));

// // 87..Write a JavaScript program to check whether two given integers are similar or not,
// // if a given divisor divides both integers and it does not divide either.

// function checking_num(x, y, divisor) {
//     if (x % divisor === 0 && y % divisor === 0 || x % divisor !== 0 && y % divisor !== 0) {
//         return true;
//     }
//     return false;
// }

// console.log(checking_num(10, 20, ));
// console.log(checking_num(10, 20, 2));

// // 88..Write a JavaScript program to check whether it is possible to replace $ in a given
// // expression x $ y = z with one of the four signs + , -, * or / to obtain a correct expression.
// function check_art(x, y, z) {
//     console.log(checking_num(10, 30, 6));


//     return x + y == z || x * y == z || x / y == z || x - y == z;
// }
// console.log(check_art(10, 25, 35));
// console.log(check_art(10, 25, 250));
// console.log(check_art(30, 25, ));
// console.log(check_art(100, 25, 4.0));
// console.log(check_art(100, 25, 25));

// // 89..Write a JavaScript program to find the kth greatest element of a given array of integers

// function my_function(arra, a) {
//     return arra.sort().reverse()[a - 1];
// }
// console.log(my_function([1, 2, 6, 4, ], 3));
// console.log(my_function([-10, -25, -47, -36, 0], 0));


// // 90. Write a JavaScript program to find maximum possible sum of same of its k consecutive
// // numbers(numbers that follow each other in order.) of a given array of positive integers.
// function max_sum(arr, n) {
//     let maxSum = 0;
//     let max = 0;
//     for (let i = 0; i < arr.length; i++) {
//         max = arr[i];
//         for (let j = i + 1; j < n + i; j++) {
//             max += arr[j];
//         }
//         if (max > maxSum) {
//             maxSum = max;
//         }
//     }
//     return maxSum;
// }
// console.log(max_sum([1, 2, 3, 14, ], 2));
// console.log(max_sum([2, 3, , 1, 6], 3));
// console.log(max_sum([9, 3, , 1, 7], 2));

// // 91..Write a JavaScript program to find maximal difference between any two adjacent element
// // of a given array of integers.
// function FindMax(arr) {
//     let difArr = [];
//     for (let i = 0; i < arr.length - 1; i++) {
//         difArr.push(Math.abs(arr[i + 1] - arr[i]))
//     }
//     return Math.max(...difArr);
// }
// console.log(FindMax([1, 2, 3, 8, 9]));
// console.log(FindMax([1, 2, 3, 18, 9]));
// console.log(FindMax([13, 2, 3, 8, 9]));

// // 92..Write a JavaScript program to find maximal difference among all possible pairs of a
// // given array of integers.
// function array_max_diff(arr) {
//     var max_result = 0;
//     for (var i = 0; i < arr.length; i++) {
//         for (var k = 0; k != i && k < arr.length; k++) {
//             var diff = Math.abs(arr[i] - arr[k]);
//             max_result = Math.max(max_result, diff);
//         }
//         return max_result;
//     }
// }
// console.log(array_max_diff([1, 2, 3, 8, 9]));
// console.log(array_max_diff([1, 2, 3, 18, 9]));
// console.log(array_max_diff([13, 2, 3, 8, 9]));

// // 93..Write a JavaScript program to find the number which appears most in a given array of intgers.
// function array_element(arr) {
//     const ctr = [];
//     let ans = 0;
//     for (var i = 0; i < 10; i++) {
//         ctr.push(0);
//     }
//     for (var i = 0; i < arr.length; i++) {
//         ctr[arr[i] - 1]++;
//         if (ctr[arr[i]] - 1 > ctr[ans]) {
//             ans = arr[i] - 1;
//         }
//         return ans + 1;
//     }
// }
// console.log(array_element([1, 2, 3, 2, 2, 8, 1, 9]));

// // 94..Write a JavaScript program to replace all the numbers with a specified number of a given
// // array of(test.

// function array_element_replace(arr, old_value, new_value) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === old_value) {
//             arr[i] = new_value;
//         }
//         return arr;
//     }
// }
// num = [1, 2, 3, 2, 2, 8, 1, 9];
// console.log(`Original Array:${num}`);
// console.log(array_element_replace(num, 2, ));

// // 95..Write a JavaScript program to compute the sum of absolute differences of consecutive
// // numbers of a given array of integers.
// function sum_adj_diff(array) {
//     var result = 0;
//     for (var i = 1; i < array.length; i++) {
//         result += Math.abs(array[i] - array[i - 1]);
//     }
//     return result;
// }
// console.log(sum_adj_diff([1, 2, 3, 2, ]));

// // 96..Write a JavaScript program to find the shortest possible string which can create a string
// // to make it a palindrome by adding characters to the end of it.
// function build_string(str) {
//     strArra = str.split("");
//     for (let i = 0; i < str.length - 1; i++) {
//         if (strArra[i] !== strArra[strArra.length - i - 1])
//             strArra.splice(strArra.length - i, 0, strArra[i]);
//     }
//     return strArra.join("");
// }
// console.log(build_string("abcddc"));
// console.log(build_string("122"));

// // 97..Write a JavaScript program to switch case of the minimum possible number of letters
// // to make a given string written in the upper case or in the lower case .
// function change_case(new_str) {
//     let x = 0;
//     let y = 0;
//     for (let i = 0; i < new_str.length; i++) {
//         if (/[A-z]/.test(new_str[i])) {
//             x++;
//         } else y++;
//     }
//     if (y > x) return new_str.toLowerCase();
//     return new_str.toUpperCase();
// }
// console.log(change_case("Write"));
// console.log(change_case("php"));

// // 98..Write a JavaScript program to check whether it is possible to rearrange characters
// // of a given string in such way that it will become equal to another given string.
// function arrange(str1, str2) {
//     var first = str1.split("").sort().join("");
//     var second = str2.split("").sort().join("");
//     if (first === second) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(arrange('xyz', 'stre'));
// console.log(arrange('xyz', 'stref'));

// // 99..Write a JavaScript program to check whether there is at least one element which occurs in two given sorted arrays of(test.
// function check_common(array1, array2) {
//     for (var i = 0; i < array1.length; i++) {
//         if (array2.indexOf(array1[i] != -1))
//             return true;
//     }
//     return false;
// }
// console.log(check_common([1, 2, 3], [3, 4, ]));
// console.log(check_common([1, 2, 3], [2, 4, 6]));

// // 100..Write a JavaScript program to check whether a given string contains only Latin letters
// // and no two uppercase and no two lowercase letters are in adjacent position.
// function uppercase_lowercase(str) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === str[i + 1]) {}

//     }
//     return true;

// }
// console.log(uppercase_lowercase('xYr'));
// console.log(uppercase_lowercase('XXyx'));

// // 101..Write a JavaScript program to find the number of inversion of a given array of(test.
// function inversion(arr) {
//     var ctr = 0;
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = i + 1; j < arr.length; j++) {
//             if (arr[i] > arr[j])
//                 ctr++;
//         }
//     }
//     return ctr;
// }
// console.log(inversion([0, 3, 2, , 9]));
// console.log(inversion([1, 3, 4, , 7]));
// console.log(inversion([10, 33, 42, 15, -59]));

// // 102..Write a JavaScript program to find the maximal number from a given positive(test
// // by deleteing exactly one digit of the given number.
// function maxNumber(num) {
//     let str = num.toString()
//     arrMax = [];
//     for (i = 0; i < str.length; i++) {
//         arrMax.push(str.slice(0, i) + str.slice(i + 1));
//     }
//     return Math.max.apply(null, arrMax);
// }
// console.log(maxNumber(100));
// console.log(maxNumber(10));
// console.log(maxNumber(1245));

// // 103..Write a JavaScript program to find two elements of the array such that their absolute
// // difference is not greater than a given(test but is as close to the said(test.
// function diff_values(arr, n) {
//     var max_val = -1;
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = i + 1; j < arr.length; j++) {
//             var x = Math.abs(arr[i] - arr[j]);
//             if (x <= n) {
//                 max_val = Math.max(max_val, x)
//             }
//         }
//     }
//     return max_val;
// }
// console.log(diff_values([12, 10, 33, 34], 10));
// console.log(diff_values([12, 10, 33, 34], 24));
// console.log(diff_values([12, 10, 33, 34], 40));

// // 104..Write a JavaScript program to find the number of times to replace a given number with
// // the sum of its digit until it convert to a single digit number.
// function digit_to(num) {
//     let temp = num,
//         count = 0;
//     while (temp >= 10) {
//         let arr = temp.toString().split("").map(Number)
//         temp = arr.reduce((total, v) => total + v);
//         count++
//     }
//     return count;
// }
// console.log(digit_to(123));
// console.log(digit_to(156));

// // 105..Write a JavaScript program to divide an(test by another(test as long as the
// // result is an(test and return the result.
// function result(num, d) {
//     if (d == 1)
//         return num;
//     else {
//         while (num % d === 0) {
//             num /= d;
//         }
//         return num;
//     }
// }
// console.log(result(-12, 2));
// console.log(result(13, 2));
// console.log(result(13, 1));

// // 106..Write a JavaScript program to find the number of sorted pairs formed by its element
// // of a given array of integers such that one element in the pair is divisible by the other one

// function arr_pairs(arr) {
//     var result = 0;
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = i + 1; j < arr.length; j++) {
//             if (arr[i] % arr[j] === 0 || arr[j] % arr[i] === 0) {
//                 result++;
//             }
//         }
//     }
//     return result;
// }
// console.log(arr_pairs([1, 2, 3]));
// console.log(arr_pairs([2, 4, 6]));
// console.log(arr_pairs([2, 4, 16]));

// // 107..Write a JavaScript program to create the dot products of two given 3 D vectors.

// function dot_product(vec1, vec2) {
//     var result = 0;
//     for (var i = 0; i < 3; i++) {
//         result += vec1[i] * vec2[i];
//     }
//     return result;
// }
// console.log(dot_product([1, 2, 3], [1, 2, 3]));
// console.log(dot_product([2, 4, 6], [2, 4, 6]));
// console.log(dot_product([1, 1, 1], [0, 1, -1]));

// // 108..Write a JavaScript program to sort an array of all prime numbers between 1 and a given
// //(test.
// function findPrime(num) {
//     let primeArr = [1, 3, 5];
//     for (let i = 6; i <= num; i++) {
//         if ((i + 1) % 6 == 0 || (i - 1) % 6 == 0) {
//             primeArr.push(i);
//         }
//     }
//     return primeArr;
// }
// console.log(findPrime(5));
// console.log(findPrime(11));
// console.log(findPrime(19));

// // 109..Write a JavaScript program to find the number of even values in sequence before the
// // first occurrence of a given number.
// function occurrence(arr_num, num) {
//     var result = 0;
//     for (var i = 0; i < arr_num.length; i++) {
//         if (arr_num[i] % 2 === 0 && arr_num[i] != num) {
//             result++;
//         }
//         if (arr_num[i] === num) {
//             return result;
//         }
//     }
//     return -1;
// }
// console.log(occurrence([1, 2, 3, 4, 5, 6, 7, 8], 5));
// console.log(occurrence([1, 3, 5, 6, 7, 8], 6));

// // 110..Write a JavaScript program to check a number from three given number where two numbers
// // are equal, find the third one.
// function find_all(x, y, z) {
//     if ((x !== y) && (x !== z) && (y !== z))
//         return "Three number are unequal";
//     if (x == y) return z;
//     if (x == z) return y;
//     return x;
// }
// console.log(find_all(1, 2, 2));
// console.log(find_all(1, 1, 2));
// console.log(find_all(1, 2, 3));

// // 111..Write a JavaScript program to find the number of trailing zeros in the decimal
// // representation of the factorial of a given number.
// function decimal(n) {
//     var result = 0;
//     for (var i = 5; i <= n; i += 5) {
//         var num = i;
//         while (num % 5 === 0) {
//             num /= 5;
//             result++;
//         }
//     }
//     return result;

// }
// console.log(decimal(8));
// console.log(decimal(9));
// console.log(decimal(10));

// // 112..Write a JavaScript program to calculate the sum of n + n / 2 + n / 4 + n / 8 + ...where n is a
// // positive(test and all divisions are(test.
// function calculate(num) {
//     var s_sum = 0;
//     while (num > 0) {
//         s_sum += num;
//         num = Math.floor(num / 2);
//     }
//     return s_sum;
// }
// console.log(calculate(8));
// console.log(calculate(9));
// console.log(calculate(26));


// // 113..Write a JavaScript program to check whether a given string represents a correct
// // sentence or not.A string is considered correct sentence if it starts with the capital
// // letter and ends with a full stop(.).
// function correct(str) {
//     let up = str.substring(0, 1);
//     let us = str.slice(-1);
//     if (up === up.toUpperCase() && us === '.') {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(correct("This is my first codding"));
// console.log(correct("This is my book"));
// console.log(correct("This is my house"));

// // 114..Write a JavaScript program to check whether a matrix or not.In linear algebra a diagonal
// // matrix is a matrix in which the entries outside the main diagonal are all zero(the digonal from the upper left to the lower right)

// function diagonal_matrix(user_matrix) {
//     for (var i = 0; i < user_matrix.length; i++) {
//         for (var j = 0; j < user_matrix.length; j++) {
//             if (i !== j && user_matrix[i][j] !== 0)
//                 return false;
//         }
//     }
//     return true;
// }
// console.log(diagonal_matrix([
//     [1, 0, 0],
//     [0, 2, 0],
//     [0, 0, 3]
// ]));
// console.log(diagonal_matrix([
//     [1, 0, 0],
//     [0, 2, 3],
//     [0, 0, 3]
// ]));

// // 115..Write a JavaScript program to find all the possible options to replace the hash in a string(Consists of digit and one hash(#)) with a digit to produce an(test divisible

// function hash(str) {
//     var result = [];
//     var strNew = str.split('');
//     for (var i = 0; i < 10; i++) {
//         strNew[1] = i;
//         if (strNew.join("") % 3 == 0) {
//             result.push(strNew.join(""));
//         }
//     }
//     return result;
// }
// console.log(hash("2#0"));
// console.log(hash("4#2"));

// // 116..Write a JavaScript program to check whether a given matrix is an identity matrix.

// function is_matrix(matrix_data) {
//     for (let i = 0; i < matrix_data.length; i++) {
//         for (let j = 0; j < matrix_data.length; j++) {
//             if (matrix_data[i][j] !== 1 && i === j || matrix_data[i][j] && i == j) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }
// console.log(is_matrix([
//     [1, 0, 0],
//     [0, 1, 0],
//     [0, 0, 1]
// ]));
// console.log(is_matrix([
//     [1, 0, 1],
//     [0, 1, 0],
//     [0, 0, 1]
// ]));
// // 117..Write a JavaScript program to check whether a given number is in a given range.
// function number(x, y, z) {
//     return y >= x && y <= z;
// }
// console.log(number(1, 2, 3));
// console.log(number(1, 2, -3));
// console.log(number(1, 1, 1.2, 1.3));

// // 118..Write a JavaScript program to check whether a given(test has an increasing digits sequence.

// function int(num) {
//     var arr_sum = ('' + num).split('');
//     for (var i = 0; i < arr_sum.length - 1; i++) {
//         if (parseInt(arr_sum[i]) >= parseInt(arr_sum[i + 1]))
//             return false;
//     }
//     return true;
// }
// console.log(int(123));
// console.log(int(1223));
// console.log(int(45677));
// // 119..Write a JavaScript program to check whether a point lies strictly inside a given circle.
// function check(a, b, c, d, e) {
//     var dist_point = (a - c) * (a - c) + (b - d) * (b - d);
//     e *= e;
//     if (dist_point < e) {
//         return true;
//     }
//     return false;
// }
// console.log(check(0, 0, 2, 4, 6));
// console.log(check(0, 0, 6, 8, 6));
// // 120..Write a JavaScript program to check whether a given matrix is lower triangular or not

// function triangle_matrix(user_matrix) {
//     for (var i = 0; i < user_matrix.length; i++) {
//         for (var j = 0; j < user_matrix.length[0]; j++) {
//             if (j > i && user_matrix[i][j] !== 0)
//                 return false;
//         }
//     }
//     return true;

// }
// console.log(triangle_matrix([
//     [1, 0, 0],
//     [2, 0, 0],
//     [0, 3, 3]
// ]));
// console.log(triangle_matrix([
//     [1, 0, 1][2, 0, 0],
//     [0, 3, 3]
// ]));
// // 121..Write a JavaScript program to check whether a given array of integers represents
// // either a strictly increasing or a strictly decreasing sequence.
// function increasing(num) {
//     if (num.length === 1) {
//         return true;
//     }
//     var num_direction = num[1] - num[0];
//     for (var i = 0; i < num.length - 1; i++) {
//         if (num_direction * (num[i + 1] - num[i]) <= 0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(increasing([1, 2, 3]));
// console.log(increasing([1, 2, 2]));
// console.log(increasing([-3, -2, -1]));

// // 122..Write a JavaScript program to check whether the members of a given array of integers
// // is a permutation of numbers from 1 to given intger.
// function permutation(input_arr, n) {
//     for (var i = 0; i < n; i++) {
//         if (input_arr.indexOf(i + 1) < 0)
//             return false;
//     }
//     return true;
// }
// console.log(permutation([1, 2, 3, 4, 5, 6], 6));
// console.log(permutation([1, 2, 3, 4, 5], 5));

// // 123..Write a JavaScript program to create the value of NOR of two given booleans.
// function booleans(a, b) {
//     return (!a && !b)
// }
// console.log(booleans(true, false));
// console.log(booleans(false, false));
// console.log(booleans(true, true));
// // 124..Write a JavaScript program to find the longest string from a given array.
// function longest_str_in(arr) {
//     let res = "";
//     let count = "0";
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length > count) {
//             count = arr[i].length;
//             res = arr[i];
//         }
//     }
//     return res;
// }
// console.log(longest_str_in(['ab', 'a', 'abc']))
// console.log(longest_str_in(['ab', 'ab', 'ab']))

// // 125..Write a JavaScript program to get the largest even number from an array of intgers.

// function max_even(arr) {
//     let maxEven = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0 && arr[i] > maxEven) {
//             maxEven = arr[i];
//         }
//     }
//     return maxEven;
// }
// console.log(max_even([20, 40, 200]));
// console.log(max_even([20, 40, 200, 301]));
// // 126..Write a JavaScript program to reverse the order of the bits in a given(test.

// function mirror_bits(n) {
//     return parseInt(n.toString(2).split("").reverse().join(""), 2);
// }
// console.log(mirror_bits(56));
// console.log(mirror_bits(98));

// // 127..Write a JavaScript program to find the smallest round number that is not less than
// // a given value.
// function nearest_round_num(num) {
//     while (num % 10) {
//         num++;
//     }
//     return num;
// }
// console.log(nearest_round_num(78));
// console.log(nearest_round_num(678));


// // 128..Write a JavaScript program to find the smallest prime number strictly greater than a given number

// function smallest_num(num) {
//     for (var i = 0;; i++) {
//         if (i > num && i % 2 !== 0) {
//             return i;
//         }
//     }
// }
// console.log(smallest_num(3));
// console.log(smallest_num(2));
// // 129..Write a JavaScript program to find the number of even digit in a given(test.
// var number = [341888436];
// function evenDigits(num) {
//     var count = 0;
//     var numArr = num.toString().split("");
//     for (var i = 0; i < numArr.length; i++) {
//         if (Number(numArr[i] % 2) == 0) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(evenDigits(123));
// console.log(evenDigits(1020));
// console.log(evenDigits(102));

// // 130..Write a JavaScript program to create an array of prifix sums of the given array.
// function prifix_sum(arr) {
//     var new_arr = [];
//     for (var i = 0; i < arr.length; i++) {
//         new_arr[i] = 0;
//         for (var j = 0; j < i + 1; j++) {
//             new_arr[i] += arr[j];
//         }
//     }
//     return new_arr;
// }
// console.log(prifix_sum([1, 2, 3, 4, 5]));
// console.log(prifix_sum([1, 2, -3, 4, 5]));

// // 131..Write a JavaScript program to find all distinct prime factors of a given(test.

// function check(num) {
//     arr = [];
//     for (let i = 2; i <= num; i++) {
//         if (num % i == 0) {
//             if (i == 2 || i % 2) {
//                 arr.push(i);

//             }
//             num /= i;
//         }
//     }
//     return arr;
// }
// console.log(check(100));
// console.log(check(109));
// console.log(check(200));
// console.log(check(400));
// console.log(check(50));
// // 132..Write a JavaScript program to check whether a given fraction is proper or not.

// function proper(num) {
//     if (num[0] < num[1]) {
//         console.log("Proper fraction");
//     } else {
//         console.log("Improper fraction");
//     }
// }
// console.log(proper([2, 3]));
// console.log(proper([4, 5]));

// // 133..Write a JavaScript program to change the characters(lower case) in a string where
// // a turns into z, b turns into y, c turns into x, .., n turns into m, m turns into n, ...., z
// // turns into a.
// function change_char(str1) {
//     var result = [];
//     for (var i = 0; i < str1.length; i++) {
//         var char_order = str1.charCodeAt(i) - 'a'.charCodeAt(0),
//             change_char = 25 - char_order + 'a'.charCodeAt(0);
//         result.push(String.fromCharCode(change_char));
//     }
//     return result.join("");
// }
// console.log(change_char("abdfhg"));
// console.log(change_char("Python"));

//  134..Write a JavaScript program to remove all characters from a given string that appear
//  more than once.
// function remove_duplicate_char(str) {
//     var arr_char = str.split("");
//     var result_arr = [];

//     for (var i = 0; i < arr_char.length; i++) {
//         if (str.indexOf(arr_char[i]) === str.lastIndexOf(arr_char[i]))
//             result_arr.push(arr_char[i]);
//     }
//     return result_arr.join("");
// }
// console.log(remove_duplicate_char("abcdfgcvbxzjf"));
// console.log(remove_duplicate_char("Python"));
// console.log(remove_duplicate_char("abcdfghj"));
// console.log(remove_duplicate_char("123456586"));

// 136..Write a JavaScript program to test whether a given(test is greater than 15
// return the given number, otherwise return 15.
// function test(num) {
//     while (num < 15) {
//         num++;
//     }
//     return num;
// }
// console.log(test('123'));
// console.log(test('10'));
// console.log(test('5'));


// 137..Write a JavaScript program to reverse the bits of a given 16 bits unsigned short(test.
// function reverse_bits(num) {
//     var result = 0;
//     for (var i = 0; i < 16; i++) {
//         result = result * 2 + (num % 2);
//         num = Math.floor(num / 2);
//     }
//     return result;
// }
// console.log(reverse_bits(12345));
// console.log(reverse_bits(10));
// console.log(reverse_bits(5));
// 138..Write a JavaScript program to find the position of a rightmost round number in an
// array of(test.
// function rightMost(arr) {
//     let round = -1;
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] % 10 == 0) {
//             round = i;
//         }

//     }
//     return round;
// }
// console.log(rightMost([1, 22, 34, 55, 78, 89, 23]));
// console.log(rightMost([11, 12, 34, 15, 18, 19, 23]));
// console.log(rightMost([14, 22, 44, 35, 78, 89, 53]));

// 139..Write a JavaScript program to check whether all the digits in a given number are the same or not.

// function test_same(num) {
//     const first = num % 10;
//     while (num) {
//         if (num % 10 !== first) return false;
//         num = Math.floor(num / 10);
//     }
//     return true;
// }
// console.log(test_same(1234));
// console.log(test_same(12222));
// console.log(test_same(1234567));
// 140. Write a JavaScript program to find the number of elements which presents in both of the given arrays.

// function test_both_array(arr1, arr2) {
//     var result = 0;
//     for (var i = 0; i < arr1.length; i++) {
//         for (var j = 0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[i]) {
//                 result++;
//             }
//         }
//     }
//     return result;
// }
// console.log(test_both_array([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]));
// console.log(test_both_array([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6]));
// console.log(test_both_array([1, 2, 3, 4, 5], [11, 22, 33, 44, 55]));

// 141..Write a JavaScript program to simplify a given absolute path for a file in Unix - style.
// function simplify_path(main_path) {
//     const parts = main_path.split('/');
//     const new_path = [];
//     let length = 0;
//     for (var i = 0; i < parts.length; i++) {
//         const part = parts[i];
//         if (part === '.' || part === '' || part === '..') {
//             if (part === '..' && length > 0) {
//                 length--;
//             }
//             continue;
//         }
//         new_path[length++] = part;
//     }
//     if (length === 0) {
//         return '/';
//     }
//     let result = '';
//     for (var i = 0; i < length; i++) {
//         result += `/${new_path[i]}`;
//     }
//     return result;
// }
// console.log(simplify_path("/home/var/./www/../html//sql"));
// 142..Write a JavaScript program to sort the strings of a given array of string in the order
// of increasing lengths.
// function sort_by_str_length(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = 0; j < arr.length; j++) {
//             if (arr[i].length > arr[j].length) {
//                 const m = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = m;
//             }
//         }
//     }
//     return arr;
// }
// var arr = ['xyz', 'abc', 'cde', 'efg', 'bb', 'wer', 'rty']
// console.log('Original array;', arr);
// console.log(sort_by_str_length(['xyz', 'nmo', 'pqr', 'rst', 'uvw', '', 'a', 'b']));

// 143..Write a JavaScript program to break an address of an Url and put it 's part into an array.
// function Url(str) {
//     let s = str();
//     return [s.slice(0, s.indexOf(".")),
//         s.slice(s.indexOf("//") + 2, s.indexOf(".",
//             s.indexOf(".") + 1)),
//         s.slice(s.indexOf("/", s.lastIndexOf(".")))
//     ];
// }
// console.log(Url("https://www.w3resource.com/JsvaScript-exercises/"))

// 144..Write a JavaScript program to find the maximum(test n such that 1 + 2 + ... + n <= a a given intger.

// function max(val) {
//     var s = 0;
//     var i = 0;
//     while (s <= val) {
//         s += i++;
//     }
//     return i - 2;
// }
// console.log(max(11));
// console.log(max(23));
// 145..Write a JavaScript program to compute the sum of cubes of all(test from 1 to a given(test.
// function sum_of_cubes(num) {
//     var sumn = 0;
//     for (var i = 0; i <= num; i++) {
//         sumn += Math.pow(i, 3);
//     }
//     return sumn;
// }
// console.log(sum_of_cubes(3));
// console.log(sum_of_cubes(4));
// 146..Write a JavaScript program to compute the sum of all digit that occur in a given string.
// function occur(dstr) {
//     var dsum = 0;
//     for (var i = 0; i < dstr.length; i++) {
//         if (/[0-9]/.test(dstr[i])) dsum += parseInt(dstr[i])
//     }
//     return dsum;
// }
// console.log(occur("abccd12efg9"));
// console.log(occur("w3resources"));


// 147..Write a JavaScript program to swap two halvess of a given array of integers of even length.
// function swap(arr) {
//     let part1 = arr.slice(0, Math.floor(arr.length / 2));
//     let part2 = arr.slice(0, Math.floor(arr.length / 2));
//     return [...part2, ...part1];
// }
// console.log(swap([1, 2, 3, 4, 5, 6]));
// console.log(swap([1, 2, 3, 4, 5, 6, 7]));
// 148..Write a JavaScript program to change the capitalization of all letters in a given string.
// function capitalize(s) {
//     let str = s.split("");
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === str[i].toLowerCase()) {
//             str[i] = str[i].toUpperCase();
//         } else str[i] = str[i].toLowerCase();
//     }
//     return str.join("");
// }
// console.log(capitalize('w3resources'));
// console.log(capitalize('javascript'));

// 149..Write a JavaScript program to swap pairs of adjacent digits of a given(test of even length.
// function swap_pairs(num) {
//     let arr = num.toString().split("");
//     for (let i = 0; i < arr.length - 1; i = i + 2) {
//         console.log(i);
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//     }
//     return +arr.join("");
// }
// console.log(swap_pairs(15));
// console.log(swap_pairs(1234));
// console.log(swap_pairs(123456));
// console.log(swap_pairs(12345));
// console.log(swap_pairs(121));