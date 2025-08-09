<script >
  import '../lib/styles/app.css';
  import { onMount } from 'svelte';
  export let data;
  
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
  <div class="container row" style="min-height:56px">
    <a href="/" class="row" aria-label="Home">
      <img src="/favicon.svg" alt="" width="28" height="28" />
      <strong style="margin-left:8px">Fatih</strong>
    </a>
    <div class="spacer" />
    <a class="btn" href="/resume">CV</a>
    <a class="btn" href="/contact">Contact</a>
  </div>
</nav>

<slot />

<footer class="footer container">
  © {new Date().getFullYear()} Fatih G · Built with SvelteKit
</footer>
