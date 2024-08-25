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

<button id="styled-popover-button" popovertarget="my-popover">Open Popover</button>

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

        <!-- Name Field -->
        <div class="input-group">
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder=" "
            class="input-group__input"
          />
          <label for="name" class="input-group__label">Name</label>
          <span class="input-group__error">Please enter a valid name.</span>
        </div>

        <!-- Email Field -->
        <div class="input-group">
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder=" "
            class="input-group__input"
          />
          <label for="email" class="input-group__label">Email</label>
          <span class="input-group__error">Please enter a valid email.</span>
        </div>

        <!-- Phone Field -->
        <div class="input-group">
          <input
            type="tel"
            name="phone"
            id="phone"
            required
            placeholder=" "
            class="input-group__input"
          />
          <label for="phone" class="input-group__label">Phone</label>
          <span class="input-group__error">Please enter a valid phone number.</span>
        </div>
      </fieldset>

      <!-- Message Field -->
      <fieldset class="form-wrapper">
        <div class="input-group">
          <textarea
            name="message"
            id="message"
            required
            placeholder=" "
            class="input-group__input textarea-field"
          ></textarea>
          <label for="message" class="input-group__label">Message</label>
          <span class="input-group__error">Please enter a valid message.</span>
        </div>
      </fieldset>

      <!-- Submit Button and Messages -->
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
/* Button Styling */
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

/* Popover Styling */
#my-popover {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
}

/* Form Container Styling */
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
  gap: 38px;
}

/* Legends */
.form-legend {
  font-weight: bold;
  font-size: 22px;
  color: #343a40;
  margin-bottom: 21px;
}

/* Input Group Styling */
.input-group {
  position: relative;
  margin-bottom: 15px;
}

.input-group__label {
  position: absolute;
  left: 10px;
  top: 6px;
  background-color: white;
  padding: 0 6px;
  margin: 0;
  font-size: .75rem;
  color: #495057;
  transition: top 300ms, font-size 300ms, color 300ms;
  cursor: text;
}

.input-group__input {
  width: 100%;
  padding: 12px 15px;
  padding-left: 10px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s ease-in-out, padding 300ms ease-in-out;
}

.input-group__input:focus {
  outline: none;
  border-color: #007bff;
}

.input-group__input:focus ~ .input-group__label,
.input-group__input:not(:placeholder-shown) ~ .input-group__label {
  top: -24px;
  font-size: 0.85rem;
  color: #007bff;
}

.input-group__input:valid:not(:focus) {
  border-color: #28a745;
  padding: 12px 15px;
}

.input-group__input:valid:not(:focus) ~ .input-group__label {
  color: #28a745;
  top: -28px; /* Reducing gap for valid input */
  font-size: 0.85rem;
  transition: top 300ms ease-in-out, color 300ms ease-in-out;
}

.input-group__input:invalid:not(:focus) {
  border-color: #dc3545;
}

.input-group__input:invalid:not(:focus) ~ .input-group__label {
  color: #dc3545;
}

.input-group__input:invalid:not(:focus) ~ .input-group__error {
  visibility: visible;
}

.input-group__error {
  color: #dc3545;
  font-size: 0.8rem;
  margin-top: 54px;
  visibility: hidden;
  position: absolute;
  left: 10px;
}

/* Textarea Specific Styling */
.textarea-field {
  min-height: 150px;
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
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out, transform 0.2s;
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

