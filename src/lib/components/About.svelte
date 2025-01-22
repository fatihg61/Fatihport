<script lang="ts">
    import { onMount } from "svelte";
  
    let typingText = "Hello, I'm Fatih";
    let displayedText = "";
    let index = 0;
    let typingInterval: ReturnType<typeof setInterval>;
  
    onMount(() => {
      typingInterval = setInterval(() => {
        if (index < typingText.length) {
          displayedText += typingText.charAt(index);
          index++;
        } else {
          clearInterval(typingInterval);
        }
      }, 100); // Adjust the typing speed here
  
      return () => clearInterval(typingInterval);
    });
  </script>
  
  <section class="hero">
    <div class="container">
      <div class="text-content">
        <h1 class="hero-title" aria-label={typingText}>{displayedText}</h1>
        <p class="hero-desc">
          I'm a young front-end developer based in North Holland,
          Netherlands. Passionate about creating beautiful and user-friendly web
          experiences.
        </p>
      </div>
      <div class="img-cover">
        <img src="/favicon.png" alt="Fatih G"/>
      </div>
    </div>
  </section>
  
  <style>
    :root {
      --container-max-width: 1200px;
      --primary-color: #007bff;
      --text-color: var(--text-color);
      --box-shadow-color: rgba(0, 0, 0, 0.1);
    }
  
    section.hero {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 4rem 1rem;
    }
  
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: var(--container-max-width);
      width: 100%;
      margin: 0 auto;
    }
  
    .text-content {
      flex: 1;
      padding-right: 2rem;
      max-width: 600px;
    }
  
    .hero-title {
      font-size: 2.5rem;
      margin: 0 0 1rem;
      color: var(--primary-color);
      white-space: nowrap;
      overflow: hidden;
      width: fit-content;
    }
  
    .hero-desc {
      font-size: 1.125rem;
      line-height: 1.6;
      color: var(--text-color);
      margin-top: 1rem;
    }
  
    .img-cover {
      height: 250px;
      width: 250px;
      border-radius: 50%;
      overflow: hidden;
      margin-left: 2rem;
      box-shadow: 0 4px 8px var(--box-shadow-color);
    }
  
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  
    @media (max-width: 720px) {
      section.hero {
        flex-direction: column;
        padding: 2rem 1rem;
      }
  
      .container {
        flex-direction: column;
        text-align: center;
        justify-content: center;
        align-items: center;
      }
  
      .text-content {
        padding-right: 0;
        max-width: 100%;
        text-align: center;
      }
  
      .hero-title {
        font-size: 2rem;
      }
  
      .hero-desc {
        font-size: 1rem;
        margin-top: 0.5rem;
      }
  
      .img-cover {
        margin-top: 1.5rem;
        margin-left: 0; /* Reset left margin on mobile */
      }
    }
  </style>
  