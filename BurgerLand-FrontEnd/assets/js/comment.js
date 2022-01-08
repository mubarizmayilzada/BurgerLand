const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const commentInput = document.getElementById('comment');

const errorName = document.querySelector('#error-name');
const errorEmail = document.getElementById('error-email');
const errorComment = document.querySelector('#error-comment');

const submitBtn = document.getElementById('comment-submit');

// const nameValue = nameInput.value.length;
// const emailValue = emailInput.value.length;
// const commentValue = commentInput.value.length;

submitBtn.addEventListener('click', (e)=>{

    e.preventDefault();
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const checkEmail = re.test(emailInput.value.trim());
    
    
    if(emailInput.value.length == 0){
        errorEmail.innerText='Email cannot be left blank'
        errorEmail.classList.add("error-show");
        errorEmail.classList.remove("error-hide");
    }
    else if(!checkEmail){
        errorEmail.innerText='The email is not spelled correctly'
        errorEmail.classList.add("error-show");
        errorEmail.classList.remove("error-hide");
    }
    else{
        errorEmail.classList.remove("error-show");
        errorEmail.classList.add("error-hide");
    }


    if (nameInput.value.length == 0) {
        errorName.classList.remove('error-hide');
        errorName.classList.add('error-show');
    }
    else{
        console.log('sehe');
        errorName.classList.remove('error-show');
        errorName.classList.add('error-hide');

    }

    // if (emailInput.value.length == 0) {
    //     errorEmail.classList.remove('error-hide');
    //     errorEmail.classList.add('error-show');
    // }
    // else{
    //     errorEmail.classList.add('error-hide');
    //     errorEmail.classList.remove('error-show');
    // }

    if (commentInput.value.length == 0) {
        errorComment.classList.remove('error-hide');
        errorComment.classList.add('error-show');
    }
    else{
        errorComment.classList.add('error-hide');
        errorComment.classList.remove('error-show');
    }

})