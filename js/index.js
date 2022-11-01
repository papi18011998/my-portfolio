$(document).ready(function(){
    function toggleMenu(params) {
        $('#burgerIcon').click(function(){
            $(this).toggleClass('fa-times')
            $('header').toggleClass('toggle')
        })
    }
    toggleMenu()
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
    if (document.body.offsetWidth<=500) {
        $('.menu-item').click(function () {
            // alert($('menu-item').text())
            $(header).css("left","-120%") 
            $("#burgerIcon").removeClass('fa-times') 
            toggleMenu()
        })
        
    }
})