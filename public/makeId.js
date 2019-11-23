var token = getToken()
$("#submitId").click(()=>{
    var id = ("#idInput").val()
    setId(id, token)
    window.location.href = "/profile.html"
})