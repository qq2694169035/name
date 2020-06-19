$(".li1").mouseover(function() {
    $(this).addClass("secet").siblings().removeClass("secet");

    $(".online-leftpic1").eq($(this).index()).show().siblings().hide();
})




$(".input-group-addon").click(function() {
    window.location.href = "file:///E:/%E9%99%88%E5%86%A0%E6%96%87-%E5%A4%A9%E4%BA%AE%E4%BA%91%E8%AF%BE%E5%A0%82/html/%E6%90%9C%E7%B4%A2.html";
})

$(".more").click(function() {
    window.location.href = "file:///E:/%E9%99%88%E5%86%A0%E6%96%87-%E5%A4%A9%E4%BA%AE%E4%BA%91%E8%AF%BE%E5%A0%82/html/%E6%90%9C%E7%B4%A2.html";
})

$(".gratis-box").click(function() {
    window.location.href = "file:///E:/%E9%99%88%E5%86%A0%E6%96%87-%E5%A4%A9%E4%BA%AE%E4%BA%91%E8%AF%BE%E5%A0%82/html/vue%E5%85%A8%E5%AE%B6%E6%A1%B6.html";
})


// 轮播
$.ajax({
    url: "http://59.111.104.104:8086/weChat/applet/course/banner/list",
    type: "get",
    data: {
        number: "4"
    },
    success: function(data) {
        // console.log(data.data[0].imgUrlPc);

        $(".item1").css({
            backgroundImage: "url(" + data.data[0].imgUrlPc + ")",

        }), $(".item2").css({

            backgroundImage: "url(" + data.data[1].imgUrlPc + ")",

        }), $(".item3").css({

            backgroundImage: "url(" + data.data[2].imgUrlPc + ")",

        }), $(".item4").css({

            backgroundImage: "url(" + data.data[3].imgUrlPc + ")"
        })
    }
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
    }

})

// 免费课堂
$.ajax({
    url: "http://59.111.104.104:8086/weChat/applet/course/list/type",
    type: "post",
    contentType: "application/x-www-form-urlencoded",
    data: {
        type: "free",
        pageNum: 1,
        pageSize: 10,
    },

    success: function(data) {
        console.log(data)
        $(".main .gratis ").click(function() {
            var name1 = $(this).attr("name");
            localStorage.setItem("id", name1)

        })

        for (var i = 0; i < 10; i++) {

            $($(".gratis")[i]).attr("name", data.rows[i].courseId);
            $($(".gratis-box img")[i]).attr("src", data.rows[i].coverFileUrl);
            $($(".gratis-header")[i]).html(data.rows[i].courseSubtitle);

            $($(".many")[i]).html(data.rows[i].subSectionNum);
            $($(".sighup")[i]).html(data.rows[i].learningNum);

        }

    },
    error: function(error) {
        console.length(error)
    }
})

// 精品课堂
$.ajax({
        url: "http://59.111.104.104:8086/weChat/applet/course/list/type",
        type: "post",
        contentType: "application/x-www-form-urlencoded",
        data: {
            type: "boutique",
            pageNum: 1,
            pageSize: 5,
        },
        success: function(data) {
            console.log(data)
            for (var i = 0; i < 5; i++) {

                $($(".gratis")[i + 10]).attr("name", data.rows[i].courseId);
                $($(".gratis-box img")[i + 10]).attr("src", data.rows[i].coverFileUrl);
                $($(".gratis-header")[i + 10]).html(data.rows[i].courseSubtitle);

                $($(".many")[i + 10]).html(data.rows[i].subSectionNum);
                $($(".sighup")[i + 10]).html(data.rows[i].learningNum);
                $($(".newprice")[i]).html(data.rows[i].discountPrice);
                $($(".oldprice")[i]).html(data.rows[i].coursePrice)
                $($(".time")[i]).html(data.rows[i].discountDesc)

            }

        },
        error: function(error) {
            console.length(error)
        }
    })
    // console.log($(".many"))


    // 限时折扣
$.ajax({
    url: "http://59.111.104.104:8086/weChat/applet/course/list/type",
    type: "post",
    contentType: "application/x-www-form-urlencoded",
    data: {
        type: "discount",
        pageNum: 1,
        pageSize: 5,
    },
    success: function(data) {
        console.log(data)
        // console.log(data)
        for (var i = 0; i < 5; i++) {
            $($(".gratis")[i + 15]).attr("name", data.rows[i].courseId);
            $($(".gratis-box img")[i + 15]).attr("src", data.rows[i].coverFileUrl);
            $($(".gratis-header")[i + 15]).html(data.rows[i].courseSubtitle);

            $($(".many")[i + 15]).html(data.rows[i].subSectionNum);
            $($(".sighup")[i + 15]).html(data.rows[i].learningNum);
            $($(".newprice")[i + 5]).html(data.rows[i].discountPrice);
            $($(".oldprice")[i + 5]).html(data.rows[i].coursePrice)
            $($(".time")[i + 5]).html(data.rows[i].discountDesc)

        }

    },
    error: function(error) {
        console.length(error)
    }
})
// 给图片添加name属性
$(".gratis").attr("name", "asdsa");



// 专题列表
$.ajax({
    url: "http://59.111.104.104:8086/weChat/applet/subject/list",
    type: "post",
    contentType: "application/json",
    data: JSON.stringify({
        "enable": "1"
    }),
    success: function(res) {
        console.log(res);
        $(".subjectTitle").attr("name", "asdfc")
        for (var i = 0; i < res.rows.length; i++) {
            $("#course1").append("<li><a class='subjectTitle'></a></li>");
            $($(".subjectTitle")[i]).html(res.rows[i].title);
            $($(".subjectTitle")[i]).attr("name", res.rows[i].subjectId)

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
        $("#course1 li").click(function() {
            var courseId = $(this).children().attr("name");
            localStorage.setItem("courseid", courseId)
            console.log(courseId)
            // localStorage.setItem("aa", $(this).index())
            window.location.href = "../html/搜索.html"
        })
    }
})

// 搜索框
$(".input-group-addon").click(function() {
        localStorage.setItem("sbox", $("#searchBox").val())

})
    // console.log()