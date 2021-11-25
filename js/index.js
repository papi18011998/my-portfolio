$(document).ready(function(){
    $('#burgerIcon').click(function(){
        $(this).toggleClass('fa-times')
        $('header').toggleClass('toggle')
    })
    $(document).scroll(function(){
        if (document.body.scrollTop > 50  || document.documentElement.scrollTop > 50) {
            $('.to-top').css("display","block")
        }else{
            $('.to-top').css("display","none") 
        }
        $('.to-top').click(function(){
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 50
        })
    })
})