
<<<<<<< HEAD
let email = null
firebase.auth().onAuthStateChanged(user => {
    email = user.email
    getId(email).then((doc) => {
        id = doc.data().id
        $("#userId").text("Logged In As " + id)
    })
    // getEmails(email).then((friendsList) => {
    //     for (var i in friendsList) {
    //         var friend = $("<li>" + friendsList[i] + "</li>")
    //         $("#friendsList").append(friend)
    //     }
    // })
});
console.log(email)



=======
// getId(token).then((id)=>{
//     $("#userId").text("Logged In As "+ id)
// })

// getEmails(token).then((friendsList) => {
//     for (var i in friendsList) {
//         var friend = $("<li>"+friendsList[i]+"</li>")
//         $("#friendsList").append(friend)
//     }
// })
>>>>>>> e7b9a0069afd68d2f5b20f21127e4de1d6e5e97f

$("#submitEmail").click(() => {
    preventDefault();
    var friendEmail = $("emailInput").val()
    addEmail(friendEmail, email)
})

$("#submitMessage").click(() => {
    preventDefault();
    var text = $("#messageInput").val()
    var id = $("#idInput").val()
    sendMessage(text, id, email)
})
$("#submitId").click(()=>{
    preventDefault();
    var id = ("#idInput").val()
    setId(id, email)
})

