$("#btn1").click(function() {

    var worksTitle = $("#worksTitle").val();
    var name1 = $("#name1").val();
    var industry = $("#industry").val();
    var instructor = $("#instructor").val();
    var innovationPoint = $("#innovationPoint").val();
    var applicationWhere = $("#applicationWhere").val();
    var worksBrief = $("#worksBrief").val();
    var name2 = $("#name2").val();
    var name3 = $("#name3").val();
    var name4 = $("#name4").val();
    var gender1 = $("#gender1").val();
    var gender2 = $("#gender2").val();
    var gender3 = $("#gender3").val();
    var age = $("#age").val();
    var age1 = $("#age1").val();
    var age2 = $("#age2").val();
    var idNumber2 = $("#idNumber2").val();
    var idNumber = $("#idNumber").val();
    var idNumber1 = $("#idNumber1").val();
    var phoneNumber2 = $("#phoneNumber2").val();
    var phoneNumber = $("#phoneNumber").val();
    var phoneNumber1 = $("#phoneNumber1").val();
    var job1 = $("#job1").val();
    var job2 = $("#job2").val();
    var job3 = $("#job3").val();
    var participantList = JSON.stringify({ "name": name2, "job": job1, "gender": gender1, "age": age, "idNumber": idNumber, "phoneNumber": phoneNumber }, { "name": name3, "job": job2, "gender": gender2, "age": age1, "idNumber": idNumber1, "phoneNumber": phoneNumber1 }, { "name": name4, "job": job3, "gender": gender3, "age": age2, "idNumber": idNumber2, "phoneNumber": phoneNumber2 })
    $.ajax({
        url: "http://59.111.92.205:13002/api/innovation/project/add",
        type: "post",
        contentType: "application/x-www-form-urlencoded",
        xhrFields: {
            withCredentials: true // 要在这里设置 跨域设置cookie
        },
        crossDomain: true,
        data: {
            worksTitle: worksTitle,
            name1: name1,
            industry: industry,
            instructor: instructor,
            innovationPoint: innovationPoint,
            applicationWhere: applicationWhere,
            worksBrief: worksBrief,
            participantList: participantList,
            contestRegistrationId: "23",
        },
        success: function(data) {
            console.log(data);
            // alert("报名成功")
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

$(".back").click(function() {
    window.history.back();
})