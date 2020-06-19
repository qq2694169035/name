$(".codline").click(function() {
    $(".locald").hide();
    $(".phoned").show();
    $(".codline").attr("class", "codline secelt")
    $(".toline").removeClass("secelt")
})
$(".toline").click(function() {

    $(".locald").show();
    $(".phoned").hide();
    $(".toline").attr("class", "toline secelt")
    $(".codline").removeClass("secelt")
})

var loginnumber = $("#zhanghao1").val();
var btnn = document.getElementById("btnn");
var timer = null;
btnn.onclick = function() {
        var time = 60;
        timer = setInterval(function() {
            time--;
            btnn.innerHTML = time + "后再次获取";
            if (time == 0) {
                clearInterval(timer);
                btnn.innerHTML = "获取验证码"
                btnn.disabled = false;
            }
        }, 1000)
        this.disabled = true;
    }


// 登录


$("#btn4").click(function() {
    var userName = $("#zhanghao").val();
    var usermima = $("#mima").val();
    $.ajax({
        url: "http://59.111.92.205:13002/api/login",
        type: "post",
        data: {
            "username": userName,
            "password": usermima,
            "rememberMe": true,
        },
        success: function(data) {
            if (data.code == 0) {
                console.log(data)
                $(".liii").hide();
                $(".lii").show();
                localStorage.setItem("aaa", JSON.stringify(data.userInf))
                    // console.log(aaa)
                localStorage.setItem("a", true);
                window.open("../html/个人中心.html");
            } else if (data.code == 500) {
                console.log(data)
                alert("输入正确账号密码")
            }

        },
        error: function(error) {
            console.log(error)
        }
    })


});


// 手机号登录
$("#btn5").click(function() {
    var userName = $("#zhanghao1").val();
    var usermima = $("#mima1").val();
    $.ajax({
        url: "http://59.111.92.205:13002/api/login",
        type: "post",
        data: {
            "username": userName,
            "password": usermima,
            "rememberMe": true,
        },
        success: function(data) {
            if (data.code == 0) {
                console.log(data)
                $(".liii").hide();
                $(".lii").show();

                localStorage.setItem("aaa", JSON.stringify(data.userInf))
                    // console.log(aaa)
                localStorage.setItem("a", true);
                window.open("../html/个人中心.html");
            } else if (data.code == 500) {
                console.log(data)
                alert("输入正确验证码")
            }

        },
        error: function(error) {
            console.log(error)
        }
    })


})


// 获取验证码
$("#btnn").click(function() {
    var zhanghao1 = $("#zhanghao1").val();
    $.ajax({
        url: "http://59.111.92.205:13002/api/sendCode?mobile=" + zhanghao1,
        type: "get",
        contentType: "application/json",
        success: function(data) {
            console.log(data);
        }
    })
})



// 底部
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