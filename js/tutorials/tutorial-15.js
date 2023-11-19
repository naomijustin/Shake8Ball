// ===== Created by Naomi Justin =====

"use strict"
function initTutorial15Page() {
    // === Load Nav ===
    $('#navPlaceholder').load('../assets/navigation.html');

    $('#btnBack').click(function(){
        window.location.assign("../tutorials/tutorial-14.html");
    });
    $('#btnNext').click(function(){
        window.location.assign("../tutorials/tutorial-16.html");
    });
    // $('#btnHome').click(function(){
    //     window.location.assign("../");
    // });
}

$(window).on('load', function(){
    $('#loadingView').fadeOut('slow');
    setTimeout(function(){
        initTutorial15Page();
    }, 250);    
});    
// ===== Created by Naomi Justin =====