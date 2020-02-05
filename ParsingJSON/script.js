/* jshint esversion: 6*/

$(function () {
    'use strict';
    $("#submitBtn").on("click", sendRequest);

    /**
     * sendRequest function used jsonplaceholder from typicode.com for
     * testing JSON posts and titles.
     * @author : Yousef Ali
     * @date : Feb 4, 2020
     */
    function sendRequest(evt) {

        $.ajax("https://jsonplaceholder.typicode.com/posts",
            {
                type: "get",
                dataType: "json",
                data: {"userId": $("#userId").val()}
            }
        ).done(function (result) {

            const $ul = $("<ul>")[0];
            for (let i = 0; i < result.length; i++) {
                const $li = $("<li>")[0];
                $li.innerText = "Title : " + result[i].title + " \n" + " Post : " + result[i].body;
                $ul.append($li);
            }
            $("#posts").append($ul);

        }).fail(function (err) {
            alert("failed : " + err.statusText);
        });
    }
});

