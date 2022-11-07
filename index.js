let nav = document.getElementById('link');
let showIcon = document.getElementById('show');
let hideIcon = document.getElementById('hide');
let image = document.getElementById('image');
const images = new Array(
    "images/jesus.jpg",
    "images/hand.jpg",
    "images/lhands.jpg",
    "images/worship.jpg"
);
let len = images.length;
let i;
i = 0;
function slide() {
    if (i>len-1) {
        i=0
    }
    image.src = images[i]
    i++;
    setTimeout("slide()", 9809);
}
function show() {
    nav.style.display = 'flex';
   
    showIcon.style.display = 'none'
}
function hide() {
    nav.style.display = 'none';
    
    showIcon.style.display = 'block'
}

function give() {
    alert("Thank you for choosing to support God's work. You are going to be redirected to the payment page soon. May God bless you " )
}
