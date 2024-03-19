class User {
    constructor(name,email,lastName,cell,address) {
      this.name     = name;
      this.lastName = lastName;
      this.email    = email;
      this.cell     = cell;
      this.address  = address;
    }
  }
  
  module.exports = User;