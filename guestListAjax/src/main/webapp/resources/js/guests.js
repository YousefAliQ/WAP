$(function() {
    $("#send").click(updateGuests);
});

function updateGuests() {
    var first = $("#first").val();
    var last = $("#last").val();
    
    $.ajax("guest.ajax", {
		"type": "post",
		"data": {
        	"first": first,
                "last": last
		}
    }).done(displayGuests);
}

function displayGuests(data) {

    const $questList = $("<ul>")[0];

    for(let i=0; i <data.length;i++){
        const $li = $("<li>")[0];
        $li.innerText = data[i].first + " " + data[i].last;
        $questList.append($li);
    }
    // var guestList = "You need to modify this method to display the updated guest list.  Remember to build the entire list before adding it to the DOM.";
    $("#guestList").html($questList);
    
}