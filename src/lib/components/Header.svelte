<script>
  import { onMount } from "svelte";

  let showOverlay = false;
  let isDarkMode = false;

  onMount(() => {
    const menuHideBtn = document.getElementById("menu-hide-btn");
    menuHideBtn.addEventListener("click", () => (showOverlay = false)); // Use Svelte's reactivity for overlay state

    // Load dark mode preference from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      isDarkMode = savedTheme === "dark";
      applyTheme();
    }
  });

  const toggleDarkMode = () => {
    isDarkMode = !isDarkMode;
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    applyTheme();
  };

  const applyTheme = () => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
  };
</script>

<header>
  <nav class="nav-menu">
    <div class="nav-container">
      <a href="/" class="nav-brand">Fatih G.</a>

      <button type="button" on:click={toggleDarkMode}>
        <i class="fas {isDarkMode ? 'fa-sun' : 'fa-moon'}"></i>
      </button>

    </div>
  </nav>
</header>

<style>
  a {
    color: var(--text-color);
    text-decoration: none;
  }

  button {
    background-color: transparent;
    color: var(--text-color);
    border: none;
    font-size: 30px;
    cursor: pointer;
    transition: all 300ms ease-in-out;
  }

  button:hover {
    opacity: 0.9;
  }

  .nav-brand {
    color: var(--text-color);
    font-size: 30px;
    font-weight: 500;
    letter-spacing: 2px;
  }

  .nav-menu {
    background-color: var(--background);
  }

  .nav-container {
    max-width: 1600px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
