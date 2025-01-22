<script lang="ts">
    // Footer does not require logic in this case
  </script>
  
  <footer>
    <div class="footer-content">
      <a href="https://www.linkedin.com/in/fatih-güler" target="_blank" class="footer-link">
        <i class="fab fa-linkedin"></i>  <!-- LinkedIn icon -->
      </a>
      <a href="mailto:fguler.ict@gmail.com" class="footer-link">
        <i class="fas fa-envelope"></i> <!-- Email icon -->
      </a>
    </div>
  </footer>
  
  <style>
    footer {
      position: fixed;
      bottom: 0;
      width: 100%;
      color: var(--primary-light);
      padding: 20px 0;
      text-align: center;
    }
  
    .footer-content {
      display: flex;
      justify-content: center;
      gap: 20px;
    }
  
    .footer-link {
      color: #007bff; /* Use global icon color */
      font-size: 1.5rem;
      text-decoration: none;
    }
  
    .footer-link:hover {
      color: var(--btn-bg);
    }
  
    .footer-link i {
      color: var(--icon-color); /* Ensure the icon color is dynamic */
    }
  
    .footer-link:hover i {
      color: var(--btn-bg);
    }
  </style>
  