"use strict";

const log = (...args) => console.log(...args);
const random = (a, b = 0) => Math.floor(Math.random() * (a - b) + b);

$(() => {
  const toDoList = [];
  const completedList = [];
  $("head").append(
    `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />`
  );
  // .append(
  //   `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.css" integrity="sha512-aOG0c6nPNzGk+5zjwyJaoRUgCdOrfSDhmMID2u4+OIslr0GjpLKo7Xm0Ao3xmpM4T8AmIouRkqwj1nrdVsLKEQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />`
  // ).append(`
  // <script src="https://code.jquery.com/ui/1.13.1/jquery-ui.min.js" integrity="sha256-eTyxS0rkjpLEo16uXTS0uVCS4815lc40K2iVpWDvdSY=" crossorigin="anonymous"></script>`);

  const $ulToDo = $("<ul>").css("list-style", "none");
  $("#to-do-list").append($ulToDo);

  const $ulCompleted = $("<ul>").css("list-style", "none");
  $("#completed").append($ulCompleted);

  /*
  const toDoStorage = window.localStorage;
  toDoStorage.setItem("completedList", JSON.stringify("abcdefghijk".split("")));
  if (toDoStorage.length !== 0) {
    log(toDoStorage.length, toDoStorage.key(0));
    //toDoList = toDoStorage.getItem("toDoList");
    log(toDoStorage.getItem("completedList"));
    completedList.push(...JSON.parse(toDoStorage.getItem("completedList")));
    log(toDoList, completedList);
    for (let toDo of completedList) {
      $("#input-box").val(toDo);
      log(toDo);
      //document.querySelector("#submit").click();
    }
    $("#input-box").click(function () {
      $("form").submit();
    });

    //document.querySelector("#submit").click();
    log($("form"));
    //$("#input-box").val("");
  }

*/

  $("#submit").on("click", function (e) {
    log(e);
    e.preventDefault();
    if ($("#input-box").val().length === 0) {
      $("#input-box").attr("placeholder", "nothing to do...");
      return;
    } else if (toDoList.indexOf($("#input-box").val()) !== -1) {
      if (!window.confirm("Add duplicate tasks?")) {
        $("#input-box").val("");
        return;
      }
    }
    $("#input-box").attr("placeholder", "");
    toDoList.push($("#input-box").val());

    $ulToDo.append(
      $("<li>")
        .addClass("to-do-item")
        .append(
          $("<div>")
            .text($("#input-box").val())
            .css({ "flex-grow": 10, margin: "1em", "text-align": "justify" })
        )
        .append(
          $("<button>")
            .append(
              $(`<i class="fa-regular fa-square"></i>`).css("font-size", "2em")
            )
            .css({
              "align-self": "flex-start",
              margin: "0.5em",
              padding: "0.5em",
              border: "0",
              "background-color": "inherit",
            })
        )
        .css({
          display: "flex",
          "flex-direction": "row",
          "justify-content": "flex-end",
          "align-items": "center",
          gap: "10px",
        })
        .hover(
          function (e) {
            $(this)
              .find("i")
              .removeClass()
              .addClass("fa-solid fa-square-check");
          },
          function (e) {
            $(this).find("i").removeClass().addClass("fa-regular fa-square");
          }
        )
        .on("click", function (e) {
          $(this).off("mouseenter mouseleave");
          $(this).hover(
            function (e) {
              $(this)
                .find("i")
                .removeClass()
                .addClass("fa-solid fa-square-xmark")
                .css("color", "var(--aqua-strike)");
            },
            function (e) {
              $(this)
                .find("i")
                .removeClass()
                .addClass("fa-solid fa-square-check")
                .css("color", "var(--grey-ice-blue)");
            }
          );
          $ulCompleted.append($(this).removeClass().addClass("done-item"));
          completedList.push(
            ...toDoList.splice(toDoList.indexOf($(this).find("div").text()), 1)
          );
          $(this).off("click");
          $(this)
            .find("button")
            .mousedown(function (e) {
              let str = $(this).parent().find("div").text();
              $(this).parent().find("div").text("slide to delete <<<");
              //$(this).parent().css("position", "relative");
              $(this)
                .find("i")
                .removeClass()
                .addClass("fa-solid fa-delete-left");

              const endOfLife = function (e) {
                log(str);
                if (e.movementX <= -5 && e.movementY < 1 && e.movementY > -1) {
                  $(this).css("animation", "slide-left 0.6s ease-in-out both");
                  setTimeout(() => {
                    completedList.splice(completedList.indexOf(str), 1);
                    $(this).parent().remove();
                    log(toDoList, completedList);
                  }, 600);
                } //else this.removeEventListener("mousemove", endOfLife);
              };

              this.addEventListener("mousemove", endOfLife);
              $(this)
                .parent()
                .on("mouseup mouseleave", function (e) {
                  log(e.target);
                  $(this).find("div").text(str);
                  $(this)
                    .find("i")
                    .removeClass()
                    .addClass("fa-solid fa-square-check")
                    .css("color", "var(--grey-ice-blue)");
                  $(this)
                    .find("button")[0]
                    .removeEventListener("mousemove", endOfLife);
                  //$(this).off("mouseleave");
                });
            });
        })
    );
    $("#input-box").val("");
    log(toDoList, completedList);
  });
});
