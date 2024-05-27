<script>
  import { enhance } from "$app/forms";
  import { onMount } from 'svelte';

  let isSubmitting = false;
  let successMessage = "";
  let errorMessage = "";
  let errors = {
    name: "",
    email: "",
    phone: "",
    message: ""
  };
  let validity = {
    name: false,
    email: false,
    phone: false,
    message: false
  };

  function handleEnhance({ formElement }) {
    const handleSubmit = async ({ result }) => {
      isSubmitting = false;
      successMessage = "";
      errorMessage = "";

      if (result.type === "failure") {
        errorMessage = result.data.error;
      } else if (result.type === "success") {
        formElement.reset();
        successMessage = result.data.message;
        validity = { name: false, email: false, phone: false, message: false };
      }
    };
    return handleSubmit;
  }

  function validateField(name, value) {
    switch (name) {
      case 'name':
        if (!value) return "Name is required";
        return "";
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) return "Email is required";
        if (!emailRegex.test(value)) return "Invalid email format";
        return "";
      case 'phone':
        const phoneRegex = /^\d{10,15}$/;
        if (!value) return "Phone is required";
        if (!phoneRegex.test(value)) return "Invalid phone number";
        return "";
      case 'message':
        if (!value) return "Message is required";
        return "";
      default:
        return "";
    }
  }

  function handleInput(event) {
    const { name, value } = event.target;
    const error = validateField(name, value);
    errors[name] = error;
    validity[name] = !error;
  }

  onMount(() => {
    const form = document.querySelector('form');
    form.addEventListener('input', handleInput);
  });
</script>

<section class="form-container">
  <form
    method="POST"
    use:enhance={handleEnhance}
    on:submit={() => (isSubmitting = true)}
    class="contact-form"
  >
    <fieldset class="form-wrapper">
      <legend class="form-legend">Personal Information</legend>
      <label for="name" class="form-label"><span>Name</span></label>
      <input
        type="text"
        name="name"
        id="name"
        required
        placeholder="e.g John Doe"
        class="input-field {errors.name ? 'input-error' : validity.name ? 'input-success' : ''}"
      />
      {#if errors.name}
        <p class="error-message">{errors.name}</p>
      {/if}

      <label for="email" class="form-label"><span>Email</span></label>
      <input
        type="email"
        name="email"
        id="email"
        required
        placeholder="e.g johndoe@mail.com"
        class="input-field {errors.email ? 'input-error' : validity.email ? 'input-success' : ''}"
      />
      {#if errors.email}
        <p class="error-message">{errors.email}</p>
      {/if}

      <label for="phone" class="form-label"><span>Phone</span></label>
      <input
        type="tel"
        name="phone"
        id="phone"
        required
        placeholder="Mobile number"
        class="input-field {errors.phone ? 'input-error' : validity.phone ? 'input-success' : ''}"
      />
      {#if errors.phone}
        <p class="error-message">{errors.phone}</p>
      {/if}
    </fieldset>

    <fieldset class="form-wrapper">
      <label for="message" class="form-label"><span>Message</span></label>
      <textarea
        name="message"
        id="message"
        required
        placeholder="Tell me your message..."
        class="input-field textarea-field {errors.message ? 'input-error' : validity.message ? 'input-success' : ''}"
      ></textarea>
      {#if errors.message}
        <p class="error-message">{errors.message}</p>
      {/if}
    </fieldset>

    {#if successMessage}
      <p class="success-message">{successMessage}</p>
    {/if}

    {#if errorMessage}
      <p class="error-message">{errorMessage}</p>
    {/if}

    <button type="submit" class="btn btn-primary" disabled={isSubmitting}>
      {#if isSubmitting}
        Sending...
      {:else}
        Send
      {/if}
    </button>
  </form>
</section>

<style>
  /* Section Styling */
  .form-container {
    width: 100%;
    max-width: 500px;
    margin: 40px auto;
    padding: 20px;
    background: #f8f9fa;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }

  /* Form Styling */
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  /* Wrapper for Form Elements */
  .form-wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  /* Legends */
  .form-legend {
    font-weight: bold;
    font-size: 18px;
    color: #495057;
  }

  /* Labels */
  .form-label {
    font-weight: bold;
    font-size: 15px;
    color: #495057;
    margin-bottom: 5px;
  }

  /* Input and Textarea Styling */
  .input-field, .textarea-field {
    width: 100%;
    padding: 10px 14px;
    font-size: 15px;
    border: 1px solid #ced4da;
    border-radius: 5px;
    transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }

  .input-field:focus, .textarea-field:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
  }

  .textarea-field {
    min-height: 100px;
  }

  .input-error {
    border-color: #dc3545;
  }

  .input-success {
    border-color: #28a745;
  }

  /* Button Styling */
  .btn {
    padding: 12px 16px;
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }

  .btn-primary {
    background-color: #007bff;
    color: #fff;
  }

  .btn-primary:hover {
    background-color: #0056b3;
    box-shadow: 0 4px 8px rgba(0, 91, 187, 0.2);
  }

  .btn-primary:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }

  /* Success and Error Messages */
  .success-message,
  .error-message {
    font-size: 15px;
    font-weight: bold;
    padding: 12px;
    border-radius: 5px;
    margin-top: 10px;
  }

  .success-message {
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
  }

  .error-message {
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
  }
</style>
