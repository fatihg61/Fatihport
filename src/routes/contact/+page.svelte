
<script>
  let name=''; let email=''; let message=''; let status='';
  async function submit(e){
    e.preventDefault(); status='Bezig…';
    const res = await fetch('/api/contact', { method:'POST', headers:{'content-type':'application/json'}, body: JSON.stringify({ name, email, message }) });
    status = res.ok ? 'Bedankt! Ik reageer snel.' : 'Er ging iets mis. Mail me direct: fguler.ict@gmail.com';
    if (res.ok) { name=''; email=''; message=''; }
  }
</script>
<section class="section"><div class="container">
  <h1 style="font-size:28px;margin:0 0 16px">Contact</h1>
  <form class="card" on:submit|preventDefault={submit} style="display:grid;gap:12px;max-width:520px">
    <label>Naam<br><input class="input" bind:value={name} required></label>
    <label>E‑mail<br><input type="email" class="input" bind:value={email} required></label>
    <label>Bericht<br><textarea rows="6" class="input" bind:value={message} required></textarea></label>
    <div style="display:flex;align-items:center;gap:10px">
      <button class="btn primary" type="submit">Verstuur</button>
      <p class="muted" style="margin:0">{status}</p>
    </div>
  </form>
</div></section>
