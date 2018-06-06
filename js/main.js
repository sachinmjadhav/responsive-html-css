// Animate smooth scroll
$("#view-work").on("click", function() {
  const images = $("#images").position().top;

  $("html, body").animate(
    {
      scrollTop: images
    },
    900
  );
});

$("#top").on("click", function() {
  $("html, body").animate(
    {
      scrollTop: 0
    },
    2000
  );
});
