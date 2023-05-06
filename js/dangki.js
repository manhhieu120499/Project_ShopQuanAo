
var list_user = [];
var storageKey = "";
function Validator(options) {

    var selectorRules = {};

   function validate(inputElement, rule) {
    var errorElement = inputElement.parentElement.querySelector(options.errorMessage);
    var errorMessage;
    var rules = selectorRules[rule.selector];
    for (var i = 0 ; i < rules.length ; i++) {
        errorMessage = rules[i](inputElement.value);
        if(errorMessage) {
            break;
        }
    }
    if(errorMessage) 
    {
       errorElement.innerText = errorMessage;
       inputElement.parentElement.classList.add('invalid');
    }else {
        errorElement.innerText = '';
        inputElement.parentElement.classList.remove('invalid');
    }
   }
    // lấy element của form cần validate
    var formElement = document.querySelector(options.form);
    if(formElement) {
        formElement.onsubmit = (e) => {
            e.preventDefault();
            options.rules.forEach((rule) => {
                var inputElement = formElement.querySelector(rule.selector);
                validate(inputElement, rule);
            });
            if(check_user() === true) {
                addItemToLocalStorage();
                alert("Đăng kí thành công");
                window.location.href = "ban_hang.html";
            }else {
                alert("Email này đã được đăng kí, vui lòng nhập email mới");
            }
        } 
       options.rules.forEach((rule) => {
           if(Array.isArray(selectorRules[rule.selector])) {
                 selectorRules[rule.selector].push(rule.test);
           }else {
               selectorRules[rule.selector] = [rule.test];
           }
           var inputElement = formElement.querySelector(rule.selector);
           if(inputElement) {
            // xử lý trường hợp blur ra ngoài
             inputElement.onblur = () => {
                validate(inputElement, rule);
             }

             // xử lý mỗi khi người dùng nhập vào input
             inputElement.oninput = () => {
                var errorElement = inputElement.parentElement.querySelector(options.errorMessage);
                errorElement.innerText = '';
                inputElement.parentElement.classList.remove('invalid');
             }
           }
       })
    }
}


// Định nghĩa các rule
// Nguyên tắc khi có lỗi trả ra message lỗi ngược lại ko trả gì cả
Validator.isRequired = function(selector) {
    return {
        selector:selector,
        test: function(value) {
             return value.trim() ? undefined : "Vui lòng nhập trường này" 
        }
    };
}

Validator.isEmail = function (selector) {
    return {
        selector:selector,
        test: function(value) {
             var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
             return regex.test(value) ? undefined : 'Trường này phải là email';
        }
    };
        
}

Validator.isPassword = function (selector, min) {
    return {
        selector:selector,
        test: function(value) {
            return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} kí tự`;
        }
    };
}

Validator.isConfirm = function (selector, getConfirm) {
    return {
        selector:selector,
        test: function(value) {
            return value === getConfirm() ? undefined : 'Giá trị nhập vào không khớp';
        }
    };
}

Validator.isName = function(selector, message) {
    return {
        selector: selector,
        test: function(value) {
            var check_name =  /^[a-zA-Z]+$/;
            return check_name.test(value) ? undefined : message || 'Dữ liệu không hợp lệ';
        }
    }
}



function addItemToLocalStorage() {
    var first_name = document.getElementById('first_name').value;
    var last_name = document.getElementById('last_name').value;
    var email = document.getElementById('mail').value;
    var password = document.getElementById('pass').value;
    var user = {
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password
    }
    list_user.push(user);
    storageKey = "id" + "_" + (Math.floor(Math.random()*(1000)) + 1);
    localStorage.setItem(storageKey, JSON.stringify(user));
}

function check_user() {
    var email = document.getElementById('mail').value;
    for(let i = 0 ; i < localStorage.length ; i++) {
        var temp = localStorage.key(i);
        var data = localStorage.getItem(temp);
        var user = JSON.parse(data);
        if(user.email === email) {
            return false;
        }
    }
    return true;
}


