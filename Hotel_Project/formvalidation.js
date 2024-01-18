const fstname = document.getElementById("firstname")
const lstname = document.getElementById("lastname")
const gmail = document.getElementById("gmail")
const passwd = document.getElementById("password")
const conpasswd = document.getElementById("confirmpassword")
const form = document.querySelector('form')
        form.addEventListener('submit',(e)=>{
        e.preventDefault();
        Validateform()
                });

const Validateform = ()=>{
    const fnameval = fstname.value.trim();
    const lnameval = lstname.value.trim();
    const gmailval = gmail.value.trim();
    const passwdval = passwd.value.trim();
    const conpasswdval = conpasswd.value.trim();

    function isEmail(){
        const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
            return reg.test(gmailval)
    }
    if(fnameval==""){
        setError(fstname,"First name is required")
    }else{
        setDefault(fstname)
    }

    if(lnameval==""){
        setError(lstname,"Last name is required")
    }else{
        setDefault(lstname)
    }

    if(gmailval==""){
        setError(gmail,"Email ID required")
    }else if(!isEmail()){
        setError(gmail,"Enter a valid Email Id")
    }
    else{
        setDefault(gmail)
    }

    if(passwdval==""){
        setError(passwd,"Password required")
    }
    else if(!(passwdval.match(/[A-Z]/))){
        setError(passwd,"Password must contain 1 Upper case characters")
    }
    else if(passwdval.length<8){
        setError(passwd,"Password must contain atleast 8 characters")
    }
    else{
        setDefault(passwd)
    }

    if(conpasswdval==""){
        setError(conpasswd,"Confirm password is required")
    }
    else if(passwdval!=conpasswdval){
        setError(conpasswd,"Password is not matching")
        console.log(passwd)
        console.log(conpasswdval)
    }
    else{
        setDefault(conpasswd)
    }
}
    function setError(input,message){
        const formControl = input.parentElement;
        const small = formControl.querySelector('small')
        formControl.className = 'form_container-input error';
        small.innerText = message;
    }
    function setDefault(input){
        const formControl = input.parentElement;
        const small = formControl.querySelector('small')
        formControl.className = 'form_container-input';
        small.style.visibility = 'hidden';
    }