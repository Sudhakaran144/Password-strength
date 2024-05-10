const password = document.querySelector('.password')
const show = document.querySelector('.show')
const strength = document.querySelector('.strength')
const range1 = document.querySelector(".str1")
const range2 = document.querySelector(".str2")
const range3 = document.querySelector(".str3")




password.addEventListener("keyup",()=>{
    let pass = password.value
    let count = 0
    const hasLowerCase = /[a-z]/.test(pass);
    const hasUpperCase = /[A-Z]/.test(pass);
    const hasNumbers = /\d/.test(pass);
    const hasSpecialChars = /[!@#$]/.test(pass);
     
    for(let i = 0 ; i<pass.length;i++){
        if(/[a-z]/.test(pass.charAt(i)) || /[A-Z]/.test(pass.charAt(i))){
            count++
            console.log(count)
        }
    }

    
    if(hasLowerCase && hasUpperCase && hasNumbers && hasSpecialChars && count >=4 ){
        strength.innerHTML = 'Your password is Strong'
        range1.style.background = "green"
        range2.style.background = "green"
        range3.style.background = "green"
        strength.style.color = "green"
    }
    else if(hasLowerCase && hasUpperCase && hasNumbers && hasSpecialChars && count <4 ){
        strength.innerHTML = 'Your password is medium'
        range1.style.background = "orange"
        range2.style.background = "orange"
        strength.style.color = "orange"
    }
    else{
        strength.innerHTML = 'Your password is Weak'
        range1.style.background = "red"
        strength.style.color = "red"
    }

})
show.addEventListener("click",()=>{
    if(password.type === 'password'){
        password.type = "text"
        show.innerHTML = 'hide'
    }
    else{
        password.type = 'password'
        show.innerHTML = 'show'
    }
})