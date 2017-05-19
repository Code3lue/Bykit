$(document).ready(function() {
    $('.cancelbtn').click(function() {
    location.reload();
});

var user = $("#uname");
var psw = $("#psw");
var login = $("#login");

$(login).on("submit", function handleFormSubmit(event) {
    event.preventDefault();
    var returnUser = {
        username: user.val().trim(),
        password: user.val().trim()
    };
})

 function getPostData(id) {
    $.get("/api/login" + id, function(data) {
      if (data) {
       
        user.val(data.user);
        psw.val(data.psw);
        window.location.href = "/view"
      }
    });
  }

});

