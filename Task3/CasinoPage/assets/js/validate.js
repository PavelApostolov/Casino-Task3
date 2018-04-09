$(function() {
    var flag_username = 0;
    var flag_email = 0;
    var flag_password = 0;
    var flag_confirm = 0;

    $("#username_error_message").hide();
    $("#password_error_message").hide();

    $("#confirm_password_error_message").hide();
    // $("#email_error_message").hide();

    $("#alert-on-submit").hide();

    $("#form_username").focusout(function() {
        check_username();
    });
    $("#form_password").focusout(function() {
        check_passwords();
    });
    $("#form_confirm_pass").focusout(function() {
        check_confirm();
    });
    // $("#form_email").focusout(function() {
    //     check_email();
    // });

    function check_username() {

        var username_val = $("#form_username").val();
        var username_length = $("#form_username").val().length;

            if(username_length < 5 || username_length > 12) {
                $("#username_error_message").html("Your username must be min 4 and max 12 characters!");
                $("#username_error_message").show();
                
            } else {
                $("#username_error_message").hide();
                flag_username = 1;
            }

    }

    function check_passwords() {

        var password_val = $("#form_password").val();
        var password_length = $("#form_password").val().length;
        var regex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&()+-=_0-9]).*$/);

            if(password_length < 7 || password_length > 12) {
                $("#password_error_message").html("Your password must be min 6 and max 12 characters!");
                $("#password_error_message").show();
                
            } 
            else if(!regex.test(password_val)){
                $("#password_error_message").html("Your password must contain at least one capital and lower-case letter, and one number or special character!");
                $("#password_error_message").show();
            }
            else{
                $("#password_error_message").hide();
                flag_password = 1;
            }
    }
    function check_confirm(){
        var password_val = $("#form_password").val();
        var confirm_password_val = $("#form_confirm_pass").val();

        if(password_val != confirm_password_val){
            $("#confirm_password_error_message").html("The passwords don't match");
            $("#confirm_password_error_message").show();
        }
        else{
            $("#confirm_password_error_message").hide();
            flag_confirm = 1;
        }
    }

    // If we want to validate the email input
    // function check_email() {

    //     var email_val = $("#form_email").val();
    //     var email_regex = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);

    //     if (!email_regex.test(email_val)) {
    //         $("#email_error_message").html("Please enter a valid email address!");
    //         $("#email_error_message").show();
    //     } else {
    //         $("#email_error_message").hide();
    //         flag_email = 1;
    //     }

    // }

        $("#join").click(function(e) {
            e.preventDefault();
            check_username();
            check_passwords();
            check_confirm();

            if(flag_username === 1 && flag_password === 1 && flag_confirm === 1) {
                console.log("success");     
                
                $("#registration_form").hide();
                $(".login").hide();
                $(".logout").show();
                $(".step2").slideDown();
                
            } else {
                console.log(flag_username, flag_password, flag_confirm)
                console.log("error");
                return false;
            }
        })


});