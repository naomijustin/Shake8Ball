// ===== Created by Naomi Justin =====

"use strict"
function initTutorial5Page() {
    // === Load Nav ===
    $('#navPlaceholder').load('../assets/navigation.html');

    $('#btnBack').click(function(){
        window.location.assign("../tutorials/tutorial-4.html");
    });
    $('#btnNext').click(function(){
        window.location.assign("../tutorials/tutorial-6.html");
    });
}

$(window).on('load', function(){
    $('#loadingView').fadeOut('slow');
    setTimeout(function(){
        initTutorial5Page();
    }, 250);    
});    
// ===== Created by Naomi Justin =====