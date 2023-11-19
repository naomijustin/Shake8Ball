// ===== Created by Naomi Justin =====

"use strict"
function initTutorial13Page() {
    // === Load Nav ===
    $('#navPlaceholder').load('../assets/navigation.html');

    $('#btnBack').click(function(){
        window.location.assign("../tutorials/tutorial-12.html");
    });
    $('#btnNext').click(function(){
        window.location.assign("../tutorials/tutorial-14.html");
    });
}

$(window).on('load', function(){
    $('#loadingView').fadeOut('slow');
    setTimeout(function(){
        initTutorial13Page();
    }, 250);    
});    
// ===== Created by Naomi Justin =====