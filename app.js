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



function myFunction() {
 var dots = document.getElementById("dots");
 var moreText = document.getElementById("more");
 var btnText = document.getElementById("myBtn");

 if (dots.style.display === "none") {
   dots.style.display = "inline";
   btnText.innerHTML = "Read More";
   moreText.style.display = "none";
 } else {
   dots.style.display = "none";
   btnText.innerHTML = "Read Less";
   moreText.style.display = "inline";
 }
}


document.getElementById("showHide").onclick = function() {
   var theDiv = document.getElementById("coursework");
   if(theDiv.style.display == 'none') {
       theDiv.style.display = 'block';
       this.innerHTML = '(Hide Coursework)';
   } else {
       theDiv.style.display = 'none';
       this.innerHTML = '(Show Coursework)';
   }
}


(function() {
  var elements;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll('.hidden');
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add('fade-in-element');
        element.classList.remove('hidden');
      }
    }
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();
})();
