let email = null;
firebase.auth().onAuthStateChanged(user => {
<<<<<<< HEAD
    email = user.email
    getId(email).then((doc) => {
        id = doc.data().id
        $("#userId").text("Logged In As " + id)
    });
    getFriends()
});

function getFriends() {
    console.log("getFriends")
    getEmails(email).then((doc) => {
        var friendsList = doc.data().friends
        $("#friendsList").html('')
        console.log(friendsList)
        for (var i =0; i<friendsList.length; i++) {
            var friend = $("<li>" + friendsList[i] + "</li>")
            $("#friendsList").append(friend)
        }
    })
}




$("#submitEmail").click((e) => {
    e.preventDefault();
    var friendEmail = $("#emailInput").val()
    addEmail(friendEmail, email)
    $("#friendsList").append(friendEmail)
})

$("#submitMessage").click((e) => {
    e.preventDefault();
    var text = $("#messageInput").val()
    var id = $("#idInput").val()
    sendMessage(text, id, email)
})
$("#submitId").click((e)=>{
    e.preventDefault();
    var id = ("#idInput").val()
    setId(id, email)
})
$("#removeEmail").click((e)=>{
    e.preventDefault();
    var friendEmail = $("#removeEmailInput").val()
    removeEmail(friendEmail, email)
})
=======
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
>>>>>>> abe24d89456c6965b61975590177539f8361ed94
