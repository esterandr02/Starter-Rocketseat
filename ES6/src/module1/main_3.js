// const array = [1, 2, 3, 4, 5];

// 3.1
// const newArray = array.map(item => item + 10);
// console.log(newArray);

// 3.2
// const user = { name: 'Diego', age: 23 };

// const userAge = (user) => user.age;
// console.log(userAge(user));

// 3.3
// const name = 'Diego';
// const age = 23;

// const showUser = (name = 'Diego', age = 18) => {
//   return {
//     name,
//     age,
//   };
// };

// console.log(showUser(name, age));
// console.log(showUser(name));

// 3.4
const promise = () => new Promise((resolve, reject) => resolve());
console.log(promise);