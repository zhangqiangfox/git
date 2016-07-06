 //js部分;
 //switch方式
function level() {//定义函数名;
    var score = document.getElementById("num").value;
    switch (true) {
        case score=="":
            alert("请重新输入分数！");
            break;      
        case score>100:
            alert("您输入的成绩不符，请重新输入！");
            break;
        case score<0:
            alert("您输入的成绩不符，请重新输入！");
            break;
        case score <= 100 && score > 90:
            alert("该生为一等生");
            break;
        case score <= 90 && score > 80:
            alert("该生为二等生");
            break;
        case score <= 80 && score > 70:
            alert("该生为三等生");
            break;
        case score <= 70 && score > 60:
            alert("该生为四等生");
            break;
        default:
            alert("该生不及格，重修");
    }
}


// if方式开始


var stutent = 90
if (stutent <= 100 && stutent >= 90) {
	console.warn(1);

} else if (stutent < 90 && stutent >= 80) {
	console.warn(2);

} else if (stutent < 80 && stutent >= 70) {
	console.warn(3);

} else if (stutent < 70 && stutent >= 60) {
	console.warn(4);

} else if (stutent < 60 && stutent >= 50) {
	console.warn(5);

} else if (stutent < 50 && stutent >= 40) {
	console.warn(6);

} else if (stutent < 40 && stutent >= 30) {
	console.warn(7);

} else if (stutent < 30 && stutent >= 20) {
	console.warn(8);

} else if (stutent < 20 && stutent >= 10) {
	console.warn(9);

} else if (stutent < 10 && stutent >= 0) {
	console.warn(10);

};

//js部分结束;
