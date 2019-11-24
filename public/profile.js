let email = null;
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    email = user.email;
    getId(email).then(doc => {
      id = doc.data().id;
      $("#userId").text("Logged In As " + id);
    });
    getEmails(email).then(doc => {
      var friendslist = doc.data().friends;
      for (var i in friendsList) {
        var friend = $("<li>" + friendsList[i] + "</li>");
        $("#friendsList").append(friend);
      }
    });
  }
});
console.log(email);

$("#submitEmail").click(e => {
  e.preventDefault();
  var friendEmail = $("#emailInput").val();
  console.log(friendEmail);
  addEmail(friendEmail, email);
});

$("#submitMessage").click(e => {
  e.preventDefault();
  var text = $("#messageInput").val();
  var id = $("#idInput").val();
  sendMessage(text, id, email);
});
$("#submitId").click(e => {
  e.preventDefault();
  var id = "#idInput".val();
  setId(id, email);
});
$("#removeEmail").click(e => {
  e.preventDefault();
  var friendEmail = "#removeEmailInput".val();
  removeEmail(friendEmail, email);
});
