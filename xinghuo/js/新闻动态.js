// console.log(1111111)

$(".box-pic2").mouseover(function() {

    $(".QQ1").show();
    $(".QQ2").show();
})
$(".box-pic2").mouseout(function() {

    $(".QQ1").hide();
    $(".QQ2").hide();
})
$(".QQ1").mouseover(function() {

    $(".QQ1").show();
    $(".QQ2").show();
})
$(".QQ2").mouseover(function() {

    $(".QQ1").show();
    $(".QQ2").show();
})

$(".QQ1").mouseout(function() {

    $(".QQ1").show();
    $(".QQ2").show();
})
$(".QQ2").mouseout(function() {

    $(".QQ1").show();
    $(".QQ2").show();
})
$(".box-pic1").click(function() {
    window.location.href = "http://wpa.qq.com/msgrd?v=3&uin=577405209&site=qq&me"
})
$(".l111").click(function() {
    //  $(".l111").find("input").attr("checked", "checked");

    $(this).find("input").prop("checked", "checked").siblings().find("input").prop("checked", " ");
    $(".mainright").eq($(this).index()).show().siblings().hide();

})
debugger
$("#l111").find("input").prop("checked", true);
$("#l112").find("input").prop("checked", false);
$("#l113").find("input").prop("checked", false);



if (localStorage.a) {
    $("#lii").hide();
    $("#liii").show();
}
// var src = document.getElementById("main-right1");


// tab切换
$.ajax({
    url: "http://59.111.92.205:13002/api/innovation/notice/list",
    type: "post",
    contentType: "application/json",
    // data: JSON.stringify({ "type": "1" }),
    data: JSON.stringify({
        "type": "1"
    }),
    success: function(data) {
        console.log(data)
            // $("#createTime").html(data.rows[0].createTime);
        $("#createTime").html(data.rows[0].createTime);
        $("#p1").html(data.rows[0].describe);
        $("#ready-top").html(data.rows[0].title);
        $("#main-right1").attr("src", data.rows[0].coverUrl)

        localStorage.setItem("aa", data.rows[0].id)
    },
    error: function(error) {
        console.log(error)
    }
})


// tab切换
$("#l112").click(function() {
    $.ajax({
        url: "http://59.111.92.205:13002/api/innovation/notice/list",
        type: "post",
        contentType: "application/json",
        // data: JSON.stringify({ "type": "1" }),
        data: JSON.stringify({
            "type": "2"
        }),
        success: function(data) {
            console.log(data)

            $("#createTime1").html(data.rows[0].createTime);
            $("#p2").html(data.rows[0].describe);
            $("#ready-top1").html(data.rows[0].title);
            $("#main-right2").attr("src", data.rows[0].coverUrl)
            localStorage.setItem("aa", data.rows[0].id)

        },
        error: function(error) {
            console.log(error)
        }
    })
})


// tab切换
$("#l113").click(function() {
    $.ajax({
        url: "http://59.111.92.205:13002/api/innovation/notice/list",
        type: "post",
        contentType: "application/json",
        // data: JSON.stringify({ "type": "1" }),
        data: JSON.stringify({
            "type": "3"
        }),
        success: function(data) {
            console.log(data)
            $("#createTime2").html(data.rows[0].createTime);
            $("#p3").html(data.rows[0].describe);
            $("#ready-top2").html(data.rows[0].title);
            $("#main-right3").attr("src", data.rows[0].coverUrl)
            localStorage.setItem("aa", data.rows[0].id)

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
        $("#pp1").html(data.rows[0].copyright)
        $("#pp2").html(data.rows[0].internetContentProvider)
        $("#pp3").html(data.rows[0].email)
        $("#pp4").html(data.rows[0].technicalSupport)
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