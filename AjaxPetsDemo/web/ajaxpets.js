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
    $.ajax("pets", {
        "type": "get",
        "data": {
            "animal": animal
        }
    }).done(displayPictures);
}

function displayPictures(data) {
    const resp = JSON.parse(data).arrayList;

    const $div = $("<div>")[0];
    for(let i=0; i<resp.length;i++){
        const $img = $("<img>")[0];
        $img.src = "http://mumstudents.org/cs472/2016-03-AS-KL/Sections/8/ajaxpets/images/" + resp[i] + ".jpeg";
        $div.append($img);
    }

    $("#pictures").html($div);
}