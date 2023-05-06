console.log(localStorage.length)
var $ = document;
const btn_dangnhap = $.getElementById('submit');

btn_dangnhap.onclick = () => {
    var check_user = $.getElementById('user').value;
    var check_pass = $.getElementById('pass').value;
    if(check_login(check_user, check_pass)) {
        alert("Đăng nhập thành công");
        window.location.href = "ban_hang.html";
    }else {
        alert("Tài khoản hoặc mật khẩu không đúng !");
    }
}

function check_login(check_user, check_pass) {
    for(let i = 0 ; i < localStorage.length ; i++) {
        var index = localStorage.key(i);
        var data = localStorage.getItem(index);
        var user = JSON.parse(data);
        if(user === null) {
            alert("Bạn vui lòng đăng kí tài khoản");
            window.location.href = "dang_ki.html";
        }else if(check_user === user.email && check_pass === user.password) {
            return true;
        }else {
            return false;
        }
    }
}





