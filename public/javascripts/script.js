/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$('#auth_button').click(function (){
   if(! $('#login_form').valid()){
       return false;
   }else{
           $.post('http://localhost:3000/login/login-authentication', $('#login_form').serialize())
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
 if(! $('#registration_form_id').valid()){
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
                       console.log(msg);
                 if(msg.status===0){
                       window.location.href ="/login";
                 }else{
                      alert("User already exists in the current database ");
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