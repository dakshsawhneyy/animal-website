let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');

let carousel = document.querySelector('.carousel');
let Slider = carousel.querySelector('.carousel .list');
let thumbnailBorder = document.querySelector('.carousel .thumbnail');
let thumbnailItems = thumbnailBorder.querySelectorAll('.items');
let time = document.querySelector('.carousel .time');

thumbnailBorder.appendChild(thumbnailItems[0]);



nextBtn.addEventListener(("click"),()=>{
    showSlider('next');  
})
prevBtn.addEventListener(("click"),()=>{
    showSlider('prev');  
})


let runTimeOut;
let runNextAuto = setTimeout(() => {
    nextBtn.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItems = Slider.querySelectorAll('.carousel .list .item');
    let thumbnailItems = document.querySelectorAll('.carousel .thumbnail .items');
    
    if(type === 'next'){
        Slider.appendChild(SliderItems[0]);
        thumbnailBorder.appendChild(thumbnailItems[0]);
        carousel.classList.add('next');
    }else{
        Slider.prepend(SliderItems[SliderItems.length - 1]);
        thumbnailBorder.prepend(thumbnailItems[thumbnailItems.length - 1]);
        carousel.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carousel.classList.remove('next');
        carousel.classList.remove('prev');
    }, 3000);

}