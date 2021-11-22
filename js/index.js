$(document).ready(function(){
    $('#burgerIcon').click(function(){
        $(this).toggleClass('fa-times')
        $('#header').toggleClass('header-nav')
    })
})