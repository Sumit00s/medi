let img_path = document.getElementById('hero_img');
let header_btn = document.getElementById('sign_up');
let left_btn = document.getElementById('left_btn');
let logo_dot = document.getElementById('logo_dot');

let img_array = ['./img/frame0.png','./img/frame1.png','./img/frame2.png','./img/frame3.png','./img/frame4.png',]
let color_array = ['#FC569A','#A3DC00','#824FF1','#33A2E0','#4F56F1']


let counter = 0;

setInterval(()=>{
    if(counter == 5){
        counter = 0;
    }
    else{
        img_path.setAttribute('src',img_array[counter]);
        header_btn.style.background = color_array[counter];
        left_btn.style.background = color_array[counter];
        logo_dot.style.color = color_array[counter];
        counter++;
    }
},2000);