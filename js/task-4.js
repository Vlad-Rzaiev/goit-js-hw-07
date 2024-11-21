const formLogin = document.querySelector('.login-form');

formLogin.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();

  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === '' || password === '') {
    return alert('All form fields must be filled in');
  }

  const formData = {};

  formData[form.elements.email.name] = email.trim();
  formData[form.elements.password.name] = password.trim();
  console.log(formData);

  console.log(`Email: ${email}, Password: ${password}`);

  form.reset();
}
