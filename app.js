// Movement animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');

// Items
const title = document.querySelector('.title');
const car = document.querySelector('.car');
const purchase = document.querySelector('.purchase__btn');
const description = document.querySelector('.info h3');
const colors = document.querySelector('.color-options');


// Bike animation
const wheelLeft = document.querySelector('.wheel-left');
const wheelRight = document.querySelector('.wheel-right');
const carBody = document.querySelector('.car-body');
const carWrapper = document.querySelector('.car-wrapper');
const dog = document.querySelector('.dog');

// Moving animation event
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 18;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 18;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

});

// Animate in
container.addEventListener('mouseenter', (e) => {
    card.style.transition = "none";

    // Popout effect
    title.style.transform = "translateZ(150px)";
    purchase.style.transform = "translateZ(75px)";
    description.style.transform = "translateZ(125px)";
    colors.style.transform = "translateZ(100px)";
    car.style.transform = "translateZ(200px)";
    
    // Car animation
    wheelLeft.style.animation = "wheel 2s infinite linear";
    wheelRight.style.animation = "wheel 2s infinite linear";
    carWrapper.style.animation = "car 0.5s ease-in-out infinite alternate";
    dog.style.animation = "car 0.5s ease-in-out infinite alternate";
 
});

// Animate out
container.addEventListener('mouseleave', (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = "translateZ(0px)";
    car.style.transform = "translateZ(0px) rotateZ(0deg)";
    purchase.style.transform = "translateZ(0px)";
    description.style.transform = "translateZ(0px)";
    colors.style.transform = "translateZ(0px)";
    wheelLeft.style.animation = "unset";
    wheelRight.style.animation = "unset";
    car.style.animation = "unset";
    carWrapper.style.animation = "unset";
    dog.style.animation = "unset";
});

// Car color picker

const buttons = document.querySelectorAll('.color-options button');

buttons.forEach(buttons => 
    buttons.addEventListener('click', (e) => {
    
    switch (e.target.className) {
        case 'red':
            carBody.style.fill = "#f08084";
            break;
        case 'blue':
            carBody.style.fill = "#6060e0";
            break;
        case 'yellow':
            carBody.style.fill = "#ffff90";
            break;
        case 'purple':
            carBody.style.fill = "#91da61";
            break;
    } 
})
);
