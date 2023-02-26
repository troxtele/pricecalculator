$(document).ready(function () {
    "use strict";
    $(".repeater").repeater({
        defaultValues: {
            "textarea-input": "foo",
            "text-input": "bar",
            "select-input": "B",
            "checkbox-input": ["A", "B"],
            "radio-input": "B"
        }, show: function () {
            $(this).slideDown()
        }, hide: function (e) {
            confirm("Opravdu chcete odstranit tento ��dek?") && $(this).slideUp(e)
            totalSumOfPrice();
        }, ready: function (e) {
        }
    }), window.outerRepeater = $(".outer-repeater").repeater({
        defaultValues: {"text-input": "outer-default"},
        show: function () {
            console.log("outer show"), $(this).slideDown()
        },
        hide: function (e) {
            console.log("outer delete"), $(this).slideUp(e)
            totalSumOfPrice();
        },
        repeaters: [{
            selector: ".inner-repeater",
            defaultValues: {"inner-text-input": "inner-default"},
            show: function () {
                console.log("inner show"), $(this).slideDown()
            },
            hide: function (e) {
                console.log("inner delete"), $(this).slideUp(e)
                totalSumOfPrice();
            }
        }]
    })
});