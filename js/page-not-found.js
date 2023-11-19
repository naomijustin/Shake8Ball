// ===== Created by Naomi Justin =====

"use strict"
function initNotFoundPage() {
    // === Load Nav ===
    $('#navPlaceholder').load('assets/navigation.html');

    $('#btnHome').click(function(){
        window.location.assign("../");
    });
}

$(window).on('load', function(){
    $('#loadingView').fadeOut('slow');
    setTimeout(function(){
        initNotFoundPage();
    }, 250);    
});    
// ===== Created by Naomi Justin =====