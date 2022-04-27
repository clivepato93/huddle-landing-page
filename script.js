// document.addEventListener("click", function(e) {}, true);

// const btn= document.querySelector('.btn');
// const socialBtns = document.querySelectorAll('.btnStyle');
// const socialIcons = document.querySelectorAll('.socialBtn');
// console.log(socialBtns)

// socialBtns.forEach(btn=>{
//     btn.addEventListener('click',function (e) {
//         const target = e.target;
//         socialBtns.forEach(button=>{
//             const child = button.firstElementChild;
//             if(button!==target){
//                 button.classList.remove('click');
//                 child.classList.remove('socialBtnClick')
//             }
//             else{
//                 target.classList.toggle('click');
//                 child.classList.toggle('socialBtnClick')
//             }

//         })

        
        // console.log(child)
        // console.log(e.target,e.target)

        // btn.classList.toggle('click');
        // child.classList.toggle('socialBtnClick')
        // btn.classList.toggle('click');
//     })
// })

/*
socialIcons.forEach(icon=>{
    icon.addEventListener('click',function (e) {
        const target = e.target;
        socialIcons.forEach(icon=>{
            const parent = icon.parentElement;
            if(icon!==target){
                icon.classList.remove('socialBtnClick')
                parent.classList.remove('click');
            }
            else{
                icon.classList.add('socialBtnClick');
                parent.classList.toggle('click')
            }

        })

    })
})*/

// btn.addEventListener('click',function(){
//     btn.classList.toggle('clicked')
// })

// console.log('💩')

window.addEventListener('resize',function () {
    console.log(innerWidth)
})