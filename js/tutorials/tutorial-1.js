// ===== Created by Naomi Justin =====

"use strict"
function initTutorial1Page() {
    // === Load Nav ===
    $('#navPlaceholder').load('../assets/navigation.html');

    $('#btnBack').click(function(){
        window.location.assign("../tutorials/introduction.html");
    });
    $('#btnNext').click(function(){
        window.location.assign("../tutorials/tutorial-2.html");
    });
}

$(window).on('load', function(){
    $('#loadingView').fadeOut('slow');
    setTimeout(function(){
        initTutorial1Page();
    }, 250);    
});    
// ===== Created by Naomi Justin =====