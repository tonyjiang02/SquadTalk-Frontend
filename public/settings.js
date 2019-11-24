let email = null;
firebase.auth().onAuthStateChanged(user => {
  email = user.email;
  getId(email).then((doc) => {
    let id = doc.data().id;
    $("#userId").text("Logged In As " + id)
  });
});

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

$("#submitYourId").click((e) => {
    e.preventDefault();
    var id = $("#yourIdInput").val();
    $('#yourIdInput').val('');
    setId(id, email)
});
