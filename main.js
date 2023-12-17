const mobnav = document.querySelector('.mobile-nav-toggle')
const navSelect = document.querySelector('.primary-navigation')

mobnav.addEventListener("click", () => {
    navSelect.hasAttribute("data-visible") ? mobnav.setAttribute("aria-expanded", false)
        : mobnav.setAttribute("aria-expanded", true);
    navSelect.toggleAttribute("data-visible");
})
