let initialPath = `M 10 100 Q 250 100 800 100`
let finalPath = `M 10 100 Q 500 100 990 100`

let svgString = document.querySelector('.svgString');

svgString.addEventListener('mouseover', function(dets){
    path = `M 10 100 Q 500 ${dets.y} 990 100`
    gsap.to('svg path', {
        attr: { d: path },
        duration: 0.3,
        ease: 'power3.out',
    })
    //console.log('dets', dets.y, 'on it');
    
})
svgString.addEventListener('mouseleave', function(){
    gsap.to('svg path', {
        attr: { d: finalPath },
        duration: 1.3,
        ease: "elastic.out(1, 0.2)",
    })
    console.log('mouseleave');
    
})

// let initialPath = `M 10 100 Q 250 100 800 100`
// let finalPath = `M 10 100 Q 500 100 990 100`

// let svgString = document.querySelector('.svgString');
// let isHovering = false;

// svgString.addEventListener('mouseenter', function(dets){
//     isHovering = true;
//     updatePath(dets);
// })

// svgString.addEventListener('mousemove', function(dets){
//     if (isHovering) {
//         updatePath(dets);
//     }
// })

// svgString.addEventListener('mouseleave', function(){
//     isHovering = false;
//     gsap.to('svg path', {
//         attr: { d: finalPath },
//         duration: 1.3,
//         ease: "elastic.out(1, 0.2)",
//     })
//     console.log('mouseleave');
// })

// function updatePath(dets) {
//     let path = `M 10 100 Q 500 ${dets.y} 990 100`;
//     gsap.to('svg path', {
//         attr: { d: path },
//         duration: 0.3,
//         ease: 'power3.out',
//     });
//     //console.log('dets', dets.y, 'on it');
// }