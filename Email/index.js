document.querySelector('input').addEventListener('focus',()=>{
    document.querySelector('p').style.transform='translate(5px,-22px)'
    document.querySelector('p').style.backgroundColor=' #2c3539'
    document.querySelector('p').style.padding='2px'
})
document.querySelector('input').addEventListener('blur',()=>{
    document.querySelector('p').style.transform='translate(5px,-2px)'
    
})