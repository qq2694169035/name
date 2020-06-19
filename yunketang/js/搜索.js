// 确认是否有值传过来，比如keyword或者专题id
var picture = "<div class='gratis'><div class ='gratis-box'><img src = '' style = 'height: 136px;' class='picture' ></div> <p class = 'gratis-header'> <a href = '#' style='color:black'></a></p><p class ='all'><a href ='#'class ='gratis-main'>共<span class='sum'></span>节课|<span class='people'></span>人报名</a></p ><p>￥<span class ='newprice'></span>￥<span class='oldprice'></span><span class = 'time' ></p></div>"

console.log(localStorage.sbox)
if (localStorage.sbox) {
    fn1(1, localStorage.sbox, "")

} else {
    fn1(1, localStorage.sbox);

}


var picture = "<div class='gratis'><div class ='gratis-box'><img src = '' style = 'height: 136px;' class='picture' ></div> <p class = 'gratis-header'> <a href = '#' style='color:black'></a></p><p class ='all'><a href ='#'class ='gratis-main'>共<span class='sum'></span>节课|<span class='people'></span>人报名</a></p ><p>￥<span class ='newprice'></span>￥<span class='oldprice'></span><span class = 'time' ></p></div>"


localStorage.removeItem("courseId")



$(".one").click(function () {
    $(".course").eq($(this).index() - 1).show().siblings(".course").hide();
})
$("#classify").mouseover(function () {
    $("#course1").show();
});

$("#classify").mouseout(function () {
    $("#course1").hide();
});

$("#course1").mouseover(function () {
    $("#course1").show();
});

$("#course1").mouseout(function () {
    $("#course1").hide();
});

$(".main-home").click(function () {
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
    success: function (data) {
        console.log(data)
        $($(".box a")[0]).html(data.rows[0].dictLabel)
        $($(".box a")[1]).html(data.rows[1].dictLabel)
        $($(".box a")[2]).html(data.rows[2].dictLabel)
        $($(".box a")[3]).html(data.rows[3].dictLabel)
        $($(".box a")[4]).html(data.rows[4].dictLabel)
    },
    error: function (error) {
        console.length(error)
    }

})
$(".subjectTitle").attr("name", "sadasd")



// 专题列表
$.ajax({
    url: "http://59.111.104.104:8086/weChat/applet/subject/list",
    type: "post",
    contentType: "application/json",
    data: JSON.stringify({
        "enable": "1"
    }),
    success: function (res) {
        console.log(res)
        for (var i = 0; i < res.rows.length; i++) {
            // 渲染标题
            $("#nav-topright").append("<span class='subjectTitle'></span>");
            $($(".subjectTitle")[i]).html(res.rows[i].title);
            $($(".subjectTitle")[i]).attr("name", res.rows[i].subjectId);
            // 渲染页面
            $($(".subjectTitle")[i]).click(function () {
                localStorage.setItem("courseid", $(this).attr("name"))
                fn1(1, localStorage.sbox,localStorage.courseid)
            })

        }
        for (var i = 0; i < $("#nav-topright span").length; i++) {
            // 首页的课堂分类对应搜索应的 专题列表
            if (localStorage.courseid == $($(".subjectTitle")[i]).attr("name")) {
                $($(".subjectTitle")[i]).addClass("active").siblings().removeClass();
                fn1(1, localStorage.sbox, localStorage.courseid)
            }
        }

        $(".nav-topright span").click(function () {
            $(this).addClass("active").siblings().removeClass();
        });
        $(".nav-mainright span").click(function () {
            $(this).addClass("active").siblings().removeClass();
        });
        $(".nav-bottomright span").click(function () {
            $(this).addClass("active").siblings().removeClass();
        });






    }
})
var page = 1;

function fn1(number, keyword, subjectId) {
    var searchData = {
        pageNum: number,
        pageSize: 10,
    }

    if (keyword) {
        searchData.keyword = keyword
    }
    if (subjectId) {
        searchData.subjectId = subjectId
    }


    $.ajax({
        url: "http://59.111.104.104:8086/pc/course/search/keyword",
        type: "get",
        async: false,
        data: searchData,
        success: function (res) {
            console.log(res)
            if ($("#course").children().length > 0) {
                $("#course").empty();
            }
            if ($("#pagination").children().length > 0) {
                $("#pagination").empty();
            }
            // 分页
            if (res.total % 10 != 0 && res.total > 0) {
                var courseb = parseInt(res.total / 10) + 1;
                $("#pagination").append("<li><a id='leftan'>&laquo;</a></li>")
                for (var i = 0; i < courseb; i++) {
                    $("#pagination").append("<li class='one'><a></a></li>")
                    $($(".one a")[i]).html(i + 1);
                }
                $("#pagination").append("<li><a id='rightan'>&raquo;</a></li>")
            }
            // 分页
            else if (res.total % 10 == 0) {
                var courseb = parseInt(res.total / 10)
                $("#pagination").append("<li><a id='leftan'>&laquo;</a></li>")
                for (var i = 0; i < courseb; i++) {
                    $("#pagination").append("<li class='one'><a></a></li>")
                    $($(".one a")[i]).html(i);
                }
                $("#pagination").append("<li><a id='rightan'>&raquo;</a></li>")
            }
            // 遍历图片的多少
            for (var j = 0; j < res.courseList.length; j++) {
                // 清空输入框value
                localStorage.setItem("sbox", "");
                $("#course").append(picture);
                $($(".picture")[j]).attr("src", res.courseList[j].coverFileUrl);
                $($(".gratis-header")[j]).html(res.courseList[j].courseTitle);
                $($(".sum")[j]).html(res.courseList[j].subSectionNum);
                $($(".people")[j]).html(res.courseList[j].participationsCount);
                $($(".newprice")[j]).html(res.courseList[j].payPrice);
                $($(".oldprice")[j]).html(res.courseList[j].coursePrice);
                $($(".gratis")[j]).attr("name", res.courseList[j].courseId);
                $($(".gratis")).click(function () {
                    localStorage.setItem("id", $(this).attr("name"));
                    window.location.href = "../html/vue全家桶.html";
                })
                // $(".gratis").attr("name", "asdasd");

            }

            // 左按钮
            $("#leftan").click(function () {
                if (page > 1) {
                    page -= 1;
                    console.log(111)
                    fn1(page, localStorage.sbox, localStorage.courseid);
                }

            });
            // 右按钮
            $("#rightan").click(function () {
                if (page < courseb) {
                    page += 1;
                    console.log(222)
                    fn1(page, localStorage.sbox, localStorage.courseid);
                }
            });
            // console.log(localStorage.courseid)
            $(".one").click(function () {
                fn1($(this).text(), localStorage.sbox, localStorage.courseid)
            })
        }

    })


}
// 搜索框

$("#seeks").click(function () {
    localStorage.removeItem("courseId")
    localStorage.setItem("sbox", $("#seekss").val());
    fn1(1, localStorage.sbox, "")
});
$("#allz").click(function () {
    localStorage.setItem("courseid", "")
    fn1(1, localStorage.sbox, "")
})



