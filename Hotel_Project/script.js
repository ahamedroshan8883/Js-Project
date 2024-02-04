const frame = window.parent.document.getElementById("myframe");
// console.log(frame.src)
// const sign_in_btn = document.getElementById("sign-in-btn");
// console.log(sign_in_btn)
// // sign_in_btn.addEventListener('click',siginipage());
function signinpage(){
        frame.src = "signin.html";
    console.log(frame.src)
    }
function signupage(){
// console.log(frame.src)
    frame.src = "signup.html";
}
let dscrbdetaills = [
    {
        title:"Suite Rooms & Dulex Rooms",
        img:"img/pngtree1.png",
        describe:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Vel, mollitia inventore nostrum architecto labore ipsa nulla ducimus reiciendis id repellendus tempora earum numquam,fugiat saepe modi dolorem optio? Et, ipsam?"
    },
    {
        title:"Best Infrastructure",
        img:"img/images2.jpg",
        describe:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Vel, mollitia inventore nostrum architecto labore ipsa nulla ducimus reiciendis id repellendus tempora earum numquam,fugiat saepe modi dolorem optio? Et, ipsam?"
    },{
        title:"Great Hospitality",
        img:"img/pexels.jpg",
        describe:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Vel, mollitia inventore nostrum architecto labore ipsa nulla ducimus reiciendis id repellendus tempora earum numquam,fugiat saepe modi dolorem optio? Et, ipsam?"
    }
]
let currentIndex = 0;
const slideprev = ()=>{
currentIndex--;
if(currentIndex<0){
currentIndex = dscrbdetaills.length-1}
console.log(currentIndex)
document.getElementById("title").textContent = dscrbdetaills[currentIndex].title
document.getElementById("imgcon").style.backgroundImage = "url("+dscrbdetaills[currentIndex].img+")"
document.getElementById("dcsrbcon").textContent = dscrbdetaills[currentIndex].describe
}
const slidenext = ()=>{
currentIndex++;
if(currentIndex>dscrbdetaills.length-1){
console.log(currentIndex)
currentIndex = 0}
document.getElementById("title").textContent = dscrbdetaills[currentIndex].title
document.getElementById("imgcon").style.backgroundImage = "url("+dscrbdetaills[currentIndex].img+")"
document.getElementById("dcsrbcon").textContent = dscrbdetaills[currentIndex].describe
}
// const slidenextpertime = ()=>{
// currentIndex++;
// if(currentIndex>dscrbdetaills.length-1){
// console.log(currentIndex)
// currentIndex = 0}
// document.getElementById("title").textContent = dscrbdetaills[currentIndex].title
// document.getElementById("imgcon").style.backgroundImage = "url("+dscrbdetaills[currentIndex].img+")"
// document.getElementById("dcsrbcon").textContent = dscrbdetaills[currentIndex].describe
// setTimeout(slidenextpertime,10000)
// }
window.addEventListener('DOMContentLoaded',function(){
document.getElementById("title").textContent = dscrbdetaills[0].title;
document.getElementById("imgcon").style.backgroundImage = "url("+dscrbdetaills[0].img+")";
document.getElementById("dcsrbcon").textContent = dscrbdetaills[0].describe;
// slidenextpertime();
// setInterval(()=>{slidenext()},10000);
// console.log(frame.src)
signupage()
});
const signup = document.getElementById("form")
if(signup){
    const eye = document.getElementById("fa-eye");

    eye.onclick = ()=>{
        if(passwd.type=="password"){
            passwd.type="text";
            eye.className =  "fa-solid fa-eye-slash position-absolute top-50 end-0 translate-middle-y mt-2 me-2"
        }else{
            passwd.type="password";
            eye.className =  "fa-solid fa-eye position-absolute top-50 end-0 translate-middle-y mt-2 me-2"
        }
    }
    const eye1= document.getElementById("fa-eye1")
    eye1.onclick = ()=>{
        if(conpasswd.type=="password"){
            conpasswd.type = "text";
            eye1.className = "fa-solid fa-eye-slash position-absolute top-50 end-0 translate-middle-y mt-2 me-2"
        }else{
            conpasswd.type = "password";
            eye1 .className = "fa-solid fa-eye position-absolute top-50 end-0 translate-middle-y mt-2 me-2";
        }
    }
}
const signin = document.getElementById("sign-in_form")
if(signin){
    const signin_eye= document.getElementById("sign-in_fa-eye")
const singin_pass = document.getElementById("sign_in-password")
signin_eye.onclick = ()=>{
    if(singin_pass.type=="password"){
        singin_pass.type = "text";
        signin_eye.className = "fa-solid fa-eye-slash position-absolute top-50 end-0 translate-middle-y mt-2 me-2"
    }else{
        singin_pass.type = "password";
        signin_eye.className = "fa-solid fa-eye position-absolute top-50 end-0 translate-middle-y mt-2 me-2";
    }
}
}



    
   console.log(screen.width)