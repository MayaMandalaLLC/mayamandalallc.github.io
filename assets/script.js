document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.nav-dropdown');
  const closeTimers = new WeakMap();
  const closeDropdown = (dropdown) => {
    clearTimeout(closeTimers.get(dropdown));
    dropdown.removeAttribute('open');
  };

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('toggle', () => {
      if (!dropdown.open) return;

      dropdowns.forEach((otherDropdown) => {
        if (otherDropdown !== dropdown) closeDropdown(otherDropdown);
      });
    });

    dropdown.addEventListener('mouseenter', () => {
      clearTimeout(closeTimers.get(dropdown));
    });

    dropdown.addEventListener('mouseleave', () => {
      const closeTimer = setTimeout(() => closeDropdown(dropdown), 150);
      closeTimers.set(dropdown, closeTimer);
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
