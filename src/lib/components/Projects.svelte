<script>
</script>

<section class="skills-section">
  <h2 class="skills-title">My Skills</h2>
  <ul class="skills-list">
    <li class="skill-item">
      <div class="skill-icon">💻</div>
      <div class="skill-name">Web Development</div>
      <div class="skill-description">
        Proficient in HTML, CSS, JavaScript, and modern frameworks like
        SvelteKit and React.
      </div>
    </li>
    <li class="skill-item">
      <div class="skill-icon">👨‍💻</div>
      <div class="skill-name">System Enginering</div>
      <div class="skill-description">
        Expertise in designing, integrating, and managing complex systems over
        their life cycles, ensuring they meet user requirements.
      </div>
    </li>
    <li class="skill-item">
      <div class="skill-icon">⚙️</div>
      <div class="skill-name">Backend Development</div>
      <div class="skill-description">
        Familiar with Node.js, Express, and database management SQL.
      </div>
    </li>
    <li class="skill-item">
      <div class="skill-icon">🎨</div>
      <div class="skill-name">UI/UX Design</div>
      <div class="skill-description">
        Passionate about creating intuitive and beautiful user interfaces with
        Figma and ProCreate.
      </div>
    </li>
    <li class="skill-item">
      <div class="skill-icon">🔍</div>
      <div class="skill-name">CS</div>
      <div class="skill-description">
        Knowledgeable in cyber security features for you webapp.
      </div>
    </li>
  </ul>
</section>

<style>
  .skills-section {
    padding: 0rem 1rem;
    text-align: center;
    margin: 0 auto;
  }

  .skills-title {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: var(--primary-color);
  }

  .skills-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    list-style: none;
    padding: 0;
  }

  .skill-item {
    background: var(--background-color);
    padding: 0.5rem;
    border-radius: 0.5rem;
    box-shadow: var(--box-shadow);
    transition: transform 0.2s;
  }

  .skill-item:hover {
    transform: translateY(-10px);
  }

  .skill-icon {
    font-size: 3rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
  }

  .skill-name {
    font-size: 1.25rem;
    font-weight: bold;
    color: var(--text-color);
  }

  .skill-description {
    font-size: 1rem;
    color: var(--text-color);
  }

  @media (max-width: 768px) {
    .skills-list {
      grid-template-columns: 1fr;
    }
  }
</style>
