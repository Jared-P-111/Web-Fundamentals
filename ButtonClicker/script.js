const loginBtn = document.querySelector('#login-btn');
const addDefinitionBtn = document.querySelector('#newDefinitionBtn');

const changeLogin = () => {
  loginBtn.innerText = 'Logout';
};

const removeAddDefinitionBtn = () => {
  addDefinitionBtn.remove();
};
