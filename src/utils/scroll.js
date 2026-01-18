const NAVBAR_OFFSET = 80;
export const smoothScrollTo = (elementId) => {
  const element = document.querySelector(elementId);

  if (!element) return;

  const elementPosition =
    element.getBoundingClientRect().top + window.pageYOffset;

  const offsetPosition = elementPosition - NAVBAR_OFFSET;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

export const handleNavClick = (e, href) => {
  if (e) e.preventDefault();
  smoothScrollTo(href);
};
