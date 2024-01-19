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
const slidenextpertime = ()=>{
currentIndex++;
if(currentIndex>dscrbdetaills.length-1){
console.log(currentIndex)
currentIndex = 0}
document.getElementById("title").textContent = dscrbdetaills[currentIndex].title
document.getElementById("imgcon").style.backgroundImage = "url("+dscrbdetaills[currentIndex].img+")"
document.getElementById("dcsrbcon").textContent = dscrbdetaills[currentIndex].describe
setTimeout(slidenextpertime,10000)
}
window.addEventListener('DOMContentLoaded',function(){
document.getElementById("title").textContent = dscrbdetaills[0].title
document.getElementById("imgcon").style.backgroundImage = "url("+dscrbdetaills[0].img+")"
document.getElementById("dcsrbcon").textContent = dscrbdetaills[0].describe
slidenextpertime()
})


    const eye = document.getElementById("fa-eye")

    eye.onclick = ()=>{
        if(passwd.type=="password"){
            passwd.type="text";
            eye.className =  "fa-solid fa-eye-slash"
        }else{
            passwd.type="password";
            eye.className =  "fa-solid fa-eye"
        }
    }
    const eye1= document.getElementById("fa-eye1")

    eye1.onclick = ()=>{
        if(conpasswd.type=="password"){
            conpasswd.type="text";
            eye1.className =  "fa-solid fa-eye-slash"
        }else{
            conpasswd.type="password";
            eye1.className =  "fa-solid fa-eye"
        }
    }