<script lang="ts">
    // Skills data to easily manage and extend later
    const skills = [
      { name: 'SvelteKit', icon: 'fa-brands fa-svelte' },
      { name: 'React.js', icon: 'fa-brands fa-react' },
      { name: 'GitHub', icon: 'fa-brands fa-github' },
      { name: 'Vercel', icon: 'fa-brands fa-vuejs' },
      { name: 'System Administration', icon: 'fa-solid fa-server' },
    ];
  </script>
  
  <section class="skills">
    <div class="container">
      <h2 class="section-title">My Toys</h2>
      <div class="skills-grid">
        {#each skills as skill}
          <div class="skill">
            <i class={skill.icon}></i>
            <h3>{skill.name}</h3>
          </div>
        {/each}
      </div>
    </div>
  </section>
  
  <style>
    :root {
      --primary-color: #007bff;
      --text-color: var(--text-color);
      --icon-size: 3rem;
      --hover-color: #0077B5;
      --background-color: #f8f9fa;
      --box-shadow-color: rgba(0, 0, 0, 0.1);
      --transition-speed: 0.3s;
    }
  
    section.skills {
      padding: 2rem 1rem;
    }
  
    .container {
      max-width: 1200px;
      margin: 0 auto;
      text-align: center;
    }
  
    .section-title {
      font-size: 3rem;
      color: var(--primary-color);
      margin-bottom: 3rem;
      font-weight: 600;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
  
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 2rem;
      justify-items: center;
    }
  
    .skill {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      border-radius: 12px;
      transition: transform var(--transition-speed), box-shadow var(--transition-speed);
      cursor: pointer;
      text-align: center;
      width: 100%;
      height: 100%;
    }
  
    .skill:hover {
      transform: translateY(-10px);
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15);
      background-color: var(--hover-color);
      color: white;
    }
  
    .skill i {
      font-size: var(--icon-size);
      color: var(--primary-color);
      margin-bottom: 1rem;
      transition: color var(--transition-speed);
    }
  
    .skill h3 {
      font-size: 1.2rem;
      color: var(--text-color);
      font-weight: 500;
      transition: color var(--transition-speed);
    }
  
    .skill:hover i {
      color: white;
    }
  
    .skill:hover h3 {
      color: white;
    }
  
    @media (max-width: 720px) {
      .section-title {
        font-size: 2.5rem;
      }
  
      .skill i {
        font-size: 2.5rem;
      }
    }
  </style>
  