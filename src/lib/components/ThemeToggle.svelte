
<script>
  import { onMount } from 'svelte';
  let dark = false;
  onMount(() => {
    const saved = localStorage.getItem('theme');
    if (saved) dark = saved === 'dark';
    else dark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', dark);
  });
  function toggle(){
    dark = !dark;
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }
</script>
<button class="btn" on:click={toggle} aria-label="Toggle theme">{#if dark}🌙{:else}☀️{/if}</button>
