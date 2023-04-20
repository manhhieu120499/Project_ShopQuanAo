var $ = document;
const btn_dangnhap = $.getElementById('submit');

btn_dangnhap.onclick = () => {
    var check_user = $.getElementById('user').value;
    var check_pass = $.getElementById('pass').value;
    if(check_user === 'thanhan' && parseInt(check_pass) === 123) {
        alert("Đăng nhập thành công");
    }else {
        alert("Tài khoản hoặc mật khẩu không đúng !");
    }
}



