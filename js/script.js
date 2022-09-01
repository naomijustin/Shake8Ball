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

    // ========= Toast Disclaimer =========
    function showToast () {
        $('#toastTipPrompt').toast('show');
    }
    $('#toastInfoIcon').click(function(){
        showToast();
    });
}
$(document).ready(function(){
    initPageContent();    
});
// ===== Created by Naomi Justin =====