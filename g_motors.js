/* sending visitors form data to Recruiter Panel */
var script_url =
  "https://script.google.com/macros/s/AKfycbxTUVbSNrZqJMucvi7h8dI_y6zBQPtcMVEqOGoSYfpkE75GaeqNo5CtTr9QtTbybGQ/exec";

// Make an AJAX call to Google Script ( for Form in CONTACT US section)

function SubForm() {
  var name = $("#name").val();
  var number = $("#number").val();
  var email = $("#email").val();
  var team = $("#team").val();
  var college = $("#college").val();

  if (
    name != "" &&
    number !== "" &&
    email != "" &&
    team !== "" &&
    college != ""
  ) {
    document.getElementById("submitConfirmation").style.display = "block";
    document.getElementById("submitBtn").innerHTML = "Thank You";
    var url =
      script_url +
      "?callback=ctrlq&college=" +
      college +
      "?callback=ctrlq&number=" +
      number +
      "?callback=ctrlq&email=" +
      email +
      "?callback=ctrlq&number=" +
      number +
      "?callback=ctrlq&name=" +
      name +
      "&action=insert";
    var request = jQuery.ajax({
      crossDomain: true,
      url: url,
      method: "GET",
      dataType: "jsonp",
    });
  } else {
    alert("Please fill all the form details to submit");
  }
}

function closeSubmitConfirmationBox() {
  document.getElementById("submitConfirmation").style.display = "none";
}
