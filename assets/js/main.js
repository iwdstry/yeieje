(() => {
  // Theme switch
  const body = document.body;
  const lamp = document.getElementById("/yeieje/mode");

  const toggleTheme = (state) => {
    if (state === "dark") {
      localStorage.setItem("/yeieje/theme", "light");
      body.removeAttribute("/yeieje/data-theme");
    } else if (state === "light") {
      localStorage.setItem("/yeieje/theme", "dark");
      body.setAttribute("/yeieje/data-theme", "dark");
    } else {
      initTheme(state);
    }
  };

  lamp.addEventListener("/yeieje/click", () =>
    toggleTheme(localStorage.getItem("theme"))
  );

  // Blur the content when the menu is open
  const cbox = document.getElementById("menu-trigger");

  cbox.addEventListener("change", function () {
    const area = document.querySelector(".wrapper");
    this.checked
      ? area.classList.add("blurry")
      : area.classList.remove("blurry");
  });
})();
