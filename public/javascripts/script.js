/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$('#auth_button').click(function (){
   if(! $('#login_form').valid()){
       return false;
   }else{
           $.post('http://localhost:3000/login-authentication', $('#login_form').serialize())
             .done(function(msg){ 
                 if(msg.status===0){
                     // $('#welcome').empty().append("Welcome Mr. "+msg.name);
                     window.location.href ="/dashboard";
                 }else{
                       $('#welcome').empty().append(msg.name);
                 }
                     })
             .fail(function(xhr, status, error) {
                 console.log(error);
            });
   }
});


$(function() {
    // TODO add service worker code here
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('../serviceworker/service-worker.js')
             .then(function() { console.log('Service Worker Registered'); });
  }
});


$('#registration_id').click(function(){

 if(! $('#registration_form_id').valid()){  console.log("sfsdf");
             

       return false;
   }else{
            var pass=$('#password').val();
            var cpass=$('#cpassword').val();
            if (pass.length < 6) {
               alert("length must be exactly 6 characters")
          }else{
            if(pass==cpass){
               $.post('http://localhost:3000/registration/registration-data', $('#registration_form_id').serialize())
              .done(function(msg){ 
                 if(msg.data==="200"){
                       window.location.href ="/dashboard";
                      // console.log(msg);
                 }else if(msg.data==="400"){
                          console.log(msg.data);
                       }else{
                      console.log(msg);
                 }
             })
             .fail(function(xhr, status, error) {
                 console.log(error);
            });



            }else{
                alert("Confirm Password...");    
            }
          }
   }

});  


//  Emp Login form
$('#registration_from_id').click(function(event){  event.preventDefault();
  validator=$('#registration_from').validate();
   if(!$('#registration_from').valid()){
        $.each(validator.errorMap, function (index, value) {
             $('#'+index).focus();
           return false;
         });
       return false;
   }else{

           var pass=$('#password').val();
           var cpass=$('#cpassword').val();
           if($('#emptype').val()==0){
                $('#emptype').focus();
                return false;
           }else if($('[name="authorities_[]"]:checked').length==0){
                  alert("Please select check box");
                   return false;
           }else if($('[name="state_id_[]"]:checked').length==0){
                         alert("Please select state");
                   return false;
           }else if (pass.length < 6) {
               alert("length must be exactly 6 characters")
          }else{
            if(pass==cpass){
                  $.post('/users/register', $('#registration_from').serialize())
                   .done(function(msg){ 
                   if(msg.data==="200"){
                      // console.log(msg);
                       alert(msg.status);
                          
                   }else if(msg.data==="400"){
                         // console.log(msg.data);
                          alert(msg.status);
                   }else{
                      console.log(msg);
                  }
                  }).fail(function(xhr, status, error) {
                 console.log(error);
            });
            }else{
                alert("Confirm Password...");    
            }
          }

           
   }


});


