document.addEventListener("DOMContentLoaded", () => {
  hamburgerMenuToggler();
  featuresTabToggler();
  subscribeFormValidation();
});

const hamburgerMenuToggler = () => {
  const hamburgerButton = document.getElementById("hamburger-button");
  const hamburgerMenuElement = document.getElementById("hamburger-menu");
  const closeButton = document.getElementById("close-button");

  const handleClickHamburgerButton = () => {
    hamburgerButton.setAttribute("aria-expanded", true);
    hamburgerMenuElement.classList.add("opacity-100", "translate-x-0", "flex");
    hamburgerMenuElement.classList.remove("opacity-0", "-translate-x-full");

    setTimeout(() => {
      hamburgerMenuElement.classList.remove("none");
    }, 300);
  };

  const handleClickCloseButton = () => {
    hamburgerButton.setAttribute("aria-expanded", false);
    hamburgerMenuElement.classList.remove("opacity-100", "translate-x-0");
    hamburgerMenuElement.classList.add("opacity-0", "-translate-x-full");

    setTimeout(() => {
      hamburgerMenuElement.classList.remove("flex");
      hamburgerMenuElement.classList.add("none");
    }, 300);
  };

  hamburgerButton.addEventListener("click", handleClickHamburgerButton);
  closeButton.addEventListener("click", handleClickCloseButton);
};

const featuresTabToggler = () => {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  const resetTabActive = () => {
    tabButtons.forEach((button) => {
      button.setAttribute("data-tab-active", false);
      button.setAttribute("aria-expanded", false);
    });
    tabContents.forEach((content) => {
      content.setAttribute("data-tab-active", false);
    });
  };

  const isTabContent = (name) => {
    tabContents.forEach((content) => {
      if (content.id == name) {
        content.setAttribute("data-tab-active", true);
      }
    });
  };

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const name = button.getAttribute("aria-controls");
      resetTabActive();
      button.setAttribute("data-tab-active", true);
      button.setAttribute("aria-expanded", true);
      isTabContent(name);
    });
  });
};

const subscribeFormValidation = () => {
  const subscribeForm = document.getElementById("subscribe-form");
  const emailInput = document.getElementById("email");
  const errorIcon = document.getElementById("error-icon");
  const errorMessage = document.getElementById("error-message");

  const validateEmail = () => {
    if (!emailInput.checkValidity()) {
      errorIcon.classList.remove("hidden");
      errorMessage.classList.remove("hidden");
      emailInput.classList.add("outline-0", "border-4", "border-soft-red", "mb-8");
      errorIcon.classList.add("block");
      errorMessage.classList.add("block");
      return false;
    } else {
      errorIcon.classList.add("hidden");
      errorMessage.classList.add("hidden");
      emailInput.classList.remove("outline-0", "border-4", "border-soft-red", "mb-8");
      errorIcon.classList.remove("block");
      errorMessage.classList.remove("block");
      return true;
    }
  };

  emailInput.addEventListener("input", (e) => {
    if (!validateEmail()) {
      e.preventDefault();
    }
  });
  subscribeForm.addEventListener("submit", () => {
    validateEmail();
  });
};
