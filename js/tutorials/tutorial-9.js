// ===== Created by Naomi Justin =====

"use strict"
function initTutorial9Page() {
    // === Load Nav ===
    $('#navPlaceholder').load('../assets/navigation.html');

    $('#btnBack').click(function(){
        window.location.assign("../tutorials/tutorial-8.html");
    });
    $('#btnNext').click(function(){
        window.location.assign("../tutorials/tutorial-10.html");
    });
}

$(window).on('load', function(){
    $('#loadingView').fadeOut('slow');
    setTimeout(function(){
        initTutorial9Page();
    }, 250);    
});    
// ===== Created by Naomi Justin =====