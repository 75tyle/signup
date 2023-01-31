$( document ).ready(function() {
var user = localStorage.getItem('user')
$('.hello').html(user)
})