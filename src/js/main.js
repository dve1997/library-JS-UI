import "./lib/lib";

$(".btn-primary").on("click", (e) => {
  $(".w-500").fadeOut(1000);
});

$(".btn-dark").on("click", (e) => {
  $(".w-500").fadeIn(1000);
});

$(".btn-warning").on("click", (e) => {
  $(".w-500").fadeToggle(1000);
});
