const login=document.querySelector('.login');
const sign=document.querySelector('.signup');
const btn=document.getElementById("btn");
btn.addEventListener('click',function(){
    if(!login.classList.contains("active")){
        login.classList.add("active");
        sign.classList.remove("active");
    }

})
const a=document.getElementById("a");
a.addEventListener('click',()=>{
    if(!sign.classList.contains("active")){
        sign.classList.add("active");
        login.classList.remove("active");
    }
})
