// ===== Created by Naomi Justin =====

"use strict"
function initTutorial7Page() {
    // === Load Nav ===
    $('#navPlaceholder').load('../assets/navigation.html');

    $('#btnBack').click(function(){
        window.location.assign("../tutorials/tutorial-6.html");
    });
    $('#btnNext').click(function(){
        window.location.assign("../tutorials/tutorial-8.html");
    });
}

$(window).on('load', function(){
    $('#loadingView').fadeOut('slow');
    setTimeout(function(){
        initTutorial7Page();
    }, 250);    
});    
// ===== Created by Naomi Justin =====