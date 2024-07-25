// let nextDom =document.getElementById('next');
// let prevDom =document.getElementById('prev');
// let carouselDom =document.querySelector('.carousel');
// let listItemDom = document.querySelector('.carousel .list');
// let thumbnailDom = document.querySelector('.carousel .thumbnail');

// nextDom.onclick = function(){
//     showSlider('next');
// }

// prevDom.onclick = function(){
//     showSlider('prev');
// }

// let timeRunning = 3000;
// let timeAutoNext = 7000;
// let runTimeOut;
// let runAutoRun = setTimeout(()=>{
//     nextDom.click();
// }, timeAutoNext);

// function showSlider(type){
//     let itemSlider = document.querySelectorAll('.carousel .list .item ');
//     let itemThumbnail = document.querySelectorAll('.carousel .list .item ');

//     if(type=='next'){
//         listItemDom.appendChild(itemSlider[0]);
//         thumbnailDom.appendChild(itemThumbnail[0]);
//         carouselDom.classList.add('next');
//     }else{
//         let positionLastItem = itemSlider.length -1;
//         listItemDom.prepend(itemSlider[positionLastItem])
//         thumbnailDom.prepend(itemThumbnail[positionLastItem])
//         carouselDom.classList.add('prev');
//     }

//     clearTimeout(runTimeOut);
//     runTimeOut = setTimeout(()=>{
//         carouselDom.classList.remove('next');
//         carouselDom.classList.remove('prev');

//     }, timeRunning)

//     clearTimeout(runAutoRun);
//     runAutoRun = setTimeout(()=>{
//         nextDom.click();
//     },timeAutoNext);
// }

//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}