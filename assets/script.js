document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.products-toggle');
  const menu = document.getElementById('productsMenu');

  if (!toggle || !menu) return;

  const closeMenu = () => {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', (event) => {
    event.preventDefault();
    const isOpen = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !toggle.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const attachments = document.getElementById('contact-attachments');
  const help = document.getElementById('attachment-help');

  if (!attachments || !help) return;

  const maxSize = Number(attachments.dataset.maxSize || 2097152);
  const maxSizeMb = Math.round(maxSize / 1024 / 1024);

  attachments.addEventListener('change', () => {
    const totalSize = Array.from(attachments.files).reduce((sum, file) => sum + file.size, 0);

    if (totalSize > maxSize) {
      attachments.value = '';
      help.textContent = `Selected files exceed the ${maxSizeMb} MB limit. Please choose smaller files.`;
      help.classList.add('error');
      return;
    }

    help.textContent = attachments.files.length
      ? `${attachments.files.length} file(s) selected. Total size is within the ${maxSizeMb} MB limit.`
      : `Accepted by your email app; total selected file size must be ${maxSizeMb} MB or less.`;
    help.classList.remove('error');
  });
});
