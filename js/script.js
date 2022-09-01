// ===== Created by Naomi Justin =====
"use strict"

function initPageContent() {
    // === Global Variables ===    
    var firstShakeCompleted = false;    
    showToast();
    setTimeout(function(){
        if (!firstShakeCompleted) {
            showHowToToast();
        }        
    }, 6500);

    // === Toast Help ===
    $('#toastHelpIcon').click(function(){
        showHowToToast();
    });
    function showHowToToast () {
        $('#toastHowToPrompt').toast('show');
    }
}
$(document).ready(function(){
    initPageContent();    
});
// ===== Created by Naomi Justin =====