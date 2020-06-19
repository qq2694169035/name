var apply1 = document.getElementsByClassName("apply");
console.log(apply1)
var btn = document.getElementsByClassName("btn");
var apply2 = document.getElementsByClassName("apply1");

apply1[0].onclick = function() {
    if (localStorage.a) {
        window.location.href = "../html/我要报名.html"

    } else {
        alert("登录")
        window.location.href = "../html/登录.html"

    }
}

if (localStorage.a) {
    $("#lii").hide();
    $("#liii").show();
}

$.ajax({
    url: "http://59.111.92.205:13002/api/innovation/footerInfo/list",
    type: "post",
    contentType: "application/x-www-form-urlencoded",
    success: function(data) {
        console.log(data);
        $("#p1").html(data.rows[0].copyright)
        $("#p2").html(data.rows[0].internetContentProvider)
        $("#p3").html(data.rows[0].email)
        $("#p4").html(data.rows[0].technicalSupport)
        $("#a1").html(data.rows[0].friendLinkList[0].linkName)
        $("#a2").html(data.rows[0].friendLinkList[1].linkName)
        $("#a3").html(data.rows[0].friendLinkList[2].linkName)
        $("#a4").html(data.rows[0].friendLinkList[3].linkName)
        $("#a5").html(data.rows[0].friendLinkList[4].linkName)
        $("#a6").html(data.rows[0].friendLinkList[5].linkName)
    },
    error: function(error) {
        console.log(error);
    }
})
// 星火创新杯
$.ajax({
    url: "http://59.111.92.205:13002/api/innovation/registration/detail",
    type: "post",
    contentType: "application/json",
    data: JSON.stringify({
        "category": "12"
    }),
    success: function(data) {
        console.log(data)
        $("#title").html(data.data.title)
        $("#p1").html(data.data.introduction);
    },
    error:function(error){
        console.log(error)
    }
})