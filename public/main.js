$("#submitMessage").click(e => {
  e.preventDefault();
  var id = $("#idInput").val();
  var message = $("#messageInput").val();
  sendMessage(message, id);
});
$("#login-button").click(e => {
  e.preventDefault();
  loginWithGoogle();
});
