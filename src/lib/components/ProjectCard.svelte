
<script> export let project; </script>
<article class="card">
  <header style="display:flex;justify-content:space-between;gap:16px;align-items:flex-start">
    <h3 style="font-size:20px;margin:0">{project.title}</h3>
    <span class="muted" style="font-size:12px">{project.period}</span>
  </header>
  <p style="margin:12px 0 0" class="muted">{project.summary}</p>
  <div class="token-list" style="margin-top:12px">
    {#each project.stack as s}<span class="badge">{s}</span>{/each}
  </div>
  {#if project.links?.length}
    <div style="margin-top:14px;display:flex;gap:10px;flex-wrap:wrap">
      {#each project.links as l}<a class="btn" href={l.href} target="_blank" rel="noreferrer">{l.label} ↗</a>{/each}
    </div>
  {/if}
</article>
