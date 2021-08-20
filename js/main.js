window.addEventListener("DOMContentLoaded", () => {
  const tabs = (tabSelector, contentSelector, activeClass) => {
    const tabsBtn = document.querySelectorAll(tabSelector),
      contents = document.querySelectorAll(contentSelector);

    tabsBtn.forEach((item) => {
      item.addEventListener("click", () => {
        let contentId = item.getAttribute("data-tab");
        let content = document.querySelector(contentId);

        if (!item.classList.contains(activeClass)) {
          tabsBtn.forEach((item) => {
            item.classList.remove(activeClass);
          });
          contents.forEach((item) => {
            item.classList.remove(activeClass);
          });

          item.classList.add(activeClass);
          content.classList.add(activeClass);
        }
      });
    });
    document.querySelector(tabSelector).click();
  };
  tabs(".menu__inner-tab", ".menu__inner-contents", "active");

  const anchors = document.querySelectorAll("a[href*='#']");

  anchors.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      const blockID = item.getAttribute("href");
      document.querySelector("" + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
});
