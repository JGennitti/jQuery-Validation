$(document).ready(function () {
//Checking for event changes variable set to false.
var keyUpVar = false;
var changeVar = false;
//If everything is ok, Submit form.
$('#submit_button').click(function(){
    keyUpVar = true;
    changeVar = true;
    validateForm();
});
//Function to check for event changes. If ok, proceed with validation.
$('#myForm input').keyup(function(){
    if(keyUpVar == true) {
        validateForm();
    }
});
$('#myForm select').change(function() {
    if(changeVar == true) {
        validateForm();
    }
});
//Validate function to check form.
function validateForm() {
    //Testing validation inputs.
    var nameReg = /^[\s \- A-Za-z]+$/;
    var numberReg = /^[0-9]+$/;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
     
    //Form input variables.
    var firstName = $('#first_name').val();
    var lastName = $('#last_name').val();
    var email = $('#email').val();
    var address = $('#address').val();
    var city = $('#city').val();
    var state = $('#state option:selected').val();
    var zipcode = $('#zip').val();
    var telephone = $('#phone').val();
     
    //Array section to index form fields.
    var inputVal = new Array(firstName, lastName, email, address, city, state, zipcode, telephone);
    var inputMessage = new Array("first name", "last name", "email", "address", "city", "state", "zipcode", "telephone");
     
    //Condtional statements to check for errors.
    $('.error').hide();
        if(inputVal[0] == ""){
            $('#first_name').after('<div class="error"> *Please enter your ' + inputMessage[0] + '</div>');
            event.preventDefault();
        } 
        else if(!nameReg.test(firstName)){
            $('#first_name').after('<div class="error"> *Letters only</div>');
            event.preventDefault();
        }
        if(inputVal[1] == ""){
            $('#last_name').after('<div class="error"> *Please enter your ' + inputMessage[1] + '</div>');
            event.preventDefault();
        } 
        else if(!nameReg.test(lastName)){
            $('#last_name').after('<div class="error"> *Letters only</div>');
            event.preventDefault();
        }
        if(inputVal[2] == ""){
            $('#email').after('<div class="error"> *Please enter your ' + inputMessage[2] + '</div>');
            event.preventDefault();
        } 
        else if(!emailReg.test(email)){
            $('#email').after('<div class="error"> *Please enter a valid email address</div>');
            event.preventDefault();
        }
        if(inputVal[3] == ""){
            $('#address').after('<div class="error"> *Please enter your ' + inputMessage[3] + '</div>');
            event.preventDefault();
        } 
         
        if(inputVal[4] == ""){
            $('#city').after('<div class="error"> *Please enter your ' + inputMessage[4] + '</div>');
            event.preventDefault();
        } 
        else if(!nameReg.test(city)){
            $('#city').after('<div class="error"> *Letters only</div>');
            event.preventDefault();
        }
        if(inputVal[5] == ""){
            $('#state').after('<div class="error"> *Please enter your ' + inputMessage[5] + '</div>');
            event.preventDefault();
        }
         
        if(inputVal[6] == ""){
            $('#zip').after('<div class="error"> *Please enter your ' + inputMessage[6] + '</div>');
            event.preventDefault();
        } 
        else if(!numberReg.test(zipcode)){
            $('#zip').after('<div class="error"> *Numbers only</div>');
            event.preventDefault();
        }
        if(inputVal[7] == ""){
            $('#phone').after('<div class="error"> *Please enter your ' + inputMessage[7] + '</div>');
            event.preventDefault();
        } 
        else if(!numberReg.test(telephone)){
            $('#phone').after('<div class="error"> *Numbers only</div>');
            event.preventDefault();
        }
  }//End of validateForm() function.
});//End of document.ready().