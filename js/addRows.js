$(document).ready(function () {

/* Variables */
var row = $(".participantRow");

/* Functions */

function addRow() {
  row.clone(true, true).appendTo("#participantTable");
}

function removeRow(button) {
  button.closest("tr").remove();
}
/* Doc ready */
$(".add").on('click', function () {
  
    if ($("#participantTable tr").length < 17) {
        addRow();
        $(this).closest("tr").appendTo("#participantTable");
   }
 });

    $(".remove").on('click', function () {
        console.log("Paricipant Tr" + $("#participantTable tr").length);

    if($("#participantTable tr").length === 1) {
    $(".remove").hide();
    } else {
    removeRow($(this));
  }
});
});
