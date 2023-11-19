// ===== Created by Naomi Justin =====

"use strict"
function initTutorial6Page() {
    // === Load Nav ===
    $('#navPlaceholder').load('../assets/navigation.html');

    $('#btnBack').click(function(){
        window.location.assign("../tutorials/tutorial-5.html");
    });
    $('#btnNext').click(function(){
        window.location.assign("../tutorials/tutorial-7.html");
    });
}

$(window).on('load', function(){
    $('#loadingView').fadeOut('slow');
    setTimeout(function(){
        initTutorial6Page();
    }, 250);    
});    
// ===== Created by Naomi Justin =====