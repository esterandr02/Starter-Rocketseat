// 3.1

// Funão delay aciona o .then após 1s
// const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

// const umPorSegundo = async () => {
//   await delay();
//   console.log('1s');

//   await delay();
//   console.log('2s');

//   await delay();
//   console.log('3s');
// };
// umPorSegundo();

// 3.2

import axios from 'axios';

// const getUserFromGithub = async user => {
//   try {
//     const response = await axios.get(`https://api.github.com/users/${user}`);
//     console.log(response.data);
//   } catch(err) {
//     console.log('Usuário não existe.');
//   }
// }
// getUserFromGithub('esterandr02');
// getUserFromGithub('diego3g124123');

class Github {
  static async getRepositories(repo) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`);
      console.log(response.data);
    } catch(err) {
      //console.log(err);
      console.log('Repositório não existe');
    }
  }
}

Github.getRepositories('Rocketseat/starter-javascript-es6-exercicios');
Github.getRepositories('Rocketseat/dslkvmskv');
