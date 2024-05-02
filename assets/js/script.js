let navigationResponsiveButton = document.querySelector('.nav-header-responsive');
let navItem = document.querySelectorAll('.nav-item');

const showNavigation = e => {
    e.preventDefault();
    let navigationHeader = document.querySelector('.nav-header');
    navigationHeader.classList.toggle('slide-down');
}

const smoothNavigation = function(e){
    let linkNav = this.children;
    let linkNavHref = linkNav[0].getAttribute('href');
    let destinationScroll = document.querySelector(linkNavHref);
    let destinationOffset = destinationScroll.offsetTop;
    
    if(this.parentElement.classList.contains('nav-header')){
        navItem.forEach(n => {
            n.classList.remove('active');
        });
        this.classList.add('active');
    }
    
    let offsetMinus = 60;

    switch(linkNavHref){
        case '#tips-fact':
            offsetMinus = 90;
            break;
    }

    window.scrollTo({
        top:destinationOffset - offsetMinus,
        behavior: "smooth"
    });

    e.preventDefault();
}

navigationResponsiveButton.addEventListener('click',showNavigation);
navItem.forEach(nav => {
    nav.addEventListener('click',smoothNavigation);
});




const slider = document.querySelector('.slider');

const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const indicatorParents = document.querySelector('.controls ul');

var sectionIndex = 0;

function setIndex(index){
    document.querySelector('.controls .selected').classList.remove('selected');
    slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';
}

document.querySelectorAll('.controls li').forEach(function(indicator, ind) {
    indicator.addEventListener('click', function() {
        sectionIndex = ind;
        setIndex();
        indicator.classList.add('selected');
    })
})

leftArrow.addEventListener('click', function() {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    indicatorParents.children[sectionIndex].classList.add('selected');
    setIndex();
})

rightArrow.addEventListener('click', function() {
    sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 : 3;
    indicatorParents.children[sectionIndex].classList.add('selected');
    setIndex();
})