const colors = ['red', 'green', 'yellow'];
let colorIndex = 0;
const h1 = document.querySelector('#hello-world');
h1.addEventListener('click', () => {
  colorIndex = (colorIndex + 1) % colors.length;
  h1.style.color = colors[colorIndex];
});

const contactForm = document.querySelector('#contact-form');
const confirmationMessage = document.querySelector('#confirmation-message');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const name = formData.get('nome');
  const email = formData.get('email');
  const phone = formData.get('telefone');
  const subject = formData.get('assunto');

  const body = `Nome: ${name}\nE-mail: ${email}\nTelefone: ${phone}\nAssunto: ${subject}`;

  const mailtoLink = `mailto:contato@startup.inf.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;

  confirmationMessage.textContent = 'Informação enviada com sucesso!';
  contactForm.reset();
});
