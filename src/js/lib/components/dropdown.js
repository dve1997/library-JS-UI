import $ from "../core";

$.prototype.dropdown = function () {
  for (let i = 0; i < this.length; i++) {
    const butId = this[i].getAttribute("id");
    $(this[i]).on("click", (e) => {
      $(`[data-menu-toggle = ${butId}]`).fadeToggle(300);
    });
  }
};

$(".dropdow-toggle").dropdown();
