let main = document.querySelector('.main')
let imageSec = document.querySelector('.imageSec')
let cursor = document.querySelector('.cursor')


main.addEventListener('mousemove', function (dets) {
    gsap.to('.cursor', {
        duration: 0.8,
        x: dets.x,
        y:dets.y
    })
    
})

imageSec.addEventListener('mousemove', ()=>{
    gsap.to('.cursor', {
        duration: 0.8
    })
})
imageSec.addEventListener('mouseenter', ()=>{
    cursor.innerHTML = 'tap on my boobs'
    gsap.to('.cursor', {
        scale: 1,
        duration: 0.8,
        borderRadius: '10%',
    })
})

imageSec.addEventListener('mouseleave', ()=>{
    cursor.innerHTML = ''
    gsap.to('.cursor', {
        scale: 1,
        duration: 0.8,
        borderRadius: '50%',
    })
})
