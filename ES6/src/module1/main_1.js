class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  isAdmin() {
    if (this.admin === true) {
      return true;
    } else {
      return false;
    }
  }
}

class Admin extends User {
  constructor(email, password) {    // construir o objeto
    super(email, password);         // pegar o constructor da classe pai, e ter acesso aos dados.
    
    this.admin = true;
  }
}

const user = new User('esterandr02@gmail.com', 'ester1724');
const admin = new Admin('esterandr02@gmail.com', 'ester1724');

console.log(admin.isAdmin());
console.log(user.isAdmin());