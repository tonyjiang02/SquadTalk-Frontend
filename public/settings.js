function sendPreferences() {
  var toxicityLevel = $("#profanitySelect").val();
}

$("#logout").click(e => {
  e.preventDefault();
  logout();
});
