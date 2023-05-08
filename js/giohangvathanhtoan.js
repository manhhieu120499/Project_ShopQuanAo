const name = document.querySelector('.name');
const phone = document.querySelector('.phone');
const address = document.querySelector('.address');
const btn = document.querySelector('.btn');

function validate_name(value) {
    var regex = /^[\p{L} ]+$/;
    return regex.test(value) ? true : false;
}

function validate_phone(value) {
    var regex = /^\d{10}$/;
    return regex.test(value);
}

function validate_address(value) {
    var regex = /^[a-zA-Z0-9 ]+$/;
    return regex.test(value);
}

btn.onclick = () => {
    var txtName = name.value;
    var txtSoDienThoai = phone.value;
    var txtDiaChi = address.value;
    var check_name = validate_name(txtName);
    var check_phone = validate_phone(txtSoDienThoai);
    var check_address = validate_address(txtDiaChi);
    if(txtName === "" || txtSoDienThoai === "" || txtDiaChi === "") {
        alert("Vui lòng nhập đầy đủ thông tin");
    }else {
        if(check_name == false) {
            alert("Họ và tên chỉ có kí tự chữ và khoảng trắng và bắt đầu bằng kí tự chữ");
        }
        if(check_phone == false) {
            alert("Số điện thoại chỉ chứa kí tự số");
        }
        if(check_address == false) {
            alert("Địa chỉ không chứa kí tự đặc biệt nào khác ngoài ('/')");
        }
    }
    if(check_address && check_name && check_phone) {
        alert("Thanh toán thành công");
        window.location.href = "index.html";
    }
}