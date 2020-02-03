$(function() {
    $("#puppies").click(updatePictures);
    $("#kitties").click(updatePictures);
});

function updatePictures() {
    var animal = "";
    if ($("#puppies").attr("checked") == "checked") {
        animal = "puppy";
    } else {
        animal = "kitty";
    }
    $.get( "", );
    $.ajax({
        url: 'src/imgsURLS.txt',
        dataType: 'text',
        type: 'GET',
        async: true,
        statusCode: {
            404: function (response) {
                alert(404);
                displayPictures(response);
            },
            200: function (response) {
                alert(response);
            }
        },
        error: function (jqXHR, status, errorThrown) {
            alert('error');
        }
    });

}

function displayPictures(data) {
    $("#pictures").html(data);
}
