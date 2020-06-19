$("#btn1").click(function() {
    var phonenumber = $("#phonenumber").val();
    var password = $("#password").val();
    var code = $("#code").val();
    $.ajax({
        url: "http://59.111.92.205:13002/api/findPwd",
        type: "post",
        contentType: "application/json",
        data: JSON.stringify({
            "phonenumber": phonenumber,
            "password": password,
            "code": code,
        }),
        success: function(data) {
            console.log(data)
        },
        error: function(error) {
            console.log(error);
        }
    })
})

// 忘记密码
var btn2=document.getElementById("btn2");
$("#btn2").click(function() {
    var phonenumber = $("#phonenumber").val();
    var time = 60;
    timer = setInterval(function() {
        time--;
        btn2.innerHTML = time + "后再次获取";
        if (time == 0) {
            clearInterval(timer);
            btn2.innerHTML = "获取验证码"
            btn2.disabled = false;
        }
    }, 1000)
    this.disabled = true;


// 发送验证码
    $.ajax({
        url: "http://59.111.92.205:13002/api/sendCode?mobile=" + phonenumber,
        type: "get",
        contentType: "application/json",
        success: function(data) {
            console.log(data)
        },
        error: function(error) {
            console.log(error)
        }
    })
})



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