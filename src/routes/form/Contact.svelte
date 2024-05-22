<script>
    import { enhance } from '$app/forms';
  
    let isSubmitting = false;
    let successMessage = '';
    let errorMessage = '';
  
    function handleEnhance({ formElement }) {
      const handleSubmit = async ({ result }) => {
        isSubmitting = false;
        successMessage = '';
        errorMessage = '';
  
        if (result.type === 'failure') {
          errorMessage = result.data.error;
        } else if (result.type === 'success') {
          formElement.reset();
          successMessage = result.data.message;
        }
      };
      return handleSubmit;
    }
  </script>
  
<section class="form-container">
    <form method="POST" use:enhance={handleEnhance} on:submit={() => isSubmitting = true} class="contact-form">
        <fieldset class="form-wrapper">
            <legend class="form-legend">Personal Information</legend>
            <label for="name" class="form-label"><span>Name</span></label>
            <input type="text" name="name" id="name" required placeholder="e.g John Doe" class="input-field">
            
            <label for="email" class="form-label"><span>Email</span></label>
            <input type="email" name="email" id="email" required placeholder="e.g johndoe@mail.com" class="input-field">
            
            <label for="phone" class="form-label"><span>Phone</span></label>
            <input type="tel" name="phone" id="phone" required placeholder="Mobile number" class="input-field">
        </fieldset>
        
        <fieldset class="form-wrapper">
            <legend class="form-legend">Message</legend>
            <label for="message" class="form-label"><span>Message</span></label>
            <textarea name="message" id="message" required placeholder="Tell me your message..." class="input-field"></textarea>
        </fieldset>
        
        {#if successMessage}
            <p class="success-message">{successMessage}</p>
        {/if}
        
        {#if errorMessage}
            <p class="error-message">{errorMessage}</p>
        {/if}
        
        <button type="submit" class="btn btn-primary" disabled={isSubmitting}>
            {#if isSubmitting}
                Versturen...
            {:else}
                Verstuur
            {/if}
        </button>
    </form>
</section>

<style>
/* Section Styling */
.form-container {
    width: 100%;
    max-width: 400px;
    margin: 20px auto;
    padding: 20px;
    background: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}

/* Form Styling */
.contact-form {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

/* Wrapper for Form Elements */
.form-wrapper {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

/* Legends */
.form-legend {
    font-weight: bold;
    font-size: 16px;
    color: #333;
}

/* Labels */
.form-label {
    font-weight: bold;
    font-size: 14px;
    color: #333;
}

/* Input and Textarea Styling */
.input-field {
    width: 100%;
    padding: 8px 12px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    transition: border-color 0.3s ease-in-out;
}

.input-field:focus {
    border-color: #007bff;
    outline: none;
}

/* Button Styling */
.btn {
    padding: 10px 14px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
}

.btn-primary {
    background-color: #007bff;
    color: #fff;
}

.btn-primary:hover {
    background-color: #0056b3;
}

.btn-primary:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
}

/* Success and Error Messages */
.success-message,
.error-message {
    font-size: 14px;
    font-weight: bold;
    padding: 8px;
    border-radius: 4px;
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
