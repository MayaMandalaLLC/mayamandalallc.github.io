document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.nav-dropdown');
  const closeDropdown = (dropdown) => {
    dropdown.removeAttribute('open');
  };

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('toggle', () => {
      if (!dropdown.open) return;

      dropdowns.forEach((otherDropdown) => {
        if (otherDropdown !== dropdown) closeDropdown(otherDropdown);
      });
    });

    dropdown.addEventListener('mouseleave', () => {
      closeDropdown(dropdown);
    });
  });

  document.addEventListener('click', (event) => {
    dropdowns.forEach((dropdown) => {
      if (!dropdown.contains(event.target)) closeDropdown(dropdown);
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      dropdowns.forEach(closeDropdown);
    }
  });
});
