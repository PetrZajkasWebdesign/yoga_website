const burger = document.querySelector('nav svg');

burger.addEventListener('click', () => {
    if(burger.classList.contains('active')){
        gsap.to('.links', { x: '100%' });
        gsap.to('.line', { stroke: 'white' });
        gsap.set('body', { overflow: 'auto' });
        gsap.set('body', { overflowX: 'hidden' });
    }else{
        gsap.to('.links', { x: '0%' });
        gsap.to('.line', { stroke: 'black' });
        gsap.fromTo('.links a', { opacity: 0, y: 0 }, 
                                { opacity: 1, y: 30, delay: 0.30, stagger: 0.30}
                            );
        gsap.set('body', { overflow: 'hidden' });                                
    }
    burger.classList.toggle("active");
});

const images = gsap.utils.toArray('.scroll-trigger');
gsap.set(images, { opacity: 0 });

images.forEach((image) => {
    ScrollTrigger.create({
        trigger: image,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
            gsap.to(image, { opacity: 1, delay: 0.1 });
        },
    });
});