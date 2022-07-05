function validateEmail() {
  const email = document.querySelector('#loginEmail');
  const password = document.querySelector('#loginPassword');

  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function showLoginAlert() {
  const loginBtn = document.querySelector('#loginBtn');
  loginBtn.addEventListener('click', validateEmail);
}

showLoginAlert();

function submitBtnStatus() {
  const submitBtn = document.querySelector('#submit-btn');
  const agreement = document.querySelector('#agreement');
  submitBtn.disabled = !agreement.checked;
}

const creatLabel = (index) => {
  const label = document.createElement('label');
  label.setAttribute('class', 'form-check-label');
  label.setAttribute('for', `${index}`);
  label.innerText = `${index}`;
  return label;
};

const creatRadios = () => {
  for (let index = 1; index <= 10; index += 1) {
    const container = document.getElementsByClassName('avalia')[0];
    const input = document.createElement('input');
    input.setAttribute('type', 'radio');
    input.setAttribute('name', 'rate');
    input.setAttribute('value', `${index}`);
    input.setAttribute('id', `${index}`);
    container.appendChild(input);
    container.appendChild(creatLabel(index));
  }
};

creatRadios();

function enableSubmitBtn() {
  const agreement = document.querySelector('#agreement');
  agreement.addEventListener('change', submitBtnStatus);
}

enableSubmitBtn();

const infolength = (textarea) => {
  const counter = document.getElementById('counter');
  counter.innerText = '500';
  counter.innerText = `${Number(counter.innerText) - Number((textarea.value).length)}`;
};

const getCounter = () => {
  const textarea = document.getElementsByTagName('textarea')[0];
  textarea.addEventListener('keyup', () => infolength(textarea));
  textarea.addEventListener('keypress', () => infolength(textarea));
};

getCounter();

const skills = [];

const getSkills = (event) => {
  console.log(skills);
  if (skills.indexOf(event.currentTarget.innerText) === -1) {
    skills.push(event.currentTarget.innerText);
  }
};

const addEventSkills = () => {
  for (let index = 0; index <= 5; index += 1) {
    const itens = document.getElementsByClassName('skill')[index];
    itens.addEventListener('click', getSkills);
  }
};

addEventSkills();

const getInfos = () => {
  const name = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const house = document.getElementById('house').value;
  const family = document.getElementsByName('family').checked;
  const dados = [name, lastName, email, house, family, skills];
  for (let index = 0; index < dados.length; index += 1) {
    console.log(dados[index]);
  }
};

const formInfo = (event) => {
  event.preventDefault();
  getInfos();
};

const enviar = () => {
  const enviar = document.getElementsByClassName('btn-success')[0];
  enviar.addEventListener('click', formInfo);
};

enviar();
