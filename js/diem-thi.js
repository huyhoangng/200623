function calculateTotal(){
var diem_toan = parseFloat(document.getElementById("toan").value);
var diem_van = parseFloat(document.getElementById("van").value);
var diem_anh = parseFloat(document.getElementById("anh").value);
diem_toan *=2;
diem_van *=2;
var total= diem_toan + diem_van + diem_anh;
var point=" ";


if(total>=45){
    point="Chúc mừng bạn đã đỗ trường Chu Văn An!!!";
}
else if(total>=40){
    point="Chúc mừng bạn đã đỗ trường Cầu Giấy";
}
else{
    point="Bạn đốt tiền của bố mẹ rồi !!";
}

document.getElementById("point").innerHTML = "Kết quả: " + point;

}

