$("#submitMessage").click(() => {
  var id = $("#idInput").val();
  var message = $("#messageInput").val();
  sendMessage(message, id);
});

