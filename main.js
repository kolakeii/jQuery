//jquery methods
$(document).ready(function() {

    
    //click event
    $('#red').click(function() {


        //clone manipulation
        $('#red').clone().appendTo("#container");
        
        
        //animate effect
        $('#red').animate({
            width: '500px'
        },1000);
    });
});