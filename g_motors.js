/* sending visitors form data to Recruiter Panel */
var script_url =
  "https://script.google.com/macros/s/AKfycbxBHsT1RODcOpENQijdnmcKJYLCrVAOLq3H8OvBAn46_-qUsirictD5wHVS2KgdM1Bd/exec";

// Make an AJAX call to Google Script ( for Form in CONTACT US section)
function SubForm1() {
  var name = $("#name1").val();
  var number = $("#number1").val();
  var email = $("#email1").val();
  var team = $("#team1").val();
  var collegecity = $("#collegecity1").val();

  if (
    name != "" &&
    number !== "" &&
    email != "" &&
    team != "" &&
    collegecity != ""
  ) {
    document.getElementById("submitConfirmation").style.display = "block";
    document.getElementById("submitBtn1").innerHTML = "Thank You";
    var url =
      script_url +
      "?callback=ctrlq&collegecity=" +
      collegecity +
      "?callback=ctrlq&team=" +
      team +
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
