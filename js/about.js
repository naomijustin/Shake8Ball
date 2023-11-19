// ===== Created by Naomi Justin =====

"use strict"
function initAboutPage() {
    // === Load Nav ===
    $('#navPlaceholder').load('assets/navigation.html');

    $('#btnHome').click(function(){
        window.location.assign("../");
    });
}

$(window).on('load', function(){
    $('#loadingView').fadeOut('slow');
    setTimeout(function(){
        initAboutPage();
    }, 250);    
});    
// ===== Created by Naomi Justin =====