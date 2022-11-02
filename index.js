let nav = document.getElementById('link');
let showIcon = document.getElementById('show');
let hideIcon = document.getElementById('hide');
function show() {
    nav.style.display = 'flex';
   
    showIcon.style.display = 'none'
}
function hide() {
    nav.style.display = 'none';
    
    showIcon.style.display = 'block'
}