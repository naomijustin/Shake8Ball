// ===== Created by Naomi Justin =====

"use strict"
function initTutorial14Page() {
    // === Load Nav ===
    $('#navPlaceholder').load('../assets/navigation.html');

    $('#btnBack').click(function(){
        window.location.assign("../tutorials/tutorial-13.html");
    });
    $('#btnNext').click(function(){
        window.location.assign("../tutorials/tutorial-15.html");
    });
    // $('#btnHome').click(function(){
    //     window.location.assign("../");
    // });
}

$(window).on('load', function(){
    $('#loadingView').fadeOut('slow');
    setTimeout(function(){
        initTutorial14Page();
    }, 250);    
});    
// ===== Created by Naomi Justin =====