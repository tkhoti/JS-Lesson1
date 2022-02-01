1. 

let active = true;

let  user = {
    firstname: 'giorgi',
    lastname: 'smith',
    age: 25,
    studentstatus: active //active not defined
  };
  
console.log(user.studentstatus);


2.

let array1 = ['tatuli', 25, 3, 'giorgi', [25, 4, 1990]]

for (let i = 0; i < array1.length; i++) {
    console.log(array1[i]);    
}

let i=0;
while (i < array1.length) {
    console.log(array1[i]);
    i++;    
}

3.

let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 5) {
        console.log(numbers[i]);
    }
    
}

4. 

let users =  [
    {username:'test1', status: false},
    {username:'test2', status: false},
    {username:'test3', status: true}
];

for (let i = 0; i < users.length; i++) {
    if (users[i].status) {
        console.log(users[i]);
    }    
}

5. 


let user = {
	name: 'giorgi',
	age:  20,
	studentstatus: active
}

if (user.age > 18 && user.studentstatus==active) {
    console.log('hello');
}
else if(user.name=='giorgi') {
    console.log('hello giorgi');
} 
else if (user.age < 25 || user.studentstatus==active) {
    console.log('hello world');
} else {
    console.log('error');
}

6.

let watermelon = {
    category: 'fruit',
    taste: 'sweet'

}

let pear = {
    category: 'fruit',
    taste: 'mild'
}


let array = [ watermelon, pear, 10, 45, 50, 'apple', 'ananas' ] ;


for (let i = 0; i < array.length; i++) {
    if (typeof array[i]=='string'){
        console.log(array[i]);  

    }
    
}

