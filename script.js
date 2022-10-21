const password = document.getElementById('loginPassword')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if(password.value.length <= 6) {
        messages.push('Password must be 8 characters or more')
    }
    
    if(messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }

})  
function validation(){
    var form = document.getElementById("form");
    var email = document.getElementById("loginName").value;
    var result = document.getElementById("result");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    

    if(email.match(pattern)){
        form.classList.add("valid");
        form.classList.remove("invalid");
        result.innerHTML = "Valid Email";
        result.style.color = "#00ff00";
    }
    else{
        form.classList.remove("valid");
        form.classList.add("invalid");
        result.innerHTML = "Enter valid Email";
        result.style.color = "#ff0000";
    }

    // if(num.match(phonenumber)){
    //     form.classList.add("valid");
    //     form.classList.remove("invalid");
    //     pnum.innerHTML = "Valid number";
    //     pnum.style.color = "#00ff00";
    // }
    // else{
    //     form.classList.remove("valid");
    //     form.classList.add("invalid");
    //     pnum.innerHTML = "Enter valid number";
    //     pnum.style.color = "#ff0000";
    // }
}

// function validate(){
//     var num = document.getElementById("validationCustomPhoneNumber");
//     var pnum = document.getElementById("pnum");
//     var phonenumber = [9][0-9]{9};
// }