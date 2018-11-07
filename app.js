// /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// particlesJS.load('particles-js', 'assets/particles.json', function() {
//   console.log('callback - particles.js config loaded');
// });

$(".btn").click(function() {
  $('html,body').animate({
      scrollTop: $(".section-about").offset().top},
      'slow');
});