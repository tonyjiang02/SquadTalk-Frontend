var token = getToken()

$("#submitEmail").click(() => {
    var email = $("emailInput").val()
    addEmail(email, token)
})

getEmails(token).then((friendsList) => {
    for (var i in friendsList) {
        var friend = $("<li>"+friendsList[i]+"</li>")
        $("#friendsList").append(friend)
    }
})
