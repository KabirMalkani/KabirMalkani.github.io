function toggleDesc(elem){
    $(elem).parent().next().toggle()
    $(elem).find('i').toggleClass('fa-angle-down')
    $(elem).find('i').toggleClass('fa-angle-up')
}


function copyEmail() {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($('#contactEmail').text()).select();
    document.execCommand("copy");
    $temp.remove();
}


$(document).ready(function(){
    $( window ).resize(function() {
        var shift = $('#name').innerWidth()
        $( ".slidingHorizontal" ).css( 'margin-left', -shift);
    });

    var shift = $('#name').innerWidth()
    $( ".slidingHorizontal" ).css( 'margin-left', -shift );

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100){
            $('#scrollarrow').fadeOut()
        } else {            
            $('#scrollarrow').fadeIn()
        }
    })
    
})

