$("#revert-revert").click(function() {
    $("#revert1").show();
})
$("#course-button").click(function() {
    $("#revert1").hide();
})
$(".li1").click(function() {
    $(this).addClass("active").siblings().removeClass("active");
    $(".course-bottom").eq($(this).index()).show().siblings(".course-bottom").hide();
})



var collection = document.getElementById("collection");
var collect = document.getElementById("collect")
collection.onclick = function() {
    collect.innerHTML = "已收藏";
    collection.style.color = "#ffb200";
    collection.style.border = "1px solid #ffb200";
}


$("#classify").mouseover(function() {
    $("#course1").show();
});

$("#classify").mouseout(function() {
    $("#course1").hide();
});

$("#course1").mouseover(function() {
    $("#course1").show();
});

$("#course1").mouseout(function() {
    $("#course1").hide();
});



$(".main-home").click(function() {
    window.location.href = "../html/首页.html";
})

// 底部
$.ajax({
    url: "http://59.111.104.104:8086/system/dict/data/list/open",
    type: "post",
    contentType: "application/x-www-form-urlencoded",
    data: {
        dictType: "blogroll",
        pageNum: 1,
        pageSize: 10,
        orderByColumn: "dictSort",
        isAsc: "asc",
    },
    success: function(data) {
        console.log(data)
        $($(".box a")[0]).html(data.rows[0].dictLabel)
        $($(".box a")[1]).html(data.rows[1].dictLabel)
        $($(".box a")[2]).html(data.rows[2].dictLabel)
        $($(".box a")[3]).html(data.rows[3].dictLabel)
        $($(".box a")[4]).html(data.rows[4].dictLabel)
    },
    error: function(error) {
        console.length(error)
    }

})




// 目录渲染
$.ajax({
    url: "http://59.111.104.104:8086/pc/course/detail/" + localStorage.id,
    type: "get",
    contentType: "application/json;charset=UTF-8",

    success: function(data) {
        console.log(data)
        $(".picture img").attr("src", data.data.coverFileUrl);
        $(".intro-top").html(data.data.courseTitle);
        $(".intro-top").html(data.data.courseTitle);
        $(".study").html(data.data.subSectionNum);
        $(".course-bottomp").html(data.data.courseDetail)
        for (var i = 0; i < data.data.sections.length; i++) {
            // var li1 = $("<span class='basics'></span>");
            $("#course-bottom").append($("<span class='basics'></span>"));
            $("#course-bottom").append($("<ul></ul>"))

            $($(".basics")[i]).html(i + 1 + "." + data.data.sections[i].sectionName + "<button class='course-input1'><svg class='icon icon5' aria-hidden='true'><use xlink:href='#icon-xiazai_'></use></svg>下载</button>");
            for (var j = 0; j < data.data.sections[i].subSections.length; j++) {
                $($("#course-bottom ul")[i]).append("<li><span class='start'></span> <p class='font'><span class='font1'><svg class='icon' aria-hidden='true'><use xlink:href='#icon-youjiantou-'></use></svg ></span ><span class ='watch' style ='display:none;'>观看</span></p></li>");

                $($("#course-bottom ul")[i]).find(".start").eq(j).html(i + 1 + "-" + (j + 1) + "&nbsp;" + data.data.sections[i].subSections[j].sectionName);

            }
        }


        $("#course-bottom li").mouseover(function() {
            $(this).find(".watch").show();
            $(this).find(".font1").hide();
        })
        $("#course-bottom li").mouseout(function() {
            $(this).find(".watch").hide();
            // $(".font1").show();
            $(this).find(".font1").show();
        })

    },
    error: function(error) {
        console.length(error)
    }
})

// 评论
$.ajax({
    url: "http://59.111.104.104:8086/pc/comment/commentList/course/" + localStorage.id,
    type: "get",
    contentType: "application/json;charset=UTF-8",
    success: function(res) {
        console.log(res);

        // 
        // 
        for (var i = 0; i < res.rows.length; i++) {
            // console.log(res.rows)
            $("#box").append("<div class='box1'></div>")
            $("#box").append("<svg class='icon icon3' aria-hidden='true' style='vertical-align: middle;'><use xlink:href='#icon-zhanghaoguanli'></use><span class='nickname' style='font-size:14px'></span><span style='float: right;'><svg class='icon icon-five' aria-hidden='true'> <use xlink: href = '#icon-jingdiananli_wujiaoxing_shoucanghou' > < /use> </svg><svg class='icon icon-five' aria-hidden='true'><use xlink: href = '#icon-jingdiananli_wujiaoxing_shoucanghou' > < /use> </svg><svg class='icon icon-five' aria-hidden='true'> <use xlink: href = '#icon-jingdiananli_wujiaoxing_shoucanghou' > < /use> </svg><svg class='icon icon-five' aria-hidden='true'> <use xlink: href = '#icon-jingdiananli_wujiaoxing_shoucanghou' > < /use> </svg><svg class='icon icon-five' aria-hidden='true'> <use xlink: href = '#icon-jingdiananli_wujiaoxing_shoucanghou' > < /use> </svg></span >")
            $("#box").append("<p class='commentContent' style='font-size:14px;margin-left: 37px;color:rgba(0,0,0,.65);margin-top:10px'></p>")
            $("#box").append("<p> <span style='font-size: 14px; float: right;color:rgba(0,0,0,.65)' id='revert-revert'>回复</span> <span style='font-size: 14px; float: right;color:rgba(0,0,0,.65)' class='createdTime'></span> </p> <div style='width: 100%; height: 1px; background-color: rgb(232, 232, 232); margin-top: 55px;'></div> <div style='clear: both;'></div>");
            $($(".nickname")[i]).html(res.rows[i].user.nickname);
            $($(".commentContent")[i]).html(res.rows[i].commentContent);
            $($(".createdTime")[i]).html(res.rows[i].createdTime);
        }
    },
    error: function(error) {
        console.log(error)
    }
})