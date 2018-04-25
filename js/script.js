document.addEventListener("DOMContentLoaded", function () {

    var submenu = document.querySelector(".menu li a");
    console.log(submenu);
    var mouseout = document.querySelector(".menu > li");
    console.log(mouseout);
    var list = document.querySelector("#submenu");
    console.log(list);

    submenu.addEventListener('mouseover', function () {
        list.style.visibility = "visible";
    });
    mouseout.addEventListener("mouseleave", function () {
        list.style.visibility = "hidden";
    });

    var img1 = document.querySelector('#clair');
    console.log(img1);
    var boxPic1 = document.querySelector('#clair > div');
    console.log(boxPic1);

    img1.addEventListener('mouseenter', function () {
        boxPic1.style.visibility = 'hidden';
    });
    img1.addEventListener('mouseout', function () {
        boxPic1.style.visibility = 'visible';
    });

    var img2 = document.querySelector('#margarita');
    console.log(img2);
    var boxPic2 = document.querySelector('#margarita > div');
    console.log(boxPic2);

    img2.addEventListener('mouseenter', function () {
        boxPic2.style.visibility = 'hidden';
    });
    img2.addEventListener('mouseout', function () {
        boxPic2.style.visibility = 'visible';
    });

    var sliderEl = document.querySelectorAll('img');
    console.log(sliderEl);
    var firstButton = document.querySelector('#button a');
    console.log(firstButton);
    var secondButton = document.querySelector('#button2 a');
    console.log(secondButton);

    var index = 0;
    sliderEl[index].classList.add('chair');

    firstButton.addEventListener('click', function () {
        sliderEl[index].classList.remove('chair');

        if(index+1>=sliderEl.length){
            index = 0;
        }else {
            index ++;
        }
        sliderEl[index].classList.add('chair');
    });

    secondButton.addEventListener('click', function () {
        sliderEl[index].classList.remove('chair');

        if(index-1<0){
            index = sliderEl.length-1;
        }else {
            index--;
        }
        sliderEl[index].classList.add('chair');
    })
});