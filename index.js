$( function() {
	$( "input" ).checkboxradio({
		icon: false
	});
});

var needsClarification = document.querySelectorAll('.needs-clarification');

needsClarification.forEach(function (item, idx) {
    item.addEventListener('click', function () {
        var id = "#clarification-row-" + (idx + 1);
        $(id).empty();
        $(id).append("<td colspan='2'><textarea class='explainer-box' placeholder='Please explain...'/></td>");
    });
});


var yesButtons = document.querySelectorAll('.yes-buttons');

yesButtons.forEach(function (item, idx) {
    item.addEventListener('click', function () {
        var id = "#clarification-row-" + (idx + 1);
       	$(id).empty();
    });
});

var noButtons = document.querySelectorAll('.no-buttons');

noButtons.forEach(function (item, idx) {
    item.addEventListener('click', function () {
        var id = "#clarification-row-" + (idx + 1);
        $(id).empty();
    });
});

var unsureButtons = document.querySelectorAll('.unsure-buttons');

unsureButtons.forEach(function (item, idx) {
    item.addEventListener('click', function () {
        var id = "#clarification-row-" + (idx + 1);
        $(id).empty();
        $(id).append("<td colspan='2'><textarea class='explainer-box' placeholder='Please explain...'/></td>");
    });
});