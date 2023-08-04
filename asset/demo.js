var a = 2;
var b = 5;
var c = Sum(a, b);
var d = subtraction(b, a);
var e = multiplication(a, b);
var f = division(b, a);
console.log('Số thứ nhất vừa nhập là :', a);
console.log('Số thứ hai vừa nhập là :', b);

console.log('Kết quả của phép công :', c);
console.log('Kết quả của phép trừ :', d);
console.log('Kết quả của phép nhân :', e);
console.log('Kết quả của phép chia :', f);

function Sum(sothunhat, sothuhai) {
    return sothunhat + sothuhai;
}
function subtraction(sothunhat, sothuhai) {
    return sothunhat - sothuhai;
}
function multiplication(sothunhat, sothuhai) {
    return sothunhat * sothuhai;
}
function division(sothunhat, sothuhai) {
    return sothunhat / sothuhai
}
