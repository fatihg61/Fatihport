<script>
  import { onMount } from "svelte";

  let typingText = "Hello, I'm Fatih";
  let displayedText = "";
  let index = 0;
  let typingInterval;

  onMount(() => {
    typingInterval = setInterval(() => {
      if (index < typingText.length) {
        displayedText += typingText.charAt(index);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    // Cleanup interval on component unmount
    return () => clearInterval(typingInterval);
  });
</script>

<section class="hero">
  <div class="container">
    <div class="text-content">
      <h1 class="hero-title" aria-label={typingText}>{displayedText}</h1>
      <p class="hero-desc">
        I'm a 25-year-old front-end developer based in Amsterdam, North Holland,
        Netherlands. Passionate about creating beautiful and user-friendly web
        experiences.
      </p>
    </div>
    <div class="img-cover">
      <img src="/FG.png" alt="Fatih Güler's Profile Picture" />
    </div>
  </div>
</section>

<style>
  :root {
    --container-max-width: 1200px;
    --primary-color: #007bff;
  }

  section.hero {
    padding: 1rem 0;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--container-max-width);
    margin: 0 auto;
    padding: 0 1rem;
  }

  .text-content {
    flex: 1;
    padding-right: 2rem;
  }

  .hero-title {
    font-size: 2.5rem;
    margin: 0 0 1rem;
    color: var(--primary-color);
  }

  .hero-desc {
    max-width: 700px;
    font-size: 1.125rem;
    line-height: 1.6;
    color: var(--text-color);
  }

  .img-cover {
    height: 250px;
    width: 250px;
    border-radius: 50%;
    overflow: hidden;
    margin-top: -20%;
    box-shadow: 0 4px 8px var(--box-shadow-color);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 720px) {
    .container {
      flex-direction: column;
      text-align: center;
      padding: 0;
    }

    .text-content {
      padding-right: 0;
    }

    .hero-title {
      font-size: 2rem;
    }

    .hero-desc {
      font-size: 1rem;
    }

    .img-cover {
      margin-top: 1.5rem;
    }
  }
</style>
