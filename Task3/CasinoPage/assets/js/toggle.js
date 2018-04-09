$(function() {
    $('#agree-terms').prop('checked', false);
    
    const mq = window.matchMedia( "(max-width: 960px)" );
    if (mq.matches) {
        $('.login').click(function() {
            $("#registration_form").toggle({ direction: "left" }, 1000);
        }) 
    } else {
        $('.login').click(function(){
            $("#registration_form").slideToggle();
        })
    }
    
    $('.logout').click(function() {
        location.reload();
    });

    $("#agree-terms").click(function() {
        if($(this).is(':checked')){
             $("#join").prop('disabled',false);
             $("#join").removeClass("btn-disabled").addClass("btn");
         } else {
             $("#join").prop('disabled',true);
             $("#join").removeClass("btn").addClass("btn-disabled")
         }
     })

    $("#continue").click(function() {
        $(".step2").hide();
        $("#step3_form").slideDown();
        
    })

    $("#agreement").click(function() {
        if($(this).is(':checked')){
             $("#finish").prop('disabled',false);
             $("#finish").removeClass("btn-disabled").addClass("btn");
         } else {
             $("#finish").prop('disabled',true);
             $("#finish").removeClass("btn").addClass("btn-disabled")
         }
     })


    $("#claim-code").click(function(){
        $("#claim-code").hide();
        $("#form_bonus_code").show();
    })

    $("#finish").click(function(e) {
        e.preventDefault();
        $("#step3_form").hide();
        $(".step4").slideDown();
    })

});