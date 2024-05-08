export const handleAccordion = () => {
  const accordion = document.querySelector('.accordion');
  const btn = document.querySelector('.accordion-btn');
  if (accordion) {
    accordion.classList.toggle('open');
    const scrollAmount = accordion.getBoundingClientRect().height;
    scrollBy(0, scrollAmount);
    if (btn) {
      btn.textContent = accordion.classList.contains('open') ? 'Close disclaimer ▲' : 'Open disclaimer ▼';
    }
  }
};
