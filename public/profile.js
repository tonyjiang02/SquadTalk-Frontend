let email = null;
firebase.auth().onAuthStateChanged(user => {
    email = user.email;
    getId(email).then((doc) => {
        id = doc.data().id;
        $("#userId").text("Logged In As " + id)
    });
    getFriends()
});

function getFriends() {
    console.log("getFriends");
    getEmails(email).then((doc) => {
        var friendsList = doc.data().friends;
        // $("#friendsList").html('');
        for (var i = 0; i < friendsList.length; i++) {
            addFriend(friendsList[i]);
        }
    })
}

function addFriend(friendEmail) {
    let friend = $($('#friend-template').html());
    friend.find('.email').text(friendEmail);
    friend.find('.btn').attr('data-email', friendEmail);
    $('#friendsList').append(friend);
}

$(document).on('click', '.remove', (e) => {
    e.preventDefault();
    removeEmail(e.target.getAttribute('data-email'), email);
    $(e.target).parents('.friend').remove();
});


$("#submitEmail").click((e) => {
    e.preventDefault();
    const friendEmail = $("#emailInput").val();
    addEmail(friendEmail, email);
    addFriend(friendEmail);
});

$("#submitMessage").click((e) => {
    e.preventDefault();
    var text = $("#messageInput").val();
    var id = $("#idInput").val();
    sendMessage(text, id, email)
});

$("#submitYourId").click((e) => {
    e.preventDefault();
    var id = $("#yourIdInput").val();
    console.log(id);
    setId(id, email)
});
