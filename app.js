// Task one
const array_elements = [];

// Task two
// const objArray = new my_array();

// Task three
const string_array = ["Wali","Muhammad","Ali"];

// Task four
const number_array = [3,5,7];

// Task five
const bool_array = [true,false];

// Task six
const mixed_array = ["Wali","Muhammad","Ali",6,7,true];

// Task Seven
const qualification_degree = ['SSC','HSC','BCS','BS','BCOM','M phill','phd']
document.write("<h2>Qualification</h2>")
document.write("<ol>");
var txt='';
for(var i=0; i<qualification_degree.length; i++){
   txt += `<li> ${qualification_degree[i]} </li>`;
}

document.write(txt)
document.write("</ol>");


// Task Eight
let student_name = ['Wali','Qadir','Anas'];
let mark_of_student = [434,323,456];

var totalMarks = 500;

var percentage_of_student_one = (mark_of_student[0]/totalMarks)*100;
var percentage_of_student_two = (mark_of_student[1]/totalMarks)*100;
var percentage_of_student_three = (mark_of_student[2]/totalMarks)*100;


document.write(`Score of ${student_name[0]} is ${mark_of_student[0]}. Percentage is ${percentage_of_student_one.toFixed(2)} <br>`) 
document.write(`Score of ${student_name[1]} is ${mark_of_student[1]}. Percentage is ${percentage_of_student_two.toFixed(2)} <br>`)
document.write(`Score of ${student_name[2]} is ${mark_of_student[2]}. Percentage is ${percentage_of_student_three.toFixed(2)} <br>`)

// Task Nine

let color_array = ["Crimson","Yellow","Brown"];

document.write(color_array + "<br>")

let user_Color = prompt("Enter the Color you want to Add in start")

// // Adding color to first position
color_array.unshift(user_Color)
document.write(color_array  + "<br>")


let user_end_color = prompt("Enter the Color you want to Add in last")

// // Adding color to ending position
color_array.push(user_end_color)
document.write(color_array  + "<br>")

// Adding two colors in first position
color_array.splice(0,0,"Orange",'Green')

document.write(color_array  + "<br>")

// Delete the first element in Array
delete color_array[0]
document.write(color_array  + "<br>")


// remove the last element from Array
color_array.pop();
document.write(color_array  + "<br>")

// Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index.
let user_index_number = +prompt("Enter the index number where you want to add color")
let desired_color_name = prompt("Enter the color name you want to add")

color_array.splice(user_index_number,0,desired_color_name)
document.write(color_array)

//Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete.
let user_remove_index = +prompt("Enter the index number where you want to remove color")

color_array.splice(0,user_remove_index)
document.write(color_array + "<br>")


// Task Ten

let student_marks = [230,678,125,742,113];
document.write(student_marks.sort() + "<br>")

// Task Eleven
let cities_name = ['Karachi','Lahore','Islamabad','Quetta','Peshawar']
let selected_cities = cities_name.slice(1,3);

document.write("Selected Cities " + selected_cities + "<br>")


// Task Twelve

var arr = ['This', 'is', 'my', 'cat'];
document.write('After writing joining method ' + arr.join(' ') + "<br>")

// Task Thirteen

let queue = [];

queue.push("Keyboard");
queue.push("Mouse");
queue.push("Printer");
queue.push("Monitor");

console.log(queue.shift()); // Output: "Item 1"
console.log(queue.shift()); // Output: "Item 2"
console.log(queue.shift());
console.log(queue.shift());

// Task fourteen


let queueOut = [];

queue.pop("Keyboard");
queue.pop("Mouse");
queue.pop("Printer");
queue.pop("Monitor");

console.log(queue.unshift()); // Output: "Item 1"
console.log(queue.unshift()); // Output: "Item 2"
console.log(queue.unshift());
console.log(queue.unshift());

// Task 15

let mob_device = ['Apple','Sumsung','Motorolla','Nokia','Sony','Haier']


document.write('<select>')
document.write(`<option>${mob_device[0]}</option>`)
document.write(`<option>${mob_device[1]}</option>`)
document.write(`<option>${mob_device[2]}</option>`)
document.write(`<option>${mob_device[3]}</option>`)
document.write(`<option>${mob_device[4]}</option>`)
document.write('</select>')

