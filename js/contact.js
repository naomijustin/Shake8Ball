// ===== Created by Naomi Justin =====

"use strict"
function initContactPage() {
    // === Load Nav ===
    $('#navPlaceholder').load('assets/navigation.html');    
}

$("#btnSubmit").click(function(e){        
    $(':input').removeClass('is-invalid');
    var error = false;
    if ($('#txtName').val() == '' || $('#txtName').val() == null) {
        error = true;
        $('#txtName').addClass('is-invalid');
    }
    if ($('#txtEmail').val() == '' || $('#txtEmail').val() == null) {
        error = true;
        $('#errorTxtEmail').text('Please enter your email.');
        $('#txtEmail').addClass('is-invalid');
    } else if ($('#txtEmail').val() != '' && $('#txtEmail').val() != null) {
        var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        var data = $('#txtEmail').val();
        var runner = regex.test(data);
        if (!runner) {
            error = true;
            $('#errorTxtEmail').text('Please enter a valid email.');
            $('#txtEmail').addClass('is-invalid');
        }
    }
    if ($('#txtareaComment').val() == '' || $('#txtareaComment').val() == null) {
        error = true;
        $('#txtareaComment').addClass('is-invalid');
    }
    if (error) {
        e.preventDefault();
        return
    }
});

$(window).on('load', function(){
    $('#loadingView').fadeOut('slow');
    setTimeout(function(){
        initContactPage();
    }, 250);    
});    
// ===== Created by Naomi Justin =====