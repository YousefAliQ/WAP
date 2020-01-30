/* jshint esversion: 6 */
"use strict";

$( document ).ready(function() {

    /**
     * init variables from calculator inputs
     */
    let $sum1 = $("#sum1")[0];
    let $sum2 = $("#sum2")[0];
    let $mul1 = $("#mul1")[0];
    let $mul2 = $("#mul2")[0];


    $("#doPost").on("click", function(){
       doCalc();
    });

    /**
     * @name doCalc a function to calculate to sum and multiply numbers at the server side
     * @return {undefined}
     */
    const doCalc = function () {
        if (isValid()){

            const data = {
                "sum1": $sum1.value.trim(),
                "sum2": $sum2.value.trim(),
                "mul1": $mul1.value.trim(),
                "mul2": $mul2.value.trim()
            };
            $.ajax({
                url: "http://localhost:8080/simpleCalc/index.html",
                data: data,
                success: function(resp){
                    console.log(resp);
                },
                fail:function(err){
                    console.log(err);
                },
                dataType: "text/plain"
            });


            /*$.get('SimpleCalc', {
                sum1 : $sum1.val().trim(),
                sum2 : $sum2.val().trim(),
                mul1 : $mul1.val().trim(),
                mul2 : $mul2.val().trim()
            }, function(responseText) {
                alert(responseText);
               // $('#ajaxGetUserServletResponse').text(responseText);
            });*/

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
});