//创建数组存放背景url
var bgs = new Array('url("images/bg01.jpg")','url("images/bg02.jpg")','url("images/bg04.jpg")','url("images/bg05.jpg")','url("images/bg08.jpg")','url("images/bg25.jpg")','url("images/bg09.jpg")','url("images/bg10.jpg")','url("images/bg12.jpg")','url("images/bg13.jpg")','url("images/bg25.jpg")','url("images/bg15.jpg")','url("images/bg17.jpg")','url("images/bg19.jpg")','url("images/bg20.jpg")','url("images/bg21.jpg")','url("images/bg22.jpg")','url("images/bg23.jpg")','url("images/bg25.jpg")');


//设置导航栏图标的点击时间
//点击更改背景
function changeBg(){
    document.getElementById('bgid').style.backgroundImage = bgs[Math.round(Math.random()* (bgs.length-1))];
}
// 获取所有.item元素
let items=document.querySelectorAll(".item");
// 设置当前选中项样式的方法
function setActive(){
    // 遍历所有.item元素,移除active样式
    items.forEach((item)=>{
        item.classList.remove("active");
    })
    // 为当前选中项添加active样式
    this.classList.add("active");
}
// 遍历所有.item元素,分别为其设置点击事件
items.forEach((item)=>{
    item.addEventListener("click",setActive);
})

function myTime(){
    let time=new Date();
    let hh=time.getHours();  //时
    let mm=time.getMinutes();  //分
    let ss=time.getSeconds();  //秒
    // Math.floor() 向下取整
    document.getElementById("1").innerText=Math.floor(hh/10);
    document.getElementById("2").innerText=hh%10;
    document.getElementById("4").innerText=Math.floor(mm/10);
    document.getElementById("5").innerText=mm%10;
    document.getElementById("7").innerText=Math.floor(ss/10);
    document.getElementById("8").innerText=ss%10;
}
// 一秒执行一次
setInterval(myTime,1000);