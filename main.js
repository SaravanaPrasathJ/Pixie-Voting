const scriptURL = 'https://script.google.com/macros/s/AKfycbzDcbQsWCmPmGm2GVSyiV9N_c7H9ElhJ7Q88QW0xTFmyd1iljtoQlR5dMZbWzETWnDz/exec'
const form = document.forms['google-sheet']
const erroroc = document.getElementById('erroroc')
var user = document.getElementById('userid');
var photonum = document.getElementById('photono');
const success = document.getElementById('success');
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            setTimeout(() => {
                user.value = '';
                photonum.value = '';
            }, 1500);
            success.style.display = "block"
            setTimeout(() => {
                success.style.display = 'none';
            }, 1500);
        })
        .catch(error => {
            erroroc.style.display = "block"
            setTimeout(() => {
                erroroc.style.display = 'none';
            }, 1500);
        })
})
function message() {
    var user = document.getElementById('userid');
    var photonum = document.getElementById('photono');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');
    const alertra = document.getElementById('alertra')
    if (user.value === '' || photonum.value === '') {
        danger.style.display = 'block';

    }
    else {
        if (photonum.value < 1 || photonum.value > 15) {
            alertra.style.display = 'block'
            photonum.value = '';
        }
    }
    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
        alertra.style.display = 'none'
    }, 1500);
}

function validate() {
    var user = document.getElementById("username");
    var pass = document.getElementById("password");
    if (user.value == "admin" && pass.value == "1234") {
        window.location.href("result.html");
    }
    else {
        alert("login failed");
        return;
    }
}
