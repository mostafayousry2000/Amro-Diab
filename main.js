


	 


$(window).ready(function() {
    
    $('.sp').fadeOut(7000)
    $('body').css('overflow','auto')
    $(window).scroll(function() {
        if($(window).scrollTop() > 70) {
            $('.navbar').css('background','black')
            
        }else {
            $('.navbar').css('background','rgba(165, 19, 19, 0)')
        }
    })
})




















