$(document).ready(function () {

    swal({
        title: "TEST YOUR JEOPARDY",
        type: "input",
        inputPlaceholder: "write name",
        icon: ("info", "success")
    });
    function getName(inputValue) {
        if (inputValue === false)
            return false;

        else (inputValue === "")
        swal.showInputError("GIVE YOUR NAME!!!!!");
        return false
    }




    $("#M1").click(function () {
        $("div").fadeOut(500)
        $("table").fadeOut(500)
        $("#Q1").show()
    })

    $("#S1").click(function () {
        $("div").fadeOut(500)
        $("table").fadeOut(500)
        $("#Q2").show(500)
    })

    $("#M2").click(function () {
        $("div").fadeOut(500)
        $("table").fadeOut(500)
        $("#Q3").show(500)
    })

    $("#S2").click(function () {
        $("div").fadeOut(500)
        $("table").fadeOut(500)
        $("#Q4").show(500)
    })

    $("#M3").click(function () {
        $("div").fadeOut(500)
        $("table").fadeOut(500)
        $("#Q5").show(500)
    })

    $("#S3").click(function () {
        $("div").fadeOut(500)
        $("table").fadeOut(500)
        $ % ("#Q6").show(500)
    })

    $("#M4").click(function () {
        $("div").fadeOut(500)
        $("table").fadeOut(500)
        $("#Q7").show(500)
    })

    $("#S4").click(function () {
        $("div").fadeOut(500)
        $("table").fadeOut(500)
        $("#Q8").show(500)
    })

    $("#M5").click(function () {
        $("div").fadeOut(500)
        $("table").fadeOut(500)
        $("#Q9").show(500)
    })

    $("#S5").click(function () {
        $("div").fadeOut(500)
        $("table").fadeOut(500)
        $("#Q10").show(500)
    })

});
