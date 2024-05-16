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
      <button type="button" on:click={() => (showOverlay = true)}>
        <i class="fas fa-bars"></i>
      </button>

      <div class="nav-overlay" class:show-overlay={showOverlay}>
        <div class="nav-overlay-container">
          <button type="button" id="menu-hide-btn">
            <i class="fas fa-close"></i>
          </button>

          <ul class="nav-links">
            <li><a href="/">home</a></li>
            <li><a href="/">portfolio</a></li>
            <li><a href="mailto:fkg061@gmail.com">contact</a></li>
          </ul>
          <ul class="nav-icons">
            <li>
              <button type="button" on:click={toggleDarkMode}>
                <i class="fas {isDarkMode ? 'fa-sun' : 'fa-moon'}"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</header>

<style>
  a {
    color: var(--text-color);
    text-decoration: none;
  }

  ul {
    list-style-type: none;
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

  .nav-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--overlay-color);
    padding: 60px;
    opacity: 0;
    visibility: hidden;
    transition: all 300ms ease-in-out;
  }

  /* show overlay js */
  .show-overlay {
    opacity: 1;
    visibility: visible;
  }

  .nav-overlay-container {
    background-color: var(--background);
    max-width: 1200px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.2);
    position: relative;
  }

  #menu-hide-btn {
    position: absolute;
    right: -20px;
    top: -20px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 50%;
    background-color: var(--white-color);
    color: var(--text-color);
  }

  .nav-links li {
    margin: 16px 0;
    position: relative;
  }

  .nav-links li::before,
  .nav-links li::after {
    content: "";
    position: absolute;
    width: 0;
    height: 3px;
    background-color: var(--pink-color);
    opacity: 0;
    transition: all 300ms ease-in-out;
  }

  .nav-links li::before {
    top: 0;
    left: 0;
  }

  .nav-links li::after {
    bottom: 0;
    right: 0;
  }

  .nav-links li:hover::before,
  .nav-links li:hover::after {
    width: 75%;
    opacity: 1;
  }

  .nav-links li a {
    text-transform: uppercase;
    font-size: 40px;
    letter-spacing: 6px;
    font-weight: 700;
    transition: all 300ms ease-in-out;
  }

  .nav-links li:hover a {
    color: var(--pink-color);
  }

  .nav-icons {
    display: flex;
    align-items: center;
    margin-top: 20px;
  }

  .nav-icons li {
    width: 35px;
    height: 35px;
    margin: 0 5px;
    line-height: 35px;
    transition: all 300ms ease-in-out;
  }

  @media (max-width: 600px) {
    .nav-links li a {
      font-size: 22px;
    }

    .nav-overlay {
      padding: 30px;
    }
  }
</style>
