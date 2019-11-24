let email = null;
firebase.auth().onAuthStateChanged(user => {
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
    var friend = $("<li>" + friendEmail + "</li>")
    $("#friendsList").append(friend)
})

$("#submitMessage").click((e) => {
    e.preventDefault();
    var text = $("#messageInput").val()
    var id = $("#idInput").val()
    sendMessage(text, id, email)
})
$("#removeEmail").click((e)=>{
    e.preventDefault();
    var friendEmail = $("#removeEmailInput").val()
    removeEmail(friendEmail, email)
})
$("#submitYourId").click((e)=> {
    e.preventDefault()
    var id = $("#yourIdInput").val()
    console.log(id)
    setId(id, email)
})
