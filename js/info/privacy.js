"use strict"
function initPrivacyPage() {
    // === Load Nav ===
    $('#navPlaceholder').load('../assets/navigation.html');

    $('#btnHome').click(function(){
        window.location.assign("../");
    });
}

$(window).on('load', function(){
    $('#loadingView').fadeOut('slow');
    setTimeout(function(){
        initPrivacyPage();
    }, 250);    
});    