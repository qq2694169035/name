$(".bigstudent").click(function() {
    $(".teacher").hide();
    $(".student").show();
    $(".bigstudent").attr("class", "bigstudent secelt")
    $(".bigteacher").removeClass("secelt")
})
$(".bigteacher").click(function() {

    $(".teacher").show();
    $(".student").hide();
    $(".bigteacher").attr("class", "bigteacher secelt")
    $(".bigstudent").removeClass("secelt")
})

// 注册
$("#btnn").click(function() {

    var loginName = $("#loginName").val();
    var userName = $("#userName").val();
    var phonenumber = $("#phonenumber").val();
    var email = $("#email").val();
    var password = $("#password").val();
    var code = $("#code").val();
    var idNumber = $("#idNumber").val();
    var school = $("#school").val();
    var profession = $("#profession").val();
    var grade = $("#grade").val();
    $.ajax({
        url: "http://59.111.92.205:13002/api/register",
        type: "post",
        contentType: "application/json",
        data: JSON.stringify({
            loginName: loginName,
            userName: userName,
            email: email,
            phonenumber: phonenumber,
            password: password,
            code: code,
            idNumber: idNumber,
            school: school,
            profession: profession,
            grade: grade,
        }),
        success: function(data) {
            console.log(data)
        }
    })
})

// 老师注册验证码
$("#btn1").click(function() {
    var phonenumber = $("#phonenumber").val();
    $.ajax({
        url: "http://59.111.92.205:13002/api/sendCode?mobile=" + phonenumber,
        type: "get",
        contentType: "application/json",
        success: function(data) {
            console.log(data);
        },
        error: function(error) {
            console.log(error)
        }
    })
})

// 学生获取验证码
$("#btn2").click(function() {
    var phonenumber = $("#phonenumber").val();
      if(phonenumber==""){
        alert("输入手机号")
      }else{
        var btnn = document.getElementsByClassName("btn1")[0];
        var timer = null;
        // var loginnumber = $("#phonenumber").val();
        // btnn.onclick = function() {
            var time = 60;
            timer = setInterval(function() {
                time--;
                btnn.innerHTML = time + "后重试";
                if (time == 0) {
                    clearInterval(timer);
                    btnn.innerHTML = "获取验证码"
                    btnn.disabled = false;
                }
            }, 1000)
            this.disabled = true;
        // }
        
        $.ajax({
            url: "http://59.111.92.205:13002/api/sendCode?mobile=" + phonenumber,
            type: "get",
            contentType: "application/json",
            success: function(data) {
                console.log(data);
            },
            error: function(error) {
                console.log(error)
            }
        })
 
      }
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





var btnn1 = document.getElementById("btn1");
var timer = null;

btnn1.onclick = function() {
    var time = 60;
    timer = setInterval(function() {
        time--;
        btnn1.innerHTML = time + "后重试";
        if (time == 0) {
            clearInterval(timer);
            btnn1.innerHTML = "获取验证码"
            btnn1.disabled = false;
        }

    }, 1000)
    this.disabled = true;
}