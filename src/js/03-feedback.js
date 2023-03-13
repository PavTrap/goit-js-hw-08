////////////////////////////// IMPORTS //////////////////////////////
import throttle from 'lodash.throttle';

////////////////////////////// EXPORT //////////////////////////////
const formRef = document.querySelector('.feedback-form');
const emailRef = document.querySelector('input[name="email"]');
const messageRef = document.querySelector('textarea[name="message"]');
const dataBaseArr = {
    email: '',
    message: '',
};
const LOCALSTORAGE_KEY = 'feedback-form-state';


/////////////////////////////// EVENTS //////////////////////////////
formRef.addEventListener('submit', submitForm);

formRef.addEventListener('input', throttle(validateForm, 500));

////////////////////////////// FUNCTIONS //////////////////////////////
function validateForm(e){
    const { name, value } = e.target;
    dataBaseArr[name] = value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(dataBaseArr));
}
function submitForm (e){
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
    console.log(dataBaseArr);
}
function getDataBase(){
const getData = localStorage.getItem(LOCALSTORAGE_KEY);
const parsedData = JSON.parse(getData);
if (parsedData) {
    emailRef.value = parsedData.email;
    messageRef.value = parsedData.message;
}}

getDataBase();