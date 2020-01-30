/* jshint esversion: 6 */
"use strict";

$(function () {

    /**
     * init variables from calculator inputs
     */
    let $sum1 = $("#num1").val().trim();
    let $sum2 = $("#num2").val().trim();
    let $mul1 = $("#mul1").val().trim();
    let $mul2 = $("#mul2").val().trim();

    const doCalc = function () {
        if (isValid()){

            $.ajax({
                url: url,
                data: data,
                success: success,
                dataType: dataType
            });


            $.get('SimpleCalc', {
                sum1 : $sum1,
                sum2 : $sum2,
                mul1 : $mul1,
                mul2 : $mul2
            }, function(responseText) {
                alert(responseText);
               // $('#ajaxGetUserServletResponse').text(responseText);
            });

        }else{
            alert("please, fill all inputs!")
        }
    }

    /**
     * @name isValid a function to check for empty or invalid input values.
     * @return {boolean}
     */
    const isValid = function () {
        if ($sum1 !== "" && $sum2 !== "" && $mul1 !== "" && $mul2 !== "") {
            return true;
        } else {
            return false;
        }
    }
})();