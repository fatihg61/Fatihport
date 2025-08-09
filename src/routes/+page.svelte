
<script>
  import { projects } from '$lib/data/projects';
  import { skills } from '$lib/data/skills';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
</script>

<section class="section">
  <div class="container hero grid grid-2" style="align-items:center">
    <div>
      <p class="muted" style="text-transform:uppercase;letter-spacing:.18em;font-size:12px">Microsoft 365 Engineer & Front‑end Developer</p>
      <h1>Hi, ik ben Fatih — ik bouw snelle, veilige en gebruiksvriendelijke webapps.</h1>
      <p class="lead">Gespecialiseerd in SvelteKit/React en het optimaliseren van Microsoft 365 omgevingen. Focus op performance, UX en security‑best practices.</p>
      <div style="margin-top:18px; display:flex; gap:10px">
        <a class="btn primary" href="/projects">Bekijk projecten</a>
        <a class="btn" href="/contact">Contact</a>
      </div>
    </div>
    <div class="card">
      <div class="grid" style="grid-template-columns:repeat(2,minmax(0,1fr));gap:12px">
        {#each skills.core as s}<div class="badge" style="padding:12px 14px">{s}</div>{/each}
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <h2 style="font-size:28px;margin:0 0 16px">Uitgelichte projecten</h2>
    <div class="grid grid-2">
      {#each projects as p}<ProjectCard {project}={p} />{/each}
    </div>
  </div>
</section>
