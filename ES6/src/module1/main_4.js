// 4.1

// const company = {
//   name: 'Rocketseat',
//   adress: {
//   city: 'Rio do Sul',
//   state: 'SC',
//   }
//  };

// const { name } = company;
// const { adress: { city } } = company;
// const { adress: { state } } = company;

// console.log(name, city, state);

// 4.2

const showUser = (({ name, age }) => {
  return `${name} is ${age} years old.`;
});

console.log(showUser({ name: 'Ester', age: 20 }));