// document.addEventListener("click", function(e) {}, true);

const btn= document.querySelector('.btn');
const socialBtns = document.querySelectorAll('.btnStyle');
console.log(socialBtns)

socialBtns.forEach(btn=>{
    btn.addEventListener('click',function (e) {
        const child = btn.firstElementChild;
        console.log(child)
        // console.log(e.target,e.target)

        btn.classList.toggle('click');
        child.classList.toggle('socialBtnClick')
        // btn.classList.toggle('click');
    })
})

btn.addEventListener('click',function(){
    btn.classList.toggle('clicked')
})

console.log('💩')

window.addEventListener('resize',function () {
    console.log(innerWidth)
})