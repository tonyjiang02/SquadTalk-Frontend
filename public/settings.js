function sendPreferences() {
  var toxicityLevel = $("#profanitySelect").val();
  var checked = $("input:checked");
  var send = {
    toxicity: moderate,
    identityattack: false,
    insult: false,
    profanity: false,
    insult: false,
    sexuallyeSxplicit: false,
    flirtation: false
  };
  for (i in checked) {
    send["" + checked[i].value] = true;
  }
  setPreferences(send);
}
$("input[type=checkbox]").on("click", sendPreferences);
