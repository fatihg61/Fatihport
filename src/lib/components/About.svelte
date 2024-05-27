<script>
  import { onMount } from 'svelte';
  let typingText = "Hello, I'm Fatih";
  let displayedText = "";
  let index = 0;

  onMount(() => {
    typeWriter();
  });

  function typeWriter() {
    if (index < typingText.length) {
      displayedText += typingText.charAt(index);
      index++;
      setTimeout(typeWriter, 100);
    }
  }
</script>

<section class="hero">
  <div class="container">
    <div class="text-content">
      <h1 class="hero-title">{displayedText}</h1>
      <p class="hero-desc">
        I'm a 25-year-old front-end developer based in Amsterdam, North Holland, Netherlands. I am passionate about creating beautiful and user-friendly web experiences.
      </p>
    </div>
    <div class="img-cover">
      <img src="/FG.png" alt="Profile Picture" />
    </div>
  </div>
</section>

<style>
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--container-max-width);
    margin: 0 auto;
    padding: 0 1rem;
  }

  h1, p {
    color: var(--text-color);
  }

  section {
    padding: 3rem 0;
    background-color: var(--background-color);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .hero .img-cover {
    height: 250px;
    width: 250px;
    border-radius: 50%;
    overflow: hidden;
    margin-top: -20%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .text-content {
    flex: 1;
  }

  .hero-title {
    font-size: 2.5rem;
    color: var(--primary-color);
  }

  .hero-desc {
    max-width: 700px;
    font-size: 1.125rem;
    line-height: 1.6;
    color: var(--text-color);
  }

  @media (max-width: 720px) {
    .container {
      flex-direction: column;
      text-align: center;
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
