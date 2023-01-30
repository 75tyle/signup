 
$('.item_submit').click(function(event){
    event.preventDefault();
    var fullname =$('.input_fullname').val();
    var email = $('.input_email').val();
    var number = $('.input_number').val();
    var password = $('.input_pass').val();
   var data = {
       fullname:fullname,
       email:email,
       number:number,
       password:password
   }
   var check_name = false
   var check_email = false
   var check_number = false
   var check_password = false
   console.log(data)
   if(data.fullname.length>4){
    check_name = true
   }else{
   $('.input_fullname').css('box-shadow','inset 0px 0px 5px 0px rgba(255,0,0,1);')
   }
   if(IsEmail(data.email)){
    check_email = true
   }else{
    
   }
   if(number.length >= 10  && number.length < 12){
    console.log(number.length)
    check_number = true
   }else{
   
    
   }
   if(data.password.length >= 8){
    check_password = true
   }else{
    
   }
   if(check_name && check_email && check_number && check_password){
    $(".msg").html("Succesfull!");
    $('.container_msgbox').css('display','flex')
    setTimeout(function() {
        $('.container_msgbox').css('display','none')
    }, 3000);
   }else{
    $(".msg").html("Unsuccesfull!");
    $('.container_msgbox').css('display','flex')
    setTimeout(function() {
        $('.container_msgbox').css('display','none')
    }, 3000);
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
