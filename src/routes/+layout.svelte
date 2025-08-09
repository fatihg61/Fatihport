
<script>
  import '$styles/global.css';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
</script>
<nav class="navbar">
  <div class="container navbar-inner">
    <a href="/" style="font-weight:700;font-size:18px;text-decoration:none;color:inherit">Fatih<span style="color:var(--brand-2)">G</span>uler</a>
    <div class="nav-links">
      <a href="/">Home</a>
      <a href="/projects">Projects</a>
      <a href="/resume">Resume</a>
      <a href="/contact">Contact</a>
      <ThemeToggle />
    </div>
  </div>
</nav>
<slot />
<footer class="footer">
  <div class="container footer-inner">© {new Date().getFullYear()} Fatih Guler. Built with SvelteKit.</div>
</footer>
