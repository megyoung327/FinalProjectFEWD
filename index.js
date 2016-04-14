function changeBackgroundImage(event) {

    
    

    $('.demo, .demo_second, .demo_third').removeClass('hidden');
    //this
    //$(this)

    var attr = $('.benefits option:selected').attr('class'); //attr === 'hydrate'
    var text = $('.benefits option:selected').attr('data-text');
    var text2 = $('.benefits option:selected').attr('data-text-two');
    var text3 = $('.benefits option:selected').attr('data-text-three');


    //$('.demo').attr('categoryItem');

    $('.demo').attr('class', 'demo ' + attr);
    $('.demo_second').attr('class', 'demo_second ' + attr);
    $('.demo_third').attr('class', 'demo_third ' + attr);

    $('#content').html('<p>' + text + '</p>');
    $('#content_second').html('<p>' + text2 + '</p>');
    $('#content_third').html('<p>' + text3 + '</p>');

}

$(document).ready(function() {

    $('.benefits').change(changeBackgroundImage);

    $('.hamburger').click(toggleMenu);

    // define toggle menu function. 
    function toggleMenu() {
     $('nav ul').slideToggle();

}

});

        

