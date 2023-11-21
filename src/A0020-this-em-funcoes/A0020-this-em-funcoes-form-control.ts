import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGENS = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

const submitEventFn = (event: Event) => {
  event.preventDefault();
  const target = event.target as HTMLFormElement;
  hideErrorMessages(target);
  checkForEmptyField(username, email, password, password2);
  checkEmail(email);
  checkEqualPasswords(password, password2);
  if (shoudlSendForm(target)) console.log('formulario Enviado');
};

form.addEventListener('submit', submitEventFn);

function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) showErrorMessage(input, 'email invalido');
}

function checkEqualPasswords(
  password: HTMLInputElement,
  password2: HTMLInputElement
) {
  if (password.value !== password2.value) {
    showErrorMessage(password, 'Senhas não são iguais');
    showErrorMessage(password2, 'Senhas não são iguais');
  }
}

function checkForEmptyField(...inputs: HTMLInputElement[]) {
  inputs.forEach(input => {
    if (!input.value) showErrorMessage(input, 'Campo não pode ficar vazio');
  });
}

function hideErrorMessages(form: HTMLFormElement): void {
  form
    .querySelectorAll('.' + SHOW_ERROR_MESSAGENS)
    .forEach(item => item.classList.remove(SHOW_ERROR_MESSAGENS));
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector(
    '.error-message'
  ) as HTMLSpanElement;
  errorMessage.innerText = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGENS);
}

function shoudlSendForm(form: HTMLFormElement): boolean {
  let send = true;
  form
    .querySelectorAll('.' + SHOW_ERROR_MESSAGENS)
    .forEach(() => (send = false));
  return send;
}
