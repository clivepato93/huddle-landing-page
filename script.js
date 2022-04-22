// document.addEventListener("click", function(e) {}, true);

const btn= document.querySelector('.btn');
console.log(btn)
btn.addEventListener('click',function(){
    btn.classList.toggle('clicked')
})

console.log('💩')

window.addEventListener('resize',function () {
    console.log(innerWidth)
})