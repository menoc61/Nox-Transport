 class user{
    constructor(id,name,searchTextField){
        this.id = id;
        this.name = name;
        this.searchTextField = searchTextField;
    }
}


  //Render Transaction log on map
  class TransactionLog {
    static displayLog() {
      const users = Store.getusers();
  
      users.forEach((user) => TransactionLog.adduserToList(user));
    }
  
    static adduserToList(user) {
      const list = document.querySelector('#user-list');
  
      const row = document.createElement('tr');
  
      row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.id}</td>  
        <td>${user.searchTextField}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">
                <i class="fa fa-trash" aria-hidden="true"></i>
            </a>
        </td>
      `;
  
      list.appendChild(row);
    }
  
    static deleteuser(el) {
      if(el.classList.contains('delete')) {
        el.parentElement.parentElement.remove();
      }
    }
  
    static showAlert(message, className) {
      const div = document.createElement('div');
      div.className = `alert alert-${className}`;
      div.appendChild(document.createTextNode(message));
      const container = document.querySelector('.demo');
      const form = document.querySelector('#user-form');
      container.insertBefore(div, form);
  
      // Vanish in 3 seconds
      setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }
  
    static clearFields() {
      document.querySelector('#id').value = '';
      document.querySelector('#name').value = '';
      document.querySelector('#searchTextField').value = '';
    }
  }
  
  // Store Class: Handles Storage
  class Store {
    static getusers() {
      let users;
      if(localStorage.getItem('users') === null) {
        users = [];
      } else {
        users = JSON.parse(localStorage.getItem('users'));
      }
  
      return users;
    }
  
    static adduser(user) {
      const users = Store.getusers();
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
    }
  
    static removeuser(id) {
      const users = Store.getusers();
  
      users.forEach((user, index) => {
        if(user.id === id) {
          users.splice(index, 1);
        }
      });
  
      localStorage.setItem('users', JSON.stringify(users));
    }
  }
  
  // Event: Display users
  document.addEventListener('DOMContentLoaded', TransactionLog.displayusers);
  
  // Event: Add a user
  document.querySelector('#user-form').addEventListener('submit', (e) => {
    // Prevent actual submit
    e.preventDefault();
  
    // Get form values
    const id = document.querySelector('#id').value;
    const name = document.querySelector('#name').value;
    const searchTextField = document.querySelector('#searchTextField').value;
  
    // Validate
    if(id === '' || name === '' || searchTextField === '') {
      TransactionLog.showAlert('Please fill in all fields', 'danger');
    } else {
      // Instatiate user
      const user = new user(id, name, searchTextField);
  
      // Add user to TransactionLog
      TransactionLog.adduserToList(user);
  
      // Add user to store
      Store.adduser(user);
  
      // Show success message
      TransactionLog.showAlert('Request Added', 'success');
  
      // Clear fields
      TransactionLog.clearFields();
    }
  });
  
  // Event: Remove a user
  document.querySelector('#user-list').addEventListener('click', (e) => {
    // Remove user from TransactionLog
    TransactionLog.deleteuser(e.target);
  
    // Remove user from store
    Store.removeuser(e.target.parentElement.previousElementSibling.textContent);
  
    // Show success message
    TransactionLog.showAlert('Request Removed', 'success');
  });