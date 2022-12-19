const ham = document.querySelector(".hamburgur");
const navsub = document.querySelector(".nav-sub");
ham.addEventListener('click', () => {
ham.classList.toggle("change")
navsub.classList.toggle("nav-change")
});

// document.querySelectorAll(".nav-link").forEach(n  => n.
//     addEventListener("click", () => {
//         ham.classList.remove('change');
//         navsub.classList.remove('nav-change');
//     }))
