/* Full Screen */
const fullscreenButton = document.getElementById("crancy-header__full");
const htmlElement = document.documentElement;

if (fullscreenButton) {
  fullscreenButton.addEventListener("click", () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      htmlElement.requestFullscreen();
    }
  });
}

/* Password Field */
document.addEventListener("DOMContentLoaded", function () {
  const passwordField = document.getElementById("password-field");
  const toggleIcon = document.getElementById("toggle-icon");
  const togglePassword = () => {
    if (passwordField.type === "password") {
      passwordField.type = "text";
      toggleIcon.classList.remove("fa-eye");
      toggleIcon.classList.add("fa-eye-slash");
    } else {
      passwordField.type = "password";
      toggleIcon.classList.remove("fa-eye-slash");
      toggleIcon.classList.add("fa-eye");
    }
  };

  if (toggleIcon) {
    toggleIcon.addEventListener("click", togglePassword);
  }
});

// /* Crancy Options */
const cs_button = document.querySelectorAll("#crancy__sicon");
const cs_action = document.querySelectorAll(
  ".crancy-smenu, .crancy-header, .crancy-adashboard"
);

cs_button.forEach((button) => {
  button.addEventListener("click", function () {
    cs_action.forEach((el) => {
      el.classList.toggle("crancy-close");
    });
    localStorage.setItem(
      "iscicon",
      cs_action[0].classList.contains("crancy-close")
    );
  });
});

if (localStorage.getItem("iscicon") === "true") {
  cs_action.forEach((el) => {
    el.classList.add("crancy-close");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const crancyDropdowns = document.querySelectorAll(".crancy__dropdown");

  crancyDropdowns.forEach((crancyDropdown, index) => {
    const observer = new MutationObserver(function (mutationsList) {
      const crancyDropdownHasShowClass =
        crancyDropdown.classList.contains("show");

      document.querySelectorAll(".admin-menu").forEach((adminMenuOne) => {
        adminMenuOne.classList.toggle(
          "no-overflow",
          crancyDropdownHasShowClass
        );
      });
    });

    observer.observe(crancyDropdown, { attributes: true });
  });
});
