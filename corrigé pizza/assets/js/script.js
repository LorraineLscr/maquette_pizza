$(document).ready(function () {
    let bdp = false;
    jQuery(document).scroll(function () {

        if (jQuery(window).height() + jQuery(window).scrollTop()+2 >= jQuery(document).height() && !bdp){
            console.log('Scroll en bas de page');
            $(document.body).append('<a href="#home"><div id="gotop"><img src="./assets/img/arrow-alt-circle-up-solid.svg" alt=""></div></a>');
            $("#gotop").animate({"bottom":"1rem"});
            bdp = true;
        }
        });

    // tabs
    $( "#menu" ).tabs();
});