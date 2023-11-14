import $ from "../core";

// Открытие модального окна при клике на элем
$.prototype.modal = function () {
  for (let i = 0; i < this.length; i++) {
    const target = this[i].getAttribute("data-target");

    $(this[i]).on("click", (e) => {
      e.preventDefault();
      $(`[id = '${target}']`).fadeIn(200);
      document.body.style.overflow = "hidden";
    });
  }

  const closeCross = document.querySelectorAll("[data-close]");
  closeCross.forEach((close) => {
    $(close).on("click", (e) => {
      $(".modal").fadeOut(200);
      document.body.style.overflow = "";
    });
  });

  const closeModal = document.querySelectorAll(".modal");
  closeModal.forEach((modal) => {
    $(modal).on("click", (e) => {
      if (!e.target.closest(".modal-content")) {
        $(".modal").fadeOut(200);
        document.body.style.overflow = "";
      }
    });
  });
};

$('[data-toggle="modal"]').modal();

// Формирование и открытие модального окна при клике на элем
// $.prototype.modalNew = function (created) {
//   for (let i = 0; i < this.length; i++) {
//     const target = this[i].getAttribute("data-target");

//     $(this[i]).on("click", (e) => {
//       e.preventDefault();
//       $(target).fadeIn(200);
//       document.body.style.overflow = "hidden";
//     });

//     const closeCross = document.querySelectorAll("[data-close]");
//     closeCross.forEach((close) => {
//       $(close).on("click", (e) => {
//         $(target).fadeOut(200);
//         document.body.style.overflow = "";
//         if (created) {
//           document.querySelector(target).remove();
//         }
//       });
//     });

//     const closeModal = document.querySelectorAll(".modal");
//     closeModal.forEach((modal) => {
//       $(modal).on("click", (e) => {
//         if (!e.target.closest(".modal-content")) {
//           $(target).fadeOut(200);
//           document.body.style.overflow = "";
//           if (created) {
//             document.querySelector(target).remove();
//           }
//         }
//       });
//     });
//   }
// };

// $.prototype.createModal = function ({ text, btns } = {}) {
//   for (let i = 0; i < this.length; i++) {
//     const modal = document.createElement("div");
//     modal.classList.add("modal");
//     modal.setAttribute("id", "exampleModal2");

//     //   btns = {count: num, settings: [[text, [className], close: boolean, cb]]}
//     const buttons = [];
//     for (let j = 0; j < btns.count; j++) {
//       let btn = document.createElement("button");
//       btn.classList.add("btn", ...btns.settings[j][1]);
//       btn.textContent = btns.settings[j][0];

//       if (btns.settings[j][2]) {
//         btn.setAttribute("data-close", "true");
//       }

//       if (btns.settings[j][3] && typeof btns.settings[j][3] === "function") {
//         btn.addEventListener("click", btns.settings[j][3]);
//       }

//       buttons.push(btn);
//     }

//     modal.innerHTML = `
//          <div class="modal-dialog">
//           <div class="modal-content">
//             <button class="close" data-close>
//               <span>&times;</span>
//             </button>
//             <div class="modal-header">
//               <div class="modal-title">${text.title}</div>
//             </div>
//             <div class="modal-body">${text.body}</div>
//             <div class="modal-footer">

//             </div>
//           </div>
//         </div>
//          `;

//     modal.querySelector(".modal-footer").append(...buttons);
//     document.querySelector(".container").append(modal);
//     $(this[i]).modalNew(true);
//     $(modal).fadeIn(200);
//   }
// };
