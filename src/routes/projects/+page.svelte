
<script>
  import { projects } from '$lib/data/projects';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
</script>
<section class="section"><div class="container">
  <h1 style="font-size:28px;margin:0 0 16px">Alle projecten</h1>
  <div class="grid grid-2">{#each projects as p}<ProjectCard {project}={p} />{/each}</div>
</div></section>
