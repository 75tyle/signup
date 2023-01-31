 
$( document ).ready(function() {
    var check_name = false
var check_email = false
var check_number = false
var check_password = false
var fullname;
var email ; 
var number ;
var password ;

$('.input_fullname').keyup(function(event){
   
  fullname = $('.input_fullname').val();
  console.log(fullname)
   if(fullname.length>4){
    check_name = true
    $('.input_fullname').css('border','2px solid green ')
   }else{
    $('.input_fullname').css('border','2px solid red ')
   }
  
   
  
  
})
$('.input_email').keyup(function(event){
   email= $('.input_email').val();
    console.log(email)
    if(IsEmail(email)){
        check_email = true
        $('.input_email').css('border','2px solid green ')
       }else{
        $('.input_email').css('border','2px solid red ')
        
       }
})
$('.input_number').keyup(function(event){
   number= $('.input_number').val();
    if(number.length >= 10  && number.length < 11){
        console.log(number.length)
        check_number = true
        $('.input_number').css('border','2px solid green ')
       }else{
       
        $('.input_number').css('border','2px solid red ')
       }
})
$('.input_pass').keyup(function(event){
   password= $('.input_pass').val();
    if(password.length >= 8){
        check_password = true
        $('.input_pass').css('border','2px solid green ')
       }else{
        $('.input_pass').css('border','2px solid red ')
       }
})

$('.item_submit').click(function(event){
    event.preventDefault()
    var check = popup()
    if(check){
      var data = {
        fullname:fullname,
        email:email,
        number:number,
        password:password
      }
      var json = JSON.stringify(data)
      console.log(json);
      localStorage.setItem('user',json)
    
      window.location.href = "http://127.0.0.1:5500/signup.html"
    }
})
function IsEmail(email) {
    var regex =
/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(email)) {
        return false;
    }
    else {
        return true;
    }
}

function popup() {
    if(check_name && check_email && check_number && check_password){
        $(".msg").html("Succesfull!");
        $('.container_msgbox').css('display','flex')
        setTimeout(function() {
            $('.container_msgbox').css('display','none')
        }, 3000);
        return true
       }else{
        $(".msg").html("Unsuccesfull!");
        $('.container_msgbox').css('display','flex')
        setTimeout(function() {
            $('.container_msgbox').css('display','none')
        }, 3000);
        return false
       }
}
});

