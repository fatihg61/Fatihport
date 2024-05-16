
<main>
  <section class="hero">
    <div class="container">
      <div class="img--cover">
        <img src=".\FG.png" alt="" />
      </div>
      <h1 class="hero--title">Hello, I'm Fatih</h1>
      <p class="hero--desc">
        I'm a 25-year-old front-end student based in Amsterdam, North Holland,
        Netherlands. I am passionate about creating beautiful and user-friendly
        web experiences.
      </p>
    </div>
  </section>

  

</main>

<style>
  .container {
    max-width: 1100px;
    margin: auto;
    padding: 0 1rem;
  }

  h1,
  p {
    color: var(--text-color);
  }

  section {
    padding: 2rem 0;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* hero */

  .hero .img--cover {
    height: 150px;
    width: 150px;
    position: relative;
    border-radius: 50%;
    overflow: hidden;
    margin: auto;
  }

  .hero--title {
    text-align: center;
    margin-top: 1rem;
    font-size: 3rem;
  }

  .hero--desc {
    text-align: center;
    max-width: 700px;
    margin: auto;
    margin-top: 1rem;
  }
  /* responsive */
  @media (max-width: 720px) {
    .hero--title {
      font-size: 2rem;
    }
  }
</style>
