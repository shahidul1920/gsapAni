let initialPath = `M 10 100 Q 250 100 800 100`
let finalPath = `M 10 100 Q 500 100 990 100`

let svgString = document.querySelector('.svgString');

svgString.addEventListener('mouseover', function(dets){
    path = `M 10 100 Q 500 ${dets.y} 990 100`
    gsap.to('svg path', {
        attr: { d: path },
        duration: 0.5,
    })
    console.log('dets', dets.y, 'on it');
    
})
svgString.addEventListener('mouseleave', function(){
    gsap.to('svg path', {
        attr: { d: finalPath },
    })
    console.log('mouseleave');
    
})