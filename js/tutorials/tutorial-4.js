// ===== Created by Naomi Justin =====

"use strict"
function initTutorial4Page() {
    // === Load Nav ===
    $('#navPlaceholder').load('../assets/navigation.html');

    $('#btnBack').click(function(){
        window.location.assign("../tutorials/tutorial-3.html");
    });
    $('#btnNext').click(function(){
        window.location.assign("../tutorials/tutorial-5.html");
    });
}

$(window).on('load', function(){
    $('#loadingView').fadeOut('slow');
    setTimeout(function(){
        initTutorial4Page();
    }, 250);    
});    
// ===== Created by Naomi Justin =====