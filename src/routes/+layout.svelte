<script lang="ts">
    import { onMount } from 'svelte';
    import Header from '$lib/components/Header.svelte';
    import About from '$lib/components/About.svelte';
    import Skills from '$lib/components/Skills.svelte';
    import Footer from '$lib/components/Footer.svelte';
  
    let darkMode: boolean = false;
  
    // Set the theme preference when the page loads
    onMount(() => {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme === 'dark') {
        darkMode = true;
        document.body.setAttribute('data-theme', 'dark');
      } else {
        darkMode = false;
        document.body.setAttribute('data-theme', 'light');
      }
    });
  
    // Function to toggle the theme
    function toggleTheme(): void {
      darkMode = !darkMode;
      localStorage.setItem('theme', darkMode ? 'dark' : 'light');
      document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    }
  </script>
  
  <Header {toggleTheme} {darkMode} />
  <main>
    <About />
    <Skills />
  </main>
  <Footer />
  