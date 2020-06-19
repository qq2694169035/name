// 阅读页
// localStorage.aa 是单机首页存的id
$.ajax({
    url: "http://59.111.92.205:13002/api/innovation/notice/detail",
    type: "post",
    contentType: "application/json",
    data: JSON.stringify({
        "id": localStorage.aa
    }),
    success: function(res) {
        console.log(res)
        $("#p1").html(res.data.content)
        $("#h11").html(res.data.title)
        $("#title").html(res.data.updateTime)
    },
    error: function(error) {
        console.log(error);
    }
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