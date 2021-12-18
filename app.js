// gets the device type
const deviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  } else if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};

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

// copies the target text on the email button - only works on mobile version
// source: https://clipboardjs.com/

const clipboard = new ClipboardJS(".btn");
const copyToClipboardMobile = () => {
  clipboard.on("success", function (e) {
    // console.info("Text:", e.text);
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

copyToClipboardButton.addEventListener(
  "click",
  () => {
    if (deviceType() === "mobile" || deviceType() === "tablet") {
      copyToClipboardMobile();
    }
    if (deviceType() === "desktop") {
      copyToClipboard();
    }
  },
  true
);




//Get the button:
toTopButton = document.getElementById("toTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTopButton.style.display = "block";
  } else {
    toTopButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}