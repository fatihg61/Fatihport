<script lang="ts">
  import '../lib/styles/app.css';
  import { onMount } from 'svelte';
  export let data;
  onMount(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
      document.documentElement.classList.add('light');
    }
  });
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta name="description" content={data.description}>
  <meta property="og:title" content={data.title} />
  <meta property="og:description" content={data.description} />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="/favicon.svg" />
  <meta name="theme-color" content="#0b0c0f" />
  <link rel="manifest" href="/site.webmanifest" />
</svelte:head>

<nav class="nav">
  <div class="container row" style="height:64px">
    <a href="/" class="row" aria-label="Home">
      <img src="/favicon.svg" alt="" width="28" height="28" />
      <strong style="margin-left:8px">Seyfullah</strong>
    </a>
    <div class="spacer" />
    <a class="btn" href="/resume">CV</a>
    <a class="btn" href="/contact">Contact</a>
    <button class="btn" on:click={toggleTheme} aria-label="Toggle theme">Thema</button>
  </div>
</nav>

<slot />

<footer class="footer container">
  © {new Date().getFullYear()} Seyfullah Isa Güler · Built with SvelteKit
</footer>
