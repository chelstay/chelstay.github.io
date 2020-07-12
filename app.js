// jQuery Smooth scroll

$('a').on('click', function(e) {
  if (this.hash !== ''); {
    e.preventDefault();

    const hash = this.hash;

    $('html, body').animate({
        scrollTop: $(hash).offset().top
      },
      800
    );
  }
});




// Fade in

$(document).ready(function () {
    $('.toshow1').fadeIn(2000);
    $('.toshow1').slideDown("slow");
    // OR $('div.toshow').show(2200);
    // OR $('div.toshow').slideDown("slow");
});

$(document).ready(function () {
    $('.toshow2').fadeIn(3000);
    $('.toshow2').slideDown("slow");
    // OR $('div.toshow').show(2200);
    // OR $('div.toshow').slideDown("slow");
});

$(document).ready(function () {
    $('.toshow3').fadeIn(4000);
    // OR $('div.toshow').show(2200);
    // OR $('div.toshow').slideDown("slow");
});

$(document).ready(function() {
    $(window).scroll( function(){
        $('.fadein').each( function(i){

            var bottom_of_element = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + ($(window).height() / 2);

            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},800);
            }

        });
    });
});

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}




document.getElementById("showHide").onclick = function() {
    var theDiv = document.getElementById("coursework");
    if(theDiv.style.display == 'none') {
        theDiv.style.display = 'block';
        this.innerHTML = 'Hide Coursework';
    } else {
        theDiv.style.display = 'none';
        this.innerHTML = 'Show Coursework';
    }
}
