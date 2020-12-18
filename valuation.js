// datepicker

$('#datepicker').datepicker({
    uiLibrary: 'bootstrap4',
    autoclose: true,
    toggleActive: true,
});

$('#datepicker').click(function () {
    $("table").removeClass("table-condensed").addClass("table").addClass("table-borderless")
})

// toggle valuation

// reset button
$('#reset').click(function () {
    $("#valuationForm")[0].reset()
    window.location.replace("https://valuation-tool.vercel.app/")
})

// next button
$('#next').click(function () {
    if ($('#valuationForm-1').is(":visible")) {
        $("#valuationForm-1").hide()
        $("#valuationForm-2").show()
        $("#valuationForm-3").hide()
        $("#valuationForm-complete").hide()

        $('.progress-bar').css('width', '66%')
        $(".valuation-progress-label p span").text("66");

    } else if ($('#valuationForm-2').is(":visible")) {
        $("#valuationForm-1").hide()
        $("#valuationForm-2").hide()
        $("#valuationForm-3").show()
        $("#valuationForm-complete").hide()

        $('.progress-bar').css('width', '100%')
        $(".valuation-progress-label p span").text("100");

        $("#next").removeClass('btn-warning').addClass('btn-primary')
        $("#next").html("Complete");
    } else {
        $("#valuationForm-complete").show()
        $("#next").hide()
        $("#valuationForm-1").hide()
        $("#valuationForm-2").hide()
        $("#valuationForm-3").hide()

    }
});


// back button
$('#back').click(function () {
    if ($('#valuationForm-1').is(":visible")) {
        window.location.replace("https://valuation-tool.vercel.app/")
    } else if ($('#valuationForm-2').is(":visible")) {
        $("#valuationForm-1").show()
        $("#valuationForm-2").hide()
        $("#valuationForm-3").hide()
        $("#valuationForm-complete").hide()

        $('.progress-bar').css('width', '33%')
        $(".valuation-progress-label p span").text("33");

    } else if ($('#valuationForm-3').is(":visible")) {
        $("#valuationForm-1").hide()
        $("#valuationForm-2").show()
        $("#valuationForm-3").hide()
        $("#valuationForm-complete").hide()

        $('.progress-bar').css('width', '66%')
        $(".valuation-progress-label p span").text("66");

        $("#next").removeClass('btn-primary').addClass('btn-warning')
        $("#next").html("Next");
    } else if ($('#valuationForm-complete').is(":visible")) {
        $("#valuationForm-1").hide()
        $("#valuationForm-2").hide()
        $("#valuationForm-3").show()
        $("#valuationForm-complete").hide()
        $("#next").show()

        $('.progress-bar').css('width', '100%')
        $(".valuation-progress-label p span").text("100");
    }
});

// complete valuation
$(document).ready(function () {

    // form email
    $('#complete-form #email').blur(function () {
        if (!$(this).val()) {
            $(".form-complete-email").hide()
        } else {
            $(".form-complete-email").show()
        }
    })
})
