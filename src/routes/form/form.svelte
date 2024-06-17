<script>
  import { enhance } from "$app/forms";
  import { onMount } from "svelte";

  let isSubmitting = false;
  let successMessage = "";
  let errorMessage = "";
  let errors = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  let validity = {
    name: false,
    email: false,
    phone: false,
    message: false,
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
      case "name":
        if (!value) return "Name is required";
        return "";
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) return "Email is required";
        if (!emailRegex.test(value)) return "Invalid email format";
        return "";
      case "phone":
        const phoneRegex = /^\d{10,15}$/;
        if (!value) return "Phone is required";
        if (!phoneRegex.test(value)) return "Invalid phone number";
        return "";
      case "message":
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
    const form = document.querySelector("form");
    form.addEventListener("input", handleInput);
  });
</script>

<button id="styled-popover-button" popovertarget="my-popover"
  >Open Popover</button
>

<section id="my-popover" popover>
  <section class="form-container">
    <form
      method="POST"
      use:enhance={handleEnhance}
      on:submit={() => (isSubmitting = true)}
      class="contact-form"
    >
      <fieldset class="form-wrapper">
        <legend class="form-legend">Personal Information</legend>
        <label for="name" class="form-label">
          <span>Name</span>
          <div class="input-wrapper">
            <i class="icon user-icon"></i>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="e.g John Doe"
              class="input-field {errors.name
                ? 'input-error'
                : validity.name
                  ? 'input-success'
                  : ''}"
            />
          </div>
        </label>
        {#if errors.name}
          <p class="error-message">{errors.name}</p>
        {/if}

        <label for="email" class="form-label">
          <span>Email</span>
          <div class="input-wrapper">
            <i class="icon email-icon"></i>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="e.g johndoe@mail.com"
              class="input-field {errors.email
                ? 'input-error'
                : validity.email
                  ? 'input-success'
                  : ''}"
            />
          </div>
        </label>
        {#if errors.email}
          <p class="error-message">{errors.email}</p>
        {/if}

        <label for="phone" class="form-label">
          <span>Phone</span>
          <div class="input-wrapper">
            <i class="icon phone-icon"></i>
            <input
              type="tel"
              name="phone"
              id="phone"
              required
              placeholder="Mobile number"
              class="input-field {errors.phone
                ? 'input-error'
                : validity.phone
                  ? 'input-success'
                  : ''}"
            />
          </div>
        </label>
        {#if errors.phone}
          <p class="error-message">{errors.phone}</p>
        {/if}
      </fieldset>

      <fieldset class="form-wrapper">
        <label for="message" class="form-label">
          <span>Message</span>
          <textarea
            name="message"
            id="message"
            required
            placeholder="Tell me your message..."
            class="input-field textarea-field {errors.message
              ? 'input-error'
              : validity.message
                ? 'input-success'
                : ''}"
          ></textarea>
        </label>
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
</section>

<style>
  #styled-popover-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-size: 16px;
  }

  #styled-popover-button:hover {
    background-color: #0056b3;
  }

  #styled-popover-button:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }

  #my-popover {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 43%;
  }

  /* Section Styling */
  .form-container {
    width: 100%;
    max-width: 600px;
    padding: 30px;
    background: #fff;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    border: 1px solid #e0e0e0;
  }

  /* Form Styling */
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  /* Wrapper for Form Elements */
  .form-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  /* Legends */
  .form-legend {
    font-weight: bold;
    font-size: 22px;
    color: #343a40;
    margin-bottom: 15px;
  }

  /* Labels */
  .form-label {
    font-weight: bold;
    font-size: 16px;
    color: #495057;
    margin-bottom: 8px;
  }

  .form-label span {
    display: block;
    margin-bottom: 5px;
  }

  /* Input Wrapper for Icons */
  .input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }

  .icon {
    position: absolute;
    left: 10px;
    color: #6c757d;
    font-size: 18px;
  }

  .user-icon::before {
    content: "👤";
  }
  .email-icon::before {
    content: "📧";
  }
  .phone-icon::before {
    content: "📞";
  }

  /* Input and Textarea Styling */
  .input-field,
  .textarea-field {
    width: 100%;
    padding: 12px 15px 12px 40px;
    font-size: 16px;
    border: 1px solid #ced4da;
    border-radius: 5px;
    transition:
      border-color 0.3s ease-in-out,
      box-shadow 0.3s ease-in-out;
  }

  .input-field:focus,
  .textarea-field:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }

  .textarea-field {
    min-height: 150px;
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
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition:
      background-color 0.3s ease-in-out,
      box-shadow 0.3s ease-in-out,
      transform 0.2s;
  }

  .btn-primary {
    background-color: #007bff;
    color: #fff;
  }

  .btn-primary:hover {
    background-color: #0056b3;
    box-shadow: 0 4px 8px rgba(0, 91, 187, 0.2);
    transform: translateY(-2px);
  }

  .btn-primary:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }

  /* Success and Error Messages */
  .success-message,
  .error-message {
    font-size: 16px;
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
