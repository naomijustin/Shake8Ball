// ===== Created by Naomi Justin =====

"use strict"
function initIntroductionPage() {
    // === Load Nav ===
    $('#navPlaceholder').load('../assets/navigation.html');

    $('#btnNext').click(function(){
        window.location.assign("../tutorials/tutorial-1.html");
    });
}

$(window).on('load', function(){
    $('#loadingView').fadeOut('slow');
    setTimeout(function(){
        initIntroductionPage();
    }, 250);    
});    
// ===== Created by Naomi Justin =====