var BtnShow=document.getElementById('resultbutton');
var result=document.getElementById('resulth1');
    BtnShow.addEventListener('click',()=>{
    let selected=document.querySelector('input[type="radio"]:checked');
    chooselang=result.innerText=selected.parentElement.textContent;
    console.log(chooselang);
});