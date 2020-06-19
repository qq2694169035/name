console.log(1111)


$(".nav1").click(function() {
    $(".content-right").show();
    $(".content-right1").hide();
    $(".nav1").attr("class", "nav1 secet")
    $(".nav2").removeClass("secet")
})
$(".nav2").click(function() {
    $(".content-right1").show();
    $(".content-right").hide();
    $(".nav2").attr("class", "nav2 secet")
    $(".nav1").removeClass("secet")
})


var aaa = JSON.parse(localStorage.aaa)
    // console.log(aaa)
$("#username").attr("value", aaa.loginName);
$("#email").attr("value", aaa.email);
$("#iphone").attr("value", aaa.phonenumber);
$("#name").attr("value", aaa.userName);
$("#card").attr("value", aaa.idNumber);
$("#school").attr("value", aaa.school);
$("#zhuan").attr("value", aaa.profession);
$("#class1").attr("value", aaa.grade);



//更新信息
$("#btn1").click(function() {
    $("#username").attr("value", aaa.loginName);
    $("#email").attr("value", aaa.email);
    $("#iphone").attr("value", aaa.phonenumber);
    $("#name").attr("value", aaa.userName);
    $("#card").attr("value", aaa.idNumber);
    $("#school").attr("value", aaa.school);
    $("#zhuan").attr("value", aaa.profession);
    $("#class1").attr("value", aaa.grade);
})

$("#btn2").click(function() {
    $.ajax({

        url: "http://59.111.92.205:13002/api/site/logout",
        type: "get",
        contentType: "application / json",
        xhrFields: {
            withCredentials: true // 要在这里设置 跨域设置cookie
        },
        crossDomain: true,

        success: function(data) {
            localStorage.clear();
            window.location.href = "../html/登录.html";
        }
    })


})


// 参赛状态
$.ajax({
    url: "http://59.111.92.205:13002/api/innovation/project/selectProjectBycreateBy",
    type: "POST",
    contentType: "application/json",
    data: aaa,
    success: function(data) {
        console.log(data)
    },
    error: function(error) {
        console.log(error)
    }
})

$.ajax({
    url: "http://59.111.92.205:13002/api/innovation/footerInfo/list",
    type: "post",
    contentType: "application/x-www-form-urlencoded",
    success: function(data) {
        // console.log(data);
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