import "./lib/lib";

$(".container").html(
  `
<div class="dropdown">
        <button
          class="btn btn-primary dropdow-toggle"
          id="dpordown-menu-toggle"
        >
          Dropdown action
        </button>
        <div class="dropdown-menu" data-menu-toggle="dpordown-menu-toggle">
          <a href="#" class="dropdown-item">action 1</a>
          <a href="#" class="dropdown-item">action 2</a>
          <a href="#" class="dropdown-item">action 3</a>
        </div>
      </div>`
);

$(".dropdow-toggle").dropdown();
