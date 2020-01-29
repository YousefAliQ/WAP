/* jshint esversion: 6 */
$(document).ready(function(){
    "use strict";

    /**
     * Hi Prof,
     *
     * I finished the lab early today, it was easy and fun!
     * I documented all the functions and it took me about an hour to finish and push it.
     *
     * @author : Yousef Ali Q
     * @date : Jan, 28 2020
     */

    /**
     * @define Declare and initial html elements for once to enhance the performance of jQuery selection function
     * @type {jQuery|HTMLElement}
     */
    let $boundary = $(".boundary");
    let $maze = $("#maze");
    let $status = $("#status");
    let $start = $("#start");
    let $end = $("#end");

    /**
     * @event : the player will lost if he/she touched the upper or lower boundaries
     * @return : {undefined}
     */
    $boundary.mouseenter(function() {
       lostMessage();
    });

    /**
     * @event : the player will lost if he/she went out of the maze boundary
     * @return : {undefined}
     */
    $maze.mouseleave(function () {
        lostMessage();
    });

    /**
     * @function : used for inform the user that he/she lost and to update the lost status
     * @return : {undefined}
     */
    let lostMessage = function(){
        if (!$boundary.hasClass("youlose")){
            $boundary.addClass("youlose");
            if ($boundary.hasClass("started")){
                $boundary.removeClass("started");
            }
            updateStatus("Sorry, you lost. :[");
        }
    }

    /**
     * @function : used for pass a feedback to the user that he/she win or lost
     * @return : {undefined}
     */
    let updateStatus = function(msg){
        $status.text(msg);
    }

    /**
     * @event : the player will win if he/she reached the end without touching the boundaries of maze
     * @return : {undefined}
     */
    $end.mouseenter(function () {
        if (!$boundary.hasClass("youlose")){
            if ($boundary.hasClass("started")){
                updateStatus("You win! :]");
            }
        }
    });

    /**
     * @event : the player can start the game many times by resitting the status and the feedback message
     * @return : {undefined}
     */
    $start.click(function () {
        if ($boundary.hasClass("youlose")){
            $boundary.removeClass("youlose");
            if (!$boundary.hasClass("started")){
                $boundary.addClass("started");
            }
            updateStatus("You are playing now.");
        }
    });

});