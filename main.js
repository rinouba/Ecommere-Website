{//for Register form
const username = document.getElementById("username")
const regname = /.{4,}/
const checktrue = document.querySelectorAll(".icon-check-circle")[0]
const checkbtn = () => {
    //check if all inputs true then remove disabled from button Register
    if (username.classList.contains("true")
    &&email.classList.contains("true")
    &&psw.classList.contains("true")
    &&pswrepeat.classList.contains("true")) {
        regbtn.removeAttribute("disabled")
    }else{
        regbtn.setAttribute("disabled","")
    }
}
username.addEventListener("keyup",(eo) => {
        //for username check regxp
    username.classList.add("false")
    parg.style.display = "block" 
    if (username.value.length>=2) {
        username.classList.add("true")
        username.classList.remove("false")
        parg.style.display = "none"
        checktrue.style.opacity= "1"
    }else{
        username.classList.add("false")
        username.classList.remove("true")
        parg.style.display = "block"
        checktrue.style.opacity= "0"
    }
    checkbtn()
})

const pargemail = document.getElementById("pargemail")
email.addEventListener("keyup",(eo) => {
    //check for email input
    const regEmail=
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    email.classList.add("false") 
    pargemail.style.display = "block"
    if (regEmail.test(email.value)) {
        email.classList.add("true")
        email.classList.remove("false")
        pargemail.style.display = "none"
        email.nextElementSibling.style.opacity= "1"
    }else{
        email.classList.add("false")
        email.classList.remove("true")
        pargemail.style.display = "block"
        email.nextElementSibling.style.opacity= "0"
    }
    checkbtn()
})

psw.addEventListener("keyup",(eo) => {
    //check for password input
    psw.classList.add("false") 
    pargpass.style.display = "block"
    const regPassword=
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if (regPassword.test(psw.value)) {
        psw.classList.add("true")
        psw.classList.remove("false")
        pargpass.style.display = "none"
        psw.nextElementSibling.style.opacity= "1"
    }else{
        psw.classList.add("false")
        psw.classList.remove("true")
        pargpass.style.display = "block"
        psw.nextElementSibling.style.opacity= "0"
    }
    checkbtn()
})

pswrepeat.addEventListener("keyup",(eo) => {
    //check for repeat password
    pswrepeat.classList.add("false") 
    pargrep.style.display = "block"
    if (pswrepeat.value==psw.value) {
        pswrepeat.classList.add("true")
        pswrepeat.classList.remove("false")
        pargrep.style.display = "none"
        pswrepeat.nextElementSibling.style.opacity= "1"
    }else{
        pswrepeat.classList.add("false")
        pswrepeat.classList.remove("true")
        pargrep.style.display = "block"
        pswrepeat.nextElementSibling.style.opacity= "0"
    }
    checkbtn()
})
const form = document.getElementById("papaform")
const btncreate = document.getElementById("btncreate")
btncreate.addEventListener("click",(eo) => {
    //make it visible when i press Register
    form.style.display = "flex"
    setTimeout(() => {
        formreg.style.transform = "scale(1)"
    }, 100);
})

const close = document.getElementById("close")
close.addEventListener("click",(eo) => {
    //make it hidden when i press button register
        formreg.style.transform = "scale(0)"
    setTimeout(() => {
        form.style.display = "none"
    }, 500);
})
}
const addcart = document.querySelectorAll(".addcart")
