import throttle from 'lodash.throttle';

// найти эл...
const formElement = document.querySelector('.feedback-form');
const email = formElement[0];
const message = formElement[1];

const LOCALSTORAGE_KEY = 'feedback-form-state';


// слушатель на кнопку и форму

formElement.addEventListener('input', throttle(inputElementStorage, 500))
formElement.addEventListener('submit', handleFormSubmit);

reproductionForm();

// функция которая принимает данние из формы и сохраняет в локальное хранилище
function inputElementStorage(e) {
  const currentData = { email: email.value, message: message.value };

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(currentData));

}




function handleFormSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;

  if (!form.email.value.trim() || !form.message.value.trim()) {
    return alert('Please fill in all the fields in form!')
  }

   e.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);

}

function reproductionForm() {

  const parseData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

  if (parseData) {
    email.value = parseData.email || '';
    message.value = parseData.message || '';
  }
}
