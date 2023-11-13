import "./lib/lib";

$("#trigger").on("click", () => {
  $("#trigger").createModal({
    text: {
      title: "Modal title #2",
      body: "Lorem ipsum dolor sit",
    },
    btns: {
      count: 2,
      settings: [
        ["Close", ["btn-danger"], true],
        [
          "Save changes",
          ["btn-success"],
          false,
          () => {
            alert("Данные сохранены");
          },
        ],
      ],
    },
  });
});
