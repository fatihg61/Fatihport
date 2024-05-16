<script>
  import { enhance, applyAction } from "$app/forms";
  import { fail } from "@sveltejs/kit";
  export const prerender = false;

  export const actions = {
      default: async ({ request, url }) => {
        const data = await request.formData();

        const name = data.get("name");
        const email = data.get("email");
        const message = data.get("message");

        if (name.length < 2)
          return fail(400, {
            error: true,
            message: "Naam moet minstens 2 karaters bevatten",
            name,
            email,
            challenge,
          });

   console.log (name,email,message)

        return { success: true, name, email, message };
      },
    };

  export let form;

  console.log(form);

  let loading = false;

  function handleForm({ formElement }) {
    loading = true;

    return async ({ result, update }) => {
      await setTimeout(() => {
        loading = false;

        console.log(result);
        update();
      }, 1000);
    };
  }
</script>

<form action="/" method="POST" class="simple-text" id="message" use:enhance={handleForm}>

    <h2 class="large-heading">Let's get in contact</h2>

    {#if loading}
        <div class="loader-wrapper">
            <div class="loader"></div>
        </div>
    {/if}

    {#if form?.success}
        <p class="message success">Your message is has been sent!</p>
    {/if}

    {#if form?.error}
        <p class="message fail">{form.message}</p>
    {/if}

    <fieldset>
        <legend>Info</legend>
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" minlength="2" required value={form?.name ?? ""} placeholder="Voornaam Achternaam" />
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required value={form?.email ?? ""} placeholder="email@example.com" />
        </div>
    </fieldset>

    <fieldset>
        <legend>Message</legend>
        <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="6" required value={form?.message ?? ""}></textarea>
        </div>
    </fieldset>

    <button type="submit">Send</button>
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 400px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #e0e0e0;
        border-radius: 5px;
        background-color: #f9f9f9;
    }

    h2 {
        margin-bottom: 20px;
        font-size: 1.5em;
        font-weight: bold;
        color: #333;
    }

    .loader-wrapper {
        text-align: center;
        margin-bottom: 20px;
    }

    .loader {
        border: 5px solid #f3f3f3;
        border-top: 5px solid #3498db;
        border-radius: 50%;
        width: 24px;
        height: 24px;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    .message {
        padding: 10px;
        border-radius: 5px;
        margin-top: 15px;
        font-size: 0.9em;
    }

    .success {
        background-color: #d4edda;
        color: #155724;
    }

    .fail {
        background-color: #f8d7da;
        color: #721c24;
    }

    .form-group {
        margin-bottom: 15px;
    }

    label {
        display: block;
        font-weight: bold;
        color: #333;
        margin-bottom: 5px;
    }

    input,
    textarea {
        width: 100%;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 3px;
        margin-top: 5px;
    }

    button {
        margin-top: 20px;
        padding: 10px 20px;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1em;
    }
</style>