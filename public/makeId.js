var token = getToken()
$("#submitId").click(()=>{
    preventDefault();
    var id = ("#idInput").val()
    setId(id, token)
    window.location.href = "/profile.html"
})