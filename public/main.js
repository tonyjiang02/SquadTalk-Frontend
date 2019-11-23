$("#submitMessage").click(() => {
  preventDefault();
  var id = $("#idInput").val();
  var message = $("#messageInput").val();
  sendMessage(message, id);
});
$("#login-button").click(() => {
  preventDefault();
  loginWithGoogle();
});
