
<script> import { timeline } from '$lib/data/timeline'; </script>
<section class="section"><div class="container grid">
  <h1 style="font-size:28px;margin:0 0 16px">Resume</h1>
  {#each timeline as item}
    <article class="card">
      <header style="display:flex;gap:12px;flex-wrap:wrap;justify-content:space-between;align-items:baseline">
        <h3 style="margin:0;font-size:20px">{item.role}</h3>
        <span class="muted" style="font-size:12px">{item.dates}</span>
      </header>
      <p class="muted" style="margin:4px 0 0">{item.org}</p>
      <ul class="list" style="margin-top:10px">{#each item.bullets as b}<li>{b}</li>{/each}</ul>
    </article>
  {/each}
</div></section>
