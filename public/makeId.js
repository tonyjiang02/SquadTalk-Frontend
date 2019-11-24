var token = getToken()
$("#submitId").click(()=>{
    preventDefault();
    var id = ("#idInput").val()
    setId(id)
    window.location.href = "/profile.html"
})