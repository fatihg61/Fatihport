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
              class="input-field"
            />
            <p class="error-message" id="name-error">Name is required</p>
          </div>
        </label>

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
              class="input-field"
            />
            <p class="error-message" id="email-error">Please enter a valid email</p>
          </div>
        </label>

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
              class="input-field"
            />
            <p class="error-message" id="phone-error">Invalid phone number</p>
          </div>
        </label>
      </fieldset>

      <fieldset class="form-wrapper">
        <label for="message" class="form-label">
          <span>Message</span>
          <textarea
            name="message"
            id="message"
            required
            placeholder="Tell me your message..."
            class="input-field textarea-field"
          ></textarea>
          <p class="error-message" id="message-error">Message is required</p>
        </label>
      </fieldset>

      <button type="submit" class="btn btn-primary">
        Send
      </button>
    </form>
  </section>
</section>

<style>
#styled-popover-button {
  position: fixed;
  bottom: 20px;
  left: 20px;
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 14px;
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
  width: 90%;
  max-width: 400px;
}

.form-container {
  width: 100%;
  padding: 20px;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  border: 1px solid #e0e0e0;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form-legend {
  font-weight: bold;
  font-size: 18px;
  color: #343a40;
  margin-bottom: 10px;
}

.form-label {
  font-weight: bold;
  font-size: 14px;
  color: #495057;
  margin-bottom: 5px;
}

.form-label span {
  display: block;
  margin-bottom: 4px;
}

.input-wrapper {
  position: relative;
}

.icon {
  position: absolute;
  left: 8px;
  color: #6c757d;
  font-size: 16px;
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

.input-field,
.textarea-field {
  width: 100%;
  padding: 10px 12px 10px 36px;
  font-size: 14px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.input-field:focus,
.textarea-field:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 4px rgba(0, 123, 255, 0.5);
}

.input-field:valid,
.textarea-field:valid {
  border-color: #28a745; /* Green border for valid input */
  box-shadow: 0 0 4px rgba(40, 167, 69, 0.5); /* Green glow for valid input */
}

.input-field:invalid,
.textarea-field:invalid {
  border-color: #dc3545; /* Red border for invalid input */
  box-shadow: 0 0 4px rgba(220, 53, 69, 0.5); /* Red glow for invalid input */
}

.textarea-field {
  min-height: 100px;
}

.error-message {
  display: none;
  font-size: 12px;
  color: #721c24;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  padding: 6px 10px;
  border-radius: 4px;
  margin-top: 4px;
}

.input-field:invalid ~ .error-message,
.textarea-field:invalid ~ .error-message {
  display: block;
}

.btn {
  padding: 10px 14px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out, transform 0.2s;
}

.btn-primary {
  background-color: #007bff;
  color: #fff;
}

.btn-primary:hover {
  background-color: #0056b3;
  box-shadow: 0 2px 6px rgba(0, 91, 187, 0.2);
  transform: translateY(-1px);
}

.btn-primary:disabled {
  background-color: #6c757d;
  cursor: not-allowed;
}
</style>