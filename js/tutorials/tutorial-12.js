// ===== Created by Naomi Justin =====

"use strict"
function initTutorial12Page() {
    // === Load Nav ===
    $('#navPlaceholder').load('../assets/navigation.html');

    $('#btnBack').click(function(){
        window.location.assign("../tutorials/tutorial-11.html");
    });
    $('#btnNext').click(function(){
        window.location.assign("../tutorials/tutorial-13.html");
    });
}

$(window).on('load', function(){
    $('#loadingView').fadeOut('slow');
    setTimeout(function(){
        initTutorial12Page();
    }, 250);    
});    
// ===== Created by Naomi Justin =====