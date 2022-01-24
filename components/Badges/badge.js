toggleBtn = document.querySelector("#toggle-btn");
badgeIcon = document.querySelector(".badge-btn-above-after");
let hidden = true;
toggleBtn.addEventListener('click',  () => {  
    hidden = !hidden;
    if(hidden){
    badgeIcon.style.visibility="visible";
    }
    else 
    badgeIcon.style.visibility= "hidden";
});
