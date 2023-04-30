const wrapper = document.querySelector(".wrapper");
const resisterlink = document.querySelector(".resister-link");
const loginlink = document.querySelector(".login-link");
const login = document.querySelector(".btnlogin-popup");
const closebtn = document.querySelector(".close-btn");

resisterlink.addEventListener("click", () => {
    wrapper.classList.add("active");
});

loginlink.addEventListener("click", () => {
    wrapper.classList.remove("active");
});

login.addEventListener("click", () => {
    wrapper.classList.add("popup-active")
});
closebtn.addEventListener("click", () => {
    wrapper.classList.remove("popup-active")
})