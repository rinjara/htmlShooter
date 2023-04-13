class RegistrationForm {
  constructor() {
    this.formElement = document.getElementById('registration-form');
    this.nameInput = this.formElement.querySelector('#name-input');
    this.emailInput = this.formElement.querySelector('#email-input');

    this.formElement.addEventListener('submit', this.onSubmit.bind(this));
  }

  onSubmit(event) {
    event.preventDefault();

    const name = this.nameInput.value.trim();
    const email = this.emailInput.value.trim();

    // Perform form validation and submission logic here...
  }
}

export default RegistrationForm;
