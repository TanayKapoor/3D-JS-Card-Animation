// Movement animation
const card = document.querySelector('.card');
const container = document.querySelector('.container');

// Items 
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');


// Movement Animation 
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) /35;
    let yAxis = (window.innerHeight / 2 - e.pageY) /35;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

// Animate in
container.addEventListener('mouseenter', e =>{
    card.style.transition = 'none';
    title.style.transform = 'translateZ(150px)';
})

// Animate out
 container.addEventListener('mouseleave', e => {

    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = 'translateZ(0px)';
});