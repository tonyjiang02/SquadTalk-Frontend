var token = getToken()

getId(token).then((id)=>{
    $("#userId").text("Logged In As "+ id)
})

getEmails(token).then((friendsList) => {
    for (var i in friendsList) {
        var friend = $("<li>"+friendsList[i]+"</li>")
        $("#friendsList").append(friend)
    }
})

$("#submitEmail").click(() => {
    preventDefault();
    var email = $("emailInput").val()
    addEmail(email, token)
})

$("#submitMessage").click(()=> {
    preventDefault();
    var text = $("#messageInput").val()
    var id = $("#idInput").val()
    sendMessage(text, id, token)
})
