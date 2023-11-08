import "./lib/lib";

$(".active").setAtr("data-modal", "true");
$(".active").removeAtr("data-modal", "true");
console.log($(".active").getAtr("data-size"));
