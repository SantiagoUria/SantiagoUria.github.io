// copies email on clipboard - only works on desktop version
const copyToClipboardButton = document.getElementById("copyToClipboard");
const message = document.getElementById("moving");

const copyToClipboard = () => {
  navigator.clipboard.writeText("uriasantiago.a@gmail.com");
  message.style.animation = "";

  setTimeout(() => {
    message.style.animation = "message-scroll 5s";
  }, 0.002);
};

copyToClipboardButton.addEventListener("click", copyToClipboard, true);

// buttonFalena = document.getElementById("buttonFalena");
// infoFalena = document.getElementById("right");

// buttonFalena.addEventListener("click", () => {
//   if (infoFalena.style.display === "none") {
//     infoFalena.style.display = "flex";
//     infoFalena.style.opacity = "1";
//   } else {
//     infoFalena.style.display = "none";
//     infoFalena.style.opacity = "0";
//   }
// });

// opens the menu
function openNav() {
  document.getElementById("myNav").style.width = "100%";
  console.log("caca");
}
// closes the menu when the X is clicked
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
const burguerMenu = document.getElementById("myNav");

// closes the menu when the div is clicked
burguerMenu.addEventListener("click", () => {
  closeNav();
});

// copies the target text on the email button - only works on mobile version
// source: https://clipboardjs.com/

const copyToClipboardMobile = () => {
  const clipboard = new ClipboardJS(".btn");

  clipboard.on("success", function (e) {
    console.info("Action:", e.action);
    console.info("Text:", e.text);
    console.info("Trigger:", e.trigger);
    message.style.animation = "";

    setTimeout(() => {
      message.style.animation = "message-scroll 5s";
    }, 0.002);
    e.clearSelection();
  });

  clipboard.on("error", function (e) {
    console.error("Action:", e.action);
    console.error("Trigger:", e.trigger);
  });
};

copyToClipboardButton.addEventListener("focus", copyToClipboardMobile, true);
