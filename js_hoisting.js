// console.log(example);
// var example = "I'm the example!";

// let example;
// console.log(example);
// example = "I'm the example!";  

// ========= 1 ==========

// console.log(hello);                                   
// var hello = 'world'; 

// interpret
var hello;
console.log(hello);
hello = "world";

// predict
// undefined

// ========= 2 ==========

// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }

// interpret
var needle;
test();
needle = 'haystack';
function test() {
    var needle;
    needle = 'magnet';
    console.log(needle);
}

// predict
// magnet

// ========= 3 ==========

// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

// interpret

var brendan;
brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// predict
// super cool

// ========= 4 ==========

// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }

// interpret

var food;
food = 'chicken';
console.log(food);
eat();
function eat() {
    var food;
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}

// predict
// chicken
// half-chicken

// ========= 5 ==========

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// predict
// error - function initialization before declaration

// ========= 6 ==========

// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

// interpret

var genre;
console.log(genre);
genre = "disco";

rewind();
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
console.log(genre);

// predict
// undefined
// rock
// r&b
// disco

// ========= 7 ==========

// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);

// interpret

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// predict
// san jose
// seattle
// burbank
// san jose

// ========= 8 ==========

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo.hiring = "closed for now";
    }
    return dojo;
}

// interpret
// nothing to change

// predict
// {name: 'Chicago', students: 65, hiring: true}
// {name: 'Berkeley', students: 0, hiring: 'closed for now'}
