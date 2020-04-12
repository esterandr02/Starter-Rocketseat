// 5.1.1

// const array = [1, 2, 3, 4, 5, 6];

// const [ x, ...y ] = array;

// console.log(x);
// console.log(y);

// 5.1.2

// const sum = (...params) => params.reduce((total, next) => total + next);

// console.log(sum(1, 2, 3, 4));

// 5.2

const user = {
  name: 'Diego',
  age: 23,
  adress: {
  city: 'Rio do Sul',
  uf: 'SC',
  country: 'Brasil',
  }
};

const user_2 = { ...user, name: 'Ester' };
const user_3 = {
  ...user,
  adress: { ...user.adress, city: 'Lontras' } 
};

console.log(user_2);
console.log(user_3);