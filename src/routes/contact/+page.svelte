<script >
  import { onMount } from 'svelte';
  let name = '';
  let email = '';
  let message = '';
  let sent = false;
  onMount(() => {
    const q = new URLSearchParams(location.search);
    if(q.get('ok')) sent = true;
  });
</script>

<section class="container" aria-labelledby="contact">
  <h1 id="contact" class="headline">Contact</h1>
  <p class="sub">Laten we samenwerken. Ik reageer meestal dezelfde dag.</p>

  {#if sent}
    <div class="card" role="status">Bedankt! Je bericht is verzonden.</div>
  {/if}

  <form class="card" style="margin-top:16px;display:grid;gap:12px" method="POST" action="https://formspree.io/f/mwkzzdyo">
    <label>Naam
      <input name="name" bind:value={name} required aria-required="true" />
    </label>
    <label>E‑mail
      <input name="email" type="email" bind:value={email} required aria-required="true" />
    </label>
    <label>Bericht
      <textarea name="message" rows="6" bind:value={message} required aria-required="true"></textarea>
    </label>
    <button class="btn" type="submit">Verstuur</button>
    <p style="color:var(--muted);margin:0;font-size:13px">Of mail direct: <a href="mailto:seyfullah@example.com">seyfullah@example.com</a></p>
  </form>
</section>

<style>
  input, textarea{
    width:100%; padding:12px 14px; border-radius:12px;
    border:1px solid rgba(255,255,255,.14); background: rgba(255,255,255,.04);
    color:inherit; outline: none;
  }
  input:focus, textarea:focus{ box-shadow: 0 0 0 4px var(--ring); }
  label{display:grid;gap:6px}
</style>
