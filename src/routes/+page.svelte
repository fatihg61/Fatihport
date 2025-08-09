<script >
  import { profile } from '$lib/data/profile.js';
</script>

<section class="container hero" aria-labelledby="intro">
  <div>
    <h1 id="intro" class="headline">Hey, ik ben {profile.name}.</h1>
    <p class="sub">
      {profile.taglines.join(' · ')} — {profile.location}
    </p>
    <p style="margin-top:12px;max-width:60ch">{profile.summary}</p>

    <div class="row" style="margin-top:16px;gap:10px;flex-wrap:wrap">
      {#each profile.socials as s}
        <a class="btn" href={s.url} rel="noreferrer" target="_blank">{s.label}</a>
      {/each}
      <a class="btn" href="/contact">Contact</a>
    </div>

    <div style="margin-top:16px;display:flex;gap:8px;flex-wrap:wrap">
      {#each profile.taglines as t}<span class="chip">{t}</span>{/each}
    </div>
  </div>


</section>

<section class="container" aria-labelledby="skills" style="padding:32px 0">
  <h2 id="skills">Vaardigheden</h2>
  <div class="auto-grid" style="margin-top:12px">
    <div class="card"><strong>Front‑end</strong><br/>{profile.skills.frontend.join(' • ')}</div>
    <div class="card"><strong>Cloud</strong><br/>{profile.skills.cloud.join(' • ')}</div>
    <div class="card"><strong>Tooling</strong><br/>{profile.skills.tooling.join(' • ')}</div>
  </div>
</section>

<section class="container" aria-labelledby="projects" style="padding:32px 0">
  <h2 id="projects">Projecten</h2>
  <div class="auto-grid" style="margin-top:12px">
    {#each profile.projects as p}
      <article class="card">
        <header class="row" style="justify-content:space-between">
          <h3 style="margin:0">{p.title}</h3>
          <div class="row" style="gap:8px;flex-wrap:wrap">
            {#each p.badges as b}<span class="chip">{b}</span>{/each}
          </div>
        </header>
        <p style="margin:.5rem 0 1rem">{p.desc}</p>
        <div class="row" style="gap:8px;flex-wrap:wrap">
          {#each p.links as l}<a class="btn" href={l.url} target="_blank" rel="noreferrer">{l.label}</a>{/each}
        </div>
      </article>
    {/each}
  </div>
</section>
