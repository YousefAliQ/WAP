/* jshint esversion:6 */
$(document).ready(function () {
    "use strict";
    /**
     * @name Declaration : declare jQuery multiple used variables to enhance the performance
     * @returns jQuery array-like object
     */
    const $width = $("#width");
    const $growth = $("#growth");
    const $rate = $("#rate");
    const $circlesNumber = $("#circlesNumber");

    /**
     * @name Start button event handler
     * @param evt the invoker Dom element
     * @returns {undefined}
     */
    $("#startBtn").on("click", function (evt) {

        for (let i = 0; i < parseInt($circlesNumber.val()); i++) {
            createNewCircle();
        }
    });

    /**
     * @name Circles generator by user's click event handler
     * @param eventt the invoker Dom element
     * @returns {undefined}
     */
    $("#circles").on("click", function (event) {
        createNewCircle();
    });

    /**
     * @name createNewCircle create DOM circle element
     * @returns {undefined}
     */
    let createNewCircle = function () {
        const $div = $('<div>', {class: 'circle inlineBlock absolute'});
        $div.css("background-color", createColor());
        $("#circles").append($div);

        var xy = getRandomPosition($div);
        $div.css("top", xy[0] + 'px');
        $div.css("left", xy[1] + 'px');

        const id = setInterval(function () {

            $($div).fadeOut($rate.val() * 2);
            const size = parseInt($($div).css("height")) + parseInt($growth.val()) + "px";
            $($div).css("height", size);
            $($div).css("width", size);
            $($div).fadeIn($rate.val() * 2);

        }, parseFloat($rate.val()));

        $div.click(function () {
            $div.remove();
            clearInterval(id);
        });
    }
    /**
     * @name getRandomPosition generates x and y randomly by the element offset
     * @param element Circle DOM div element.
     * @return {[number, number]}
     * @example [20,30]
     */
    let getRandomPosition = function (element) {
        const x = document.body.offsetHeight-element.height();
        const y = document.body.offsetWidth-element.width();
        const randomX = Math.floor(Math.random()*x);
        const randomY = Math.floor(Math.random()*y);
        return [randomX,randomY];
    }
    /**
     * @name createColor generate a random color using hexadecimal
     * @return {string}
     *  @example #58a832
     */
    let createColor = function () {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

});