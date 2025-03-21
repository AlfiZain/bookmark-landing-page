document.addEventListener("DOMContentLoaded", () => {
  hamburgerMenuToggler();
  featuresTabToggler();
});

const hamburgerMenuToggler = () => {
  const hamburgerButton = document.getElementById("hamburger-button");
  const hamburgerMenuElement = document.getElementById("hamburger-menu");
  const closeButton = document.getElementById("close-button");

  const handleClickHamburgerButton = () => {
    hamburgerButton.setAttribute("aria-expanded", true);
    hamburgerMenuElement.classList.add("opacity-100", "translate-x-0");
    hamburgerMenuElement.classList.remove("opacity-0", "-translate-x-full");
  };

  const handleClickCloseButton = () => {
    hamburgerButton.setAttribute("aria-expanded", false);
    hamburgerMenuElement.classList.remove("opacity-100", "translate-x-0");
    hamburgerMenuElement.classList.add("opacity-0", "-translate-x-full");
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

  //   const simpleBookmarkButton = document.getElementById("simple-bookmark-button");
  //   const speedySearchingButton = document.getElementById("speedy-searching-button");
  //   const easySharingButton = document.getElementById("easy-sharing-button");
  //   const simpleBookmarkContent = document.getElementById("simple-bookmark-content");
  //   const speedySearchingContent = document.getElementById("speedy-searching-content");
  //   const easySharingContent = document.getElementById("easy-sharing-content");

  //   const resetActive = () => {
  //     simpleBookmarkButton.classList.remove("after:scale-100");
  //     speedySearchingButton.classList.remove("after:scale-100");
  //     easySharingButton.classList.remove("after:scale-100");
  //     simpleBookmarkButton.classList.add("after:scale-0");
  //     speedySearchingButton.classList.add("after:scale-0");
  //     easySharingButton.classList.add("after:scale-0");
  //   };

  //   const handleClickSimpleBookmarkButton = () => {
  //     resetActive();
  //     simpleBookmarkButton.classList.remove("after:scale-0");
  //     simpleBookmarkButton.classList.add("after:scale-100");
  //   };

  //   const handleClickSpeedySearchingButton = () => {
  //     resetActive();
  //     speedySearchingButton.classList.remove("after:scale-0");
  //     speedySearchingButton.classList.add("after:scale-100");
  //   };

  //   const handleClickEasySharingButton = () => {
  //     resetActive();
  //     easySharingButton.classList.remove("after:scale-0");
  //     easySharingButton.classList.add("after:scale-100");
  //   };

  //   simpleBookmarkButton.addEventListener("click", handleClickSimpleBookmarkButton);
  //   speedySearchingButton.addEventListener("click", handleClickSpeedySearchingButton);
  //   easySharingButton.addEventListener("click", handleClickEasySharingButton);
};
