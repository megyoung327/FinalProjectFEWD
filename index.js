function changeBackgroundImage() {
    
    //this
    //$(this)

    var attr = $(this).attr('class'); //attr === 'hydrate'
    var text = $(this).attr('data-text');
    var text2 = $(this).attr('data-text-two');
    var text3 = $(this).attr('data-text-three');


    //$('.demo').attr('categoryItem');

    $('.demo').attr('class', 'demo ' + attr);
    $('.demo_second').attr('class', 'demo_second ' + attr);
    $('.demo_third').attr('class', 'demo_third ' + attr);

    $('#content').html('<p>' + text + '</p>');
    $('#content_second').html('<p>' + text2 + '</p>');
    $('#content_third').html('<p>' + text3 + '</p>');

}


$(document).ready(function() {

    $('li').hover(changeBackgroundImage);

        // if (categoryItem = '.hydrate') {
        //     $(.demo).attr('.cucumber') 
        //  } else if (categoryItem = '.bright') {
        //     $('.demo').attr('.bright')
        //  } else if (categoryItem = '.mood') {
        //     $('.demo').attr('.spinach')
        //  } else if (categoryItem = '.detox') {
        //     $('.demo').attr('.fennel')
        //  } else if (categoryItem = '.soft') {
        //     $('.demo').attr('.avocado')
        //  } else if (categoryItem = '.age') {
        //     $('.demo').attr('.grapefruit')
        //  }

});

        













        //prevent default
        //get the value that is selected in the drop down
        //store that value in a variable

        //then, based on the selected option, add and remove classes
        //to the $('.demo')

        //$('.demo').removeClass('default other-class something').addCoass('the-class-i-want')

// When option is selected the assigned class will populate an image with
// the superfood.
        // if (option === 'Hydrating') {
  //        console.log('Hydrating');
  //        $('.demo').attr('cucumber');
  //           $('#content').html('cucumber')
        // } else if (option === 'Brightening') {
  //        console.log('Brightening');
  //        $('.demo').attr('spirulina');
  //           $('#content').html('spinach')
  //        // this.reset();
  //    } else if (option === 'Benefiting mood and sleep') {
  //        console.log('Benefiting mood and sleep');
  //        $('.demo').attr('spinach');
  //           $('#content').html('spinach')
  //        // this.reset();
  //    } else if (option === 'Detoxifying') {
  //        console.log('Detoxifying');
  //        $('.demo').attr('fennel');
  //           $('#content').html('fennel')
  //        // this.reset();
  //    // } else if (option === '') {
  //    //  console.log('Acne preventing');
  //    //  $('.demo').attr('pumpkin-seeds');
  //    //        $('#content').html('pumpkin-seeds')
  //        // this.reset();
  //    } else if (option === 'Skin softening') {
  //        console.log('Skin softening');
  //        $('.demo').attr('avocado');
  //           $('#content').html('avocado')

  //        // this.reset();
  //    } else if (cityName === 'Anti-aging') {
  //        console.log('Anti-aging');
  //        $('.demo').attr('grapefruit');
  //           $('#content').html('grapefruit');
  //        // this.reset();
  //    }


