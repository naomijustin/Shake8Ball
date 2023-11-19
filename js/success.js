// ===== Created by Naomi Justin =====

"use strict"
function initSuccessPage() {
    // === Load Nav ===
    $('#navPlaceholder').load('assets/navigation.html');

    $('#btnHome').click(function(){
        window.location.assign("../");
    });
}

$(window).on('load', function(){
    $('#loadingView').fadeOut('slow');
    setTimeout(function(){
        initSuccessPage();
    }, 250);    
});    
// ===== Created by Naomi Justin =====