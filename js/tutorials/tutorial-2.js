// ===== Created by Naomi Justin =====

"use strict"
function initTutorial2Page() {
    // === Load Nav ===
    $('#navPlaceholder').load('../assets/navigation.html');

    $('#btnBack').click(function(){
        window.location.assign("../tutorials/tutorial-1.html");
    });
    $('#btnNext').click(function(){
        window.location.assign("../tutorials/tutorial-3.html");
    });
}

$(window).on('load', function(){
    $('#loadingView').fadeOut('slow');
    setTimeout(function(){
        initTutorial2Page();
    }, 250);    
});    
// ===== Created by Naomi Justin =====