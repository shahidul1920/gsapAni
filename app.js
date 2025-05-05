const heading = document.querySelector("h1").textContent;
const mainHeading = document.querySelector("h1")

const splited = heading.split('');
let clutter = ''

splited.forEach((e)=>{
    clutter += `<span>${e}</span>`
})
mainHeading.innerHTML = clutter

gsap.from('h1 span',{
    opacity: 0,
    y: -100,
    stagger: 0.1,
    color: 'red'
})
