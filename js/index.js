// ===== Created by Naomi Justin =====
"use strict"

function initPageContent() {  
    // === Global Variables ===
    var minX, maxX, minY, maxY;
    var bMinX, bMaxX, bMinY, bMaxY;
    var firstShakeCompleted = false;
    var clickDisabled = false;
    
    // === Toast Disclaimer ===
    function showToast () {
        var tipPrompt = document.getElementById('toastTipPrompt');
        var showTip = new bootstrap.Toast(tipPrompt);
        showTip.show();
        //$('#toastTipPrompt').toast('show');
    }
    $('#toastInfoIcon').click(function(){
        showToast();
    });

    showToast();
    setTimeout(function(){
        if (!firstShakeCompleted) {
            showHowToToast();
        }        
    }, 8000);

    // === Load Nav ===
    $('#navPlaceholder').load('assets/navigation.html');


    // === Trigger - White Circle Follow Mouse ===
    $(window).on('mousemove', function(e){
        // Calculation - Relative Position
        minX = 0;        
        maxX = minX + $('#divSmallerMoveAreaWhiteCircle').width();
        //maxX = minX + $('#image8BallDarkBase').width();

        minY = 0;
        maxY = minY + $('#divSmallerMoveAreaWhiteCircle').height();
        //maxY = minY + $('#image8BallDarkBase').height();

        var x = Math.max(
            Math.min(
                e.pageX, maxX
        ), minX);

        var y = Math.max(
            Math.min(
                e.pageY, maxY
        ), minY);

        $('#image8BallWhiteCircle').css('left', x + 'px');
        $('#image8BallWhiteCircle').css('top', y + 'px');        
    });

    // === Toast Help ===
    $('#toastHelpIcon').click(function(){
        showHowToToast();
    });
    function showHowToToast () {
        $('#toastHowToPrompt').toast('show');
    }
   
    

    // === Toast Click ===
    $('#toastTipPrompt, #toastHowToPrompt').click(function(){
        // Reset White Ball Location
        $('#image8BallWhiteCircle').css('top', '50%');
        $('#image8BallWhiteCircle').css('left', '50%');
        $('#image8BallWhiteCircle').css('transform', 'translate(-50%, -50%)');
    });

    // === First Shake ===
    $('#image8BallShine').click(function(e){
        
        if (clickDisabled) {
            return
        } else if (!clickDisabled) {
            clickDisabled = true;
            $('#image8BallShine').css('cursor', 'url("images/starCursor.svg"), auto');
            if (!firstShakeCompleted) {
                // Reset White Ball Location
                $('#image8BallWhiteCircle').css('top', '50%');
                $('#image8BallWhiteCircle').css('left', '50%');
                $('#image8BallWhiteCircle').css('transform', 'translate(-50%, -50%)');
                
                $('#image8BallDarkBase, #image8BallShine, #image8BallWhiteCircle').addClass('shakeBall');
                setTimeout(function(){
                    $('#image8BallDarkBase, #image8BallShine, #image8BallWhiteCircle').removeClass('shakeBall');                
                    $('#image8BallWhiteCircle').addClass('rotateWhiteBall');                
                    setTimeout(function(){
                        $('#image8BallDarkInnerCircle').removeClass('d-none');
                        $('#image8BallWhiteCircle').addClass('d-none');
                        $('#image8BallDarkInnerCircle').addClass('rotateDarkBall');
                        setTimeout(function(){
                            $('#image8BallDarkInnerCircle').css('top', '50%');
                            $('#image8BallDarkInnerCircle').css('left', '50%');
                            $('#image8BallDarkInnerCircle').css('transform', 'translate(-50%, -50%)');
                            $('#image8BallDarkInnerCircle').removeClass('rotateDarkBall');    
                            fadeInResult(); 
                            setTimeout(function(){
                                clickDisabled = false;
                                $('#image8BallShine').css('cursor', 'pointer');
                            }, 3000);                      
                        }, 800);                    
                    }, 800);                   
                }, 1500);
                firstShakeCompleted = true;                         
            } else if (firstShakeCompleted) {
                fadeOutResult();
                setTimeout(function(){
                    $('#image8BallDarkBase, #image8BallShine, #image8BallDarkInnerCircle').addClass('shakeBall');            
                    setTimeout(function(){
                        $('#image8BallDarkBase, #image8BallShine, #image8BallDarkInnerCircle').removeClass('shakeBall');  
                        fadeInResult();
                        setTimeout(function(){
                            clickDisabled = false;
                            $('#image8BallShine').css('cursor', 'pointer');
                        }, 3000);                                      
                    }, 1500);    
                }, 500);
            }
        }                            
    });

    function fadeOutResult(){
        $('#image8BallBlueTriangle, #image8BallBubble1, #image8BallBubble2, #image8BallBubble3, #htmlResultText').addClass('fadeOutTri');
        setTimeout(function(){
            $('#image8BallBlueTriangle, #image8BallBubble1, #image8BallBubble2, #image8BallBubble3, #htmlResultText').css('opacity', '0');
            $('#image8BallBlueTriangle, #image8BallBubble1, #image8BallBubble2, #image8BallBubble3, #htmlResultText').removeClass('fadeOutTri');
        }, 500);
    }

    function fadeInResult(){
        var bubble1XY = calcBubbleCoordinates();
        var bubble2XY = calcBubbleCoordinates();
        var bubble3XY = calcBubbleCoordinates();
        $('#image8BallBubble1').css('left', bubble1XY.x + 'px');
        $('#image8BallBubble1').css('top', bubble1XY.y + 'px');

        $('#image8BallBubble2').css('left', bubble2XY.x + 'px');
        $('#image8BallBubble2').css('top', bubble2XY.y + 'px');

        $('#image8BallBubble3').css('left', bubble3XY.x + 'px');
        $('#image8BallBubble3').css('top', bubble3XY.y + 'px'); 
        
        // Animate
        $('#htmlResultText').html(getRandomResult());        
        $('#image8BallBlueTriangle, #htmlResultText').addClass('fadeInTri');
        $('#image8BallBubble1').addClass('bubble1FadeIn');
        $('#image8BallBubble2').addClass('bubble2FadeIn');
        $('#image8BallBubble3').addClass('bubble3FadeIn');
        setTimeout(function(){
            $('#image8BallBlueTriangle, #htmlResultText').css('opacity', '1');
            $('#image8BallBlueTriangle, #htmlResultText').removeClass('fadeInTri');
        }, 2500);
        setTimeout(function(){
            $('#image8BallBubble1').css('transform', 'translate(30px, 50px)');            
            $('#image8BallBubble2').css('transform', 'translate(-30px, -25px)');
            $('#image8BallBubble3').css('transform', 'translate(-20px, 40px)');
            $('#image8BallBubble1, #image8BallBubble2, #image8BallBubble3').css('opacity', '1');

            $('#image8BallBubble1').removeClass('bubble1FadeIn');
            $('#image8BallBubble2').removeClass('bubble2FadeIn');
            $('#image8BallBubble3').removeClass('bubble3FadeIn');            
        }, 3000);
              
    }    

    function calcBubbleCoordinates(){
        bMinX = 0;
        bMaxX = bMinX + $('#divWrapimage8BallResult').width();

        bMinY = 0;
        bMaxY = bMinY + $('#divWrapimage8BallResult').height();

        var x = getRandomInt(bMinX, bMaxX);
        var y = getRandomInt(bMinY, bMaxY);
       
        return {x, y};
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
      }

    function getRandomResult() {
        var resultArr = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "My sources say no", "Very doubtful"];
        var arrInt = Math.floor((Math.random() * 19));

        return resultArr[arrInt].toUpperCase();
    }
}

$(window).on('load', function(){
    $('#loadingView').fadeOut('slow');
    setTimeout(function(){
        $('#divWrapToastHowTo').css("display", "block");
        initPageContent();
    }, 250);    
});    

// ===== Created by Naomi Justin =====