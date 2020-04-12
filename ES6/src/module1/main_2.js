const users = [
  { name: 'Diego', age: 23, company: 'Rocketseat' },
  { name: 'Gabriel', age: 15, company: 'Rocketseat' },
  { name: 'Lucas', age: 30, company: 'Facebook' },
];

const ages = users.map(user => user.age);

// console.log(ages);

const rocketseatEmployees = users.filter(user => 
  user.company === 'Rocketseat' && user.age >= 18
);

// console.log(rocketseatEmployees);

const googleEmployee = users.find(user => user.company === 'Google');

// console.log(googleEmployee);

const usersFilter = users
  .map(user => ({ ...user, age: user.age * 2}))
  .filter(user => user.age <= 50);

// console.log(usersFilter);