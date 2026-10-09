/* AI-assisted demonstration behaviour. See ATTRIBUTION.md.
   HTML handles required, email, pattern, and length rules.
   This script adds whitespace/digit checks and prevents delivery. */
const form = document.querySelector('#contact-form');
const message = document.querySelector('#message');
const phone = document.querySelector('#phone');
const status = document.querySelector('#form-status');

function updateValidation() {
  message.setCustomValidity(message.value.trim() ? '' : 'Please enter a message, not just spaces.');
  const digits = phone.value.replace(/\D/g, '');
  phone.setCustomValidity(phone.value && digits.length < 7 ? 'Please include at least seven digits, or leave the phone field empty.' : '');
}

form.addEventListener('input', function () {
  updateValidation();
  status.textContent = '';
});
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Never navigate, send email, or transmit field values.
  updateValidation();
  if (!form.reportValidity()) return;
  status.textContent = 'Validation complete. This is a demonstration: your message was not sent or saved.';
});
updateValidation();
form.querySelector('button[type="submit"]').disabled = false;
