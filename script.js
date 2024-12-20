let indicator = document.querySelector(".scroll-indicator .progress");
let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
// console.log(indicator);
window.addEventListener('scroll', scroll);


function scroll() {
    let scrollTop = document.documentElement.scrollTop;
    let scrolled = (scrollTop / scrollHeight)*100;
    indicator.style.width = `${scrolled}%`
}
