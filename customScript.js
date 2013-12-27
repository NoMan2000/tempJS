jQuery(document).ready(function($) {
    
   $('#myTab').sortable();
    
   $('#myTab a').click(function (e) {
 // e.preventDefault()
  $(this).tab('show'); 
}); // End click function

// Begin loop iteration for switching the tabs.

jQuery(window).scroll(function() { 
        console.log('User is at '  + jQuery(window).scrollTop());
        var myTab = jQuery('#myTab');
        var myTabList = jQuery(myTab).find('li');
        //Location of the Scroll window when the header goes out of range.
        var changeThreshold1 = 140; 
        // Add and remove the class fixedHeader when the scroll bar reaches certain points.
        if(jQuery(window).scrollTop() <= changeThreshold1){
          jQuery('#myTab').removeClass('fixedHeader');   
        }else if(jQuery(window).scrollTop() > changeThreshold1){
          jQuery('#myTab').addClass('fixedHeader'); 
        }
        else{
         // console.log("I have no idea what happened.");
        }
        //Location of the Scroll Window when the Profile Tab is clicked. 
        var changeThreshold2 = 602;
        //Location of the Window for the scroll Click on the third tab.
        var changeThreshold3 = 702; 
        // Currently Unused.
        var changeThreshold4 = 4000;
        if(jQuery(window).scrollTop() < changeThreshold1){
        //We are above the first point.  Header is positioned default
        }else if(jQuery(window).scrollTop() >= changeThreshold1 && jQuery(window).scrollTop() < changeThreshold2){
        // Header should move and become fixed at this point.  Set a height attribute as well.
        }else if(jQuery(window).scrollTop() >= changeThreshold2 && jQuery(window).scrollTop() < changeThreshold3){
           // Make the second item become appended to the first DOM element, and make the first element appended to the second.
           if(jQuery(myTabList[0]).hasClass('active')){
              jQuery(myTabList[0]).removeClass('active');
              jQuery(myTabList[1]).addClass('active');
              jQuery(myTabList[1]).prepend(myTabList[0]);
              }
             
        }else if(jQuery(window).scrollTop() >= changeThreshold3 && jQuery(window).scrollTop() < changeThreshold4){
             
        }else if(jQuery(window).scrollTop() >= changeThreshold4 ){
          
        }else{//a failsafe default incase anything gets screwed up
            console.log('User is doing an unknown thing'); 
             
        }
    });

// the hashChange property on Javascript events could be used to swap out the list order.

});